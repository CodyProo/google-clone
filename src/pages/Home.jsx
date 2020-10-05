import React from "react";
import { Container } from "@material-ui/core";

import GoogleHeaderHome from "../component/homes/GoogleHeaderHome";
import GoogleInputHome from "../component/homes/GoogleInputHome";
import GoogleDialogServices from "../component/homes/GoogleDialogServices";
import AutoCompleteHomeList from "../component/homes/AutoCompleteHomeList";

import axios from "axios";

import { useHistory } from "react-router-dom";
import { useStoreDispatcher } from "../hooks/useStore";

const Home = () => {
  const [textSearch, changeTextSearch] = React.useState('');

  const [openDialog, changeOpenDialog] = React.useState(false);

  const [activeIndexSearch, changeActiveIndexSearch] = React.useState(0);

  const [focusInput, changeFocusInput] = React.useState(false);

  const [AutoCompleteList, changeAutoCompleteList] = React.useState([]);

  const handleChangeDialog = () => changeOpenDialog(prev => !prev);

  const onFocusInput = () => changeFocusInput(true);

  const onBlurInput = () => changeFocusInput(false);

  const history = useHistory();

  const dispatcher = useStoreDispatcher();

  const onKeyDownInput = (event) => {
    const key = event.keyCode;
    switch (key) {
      case 38:
        {
          if (activeIndexSearch == 0) {
            changeActiveIndexSearch(AutoCompleteList.length - 1);
          } else {
            changeActiveIndexSearch(prev => prev - 1);
          }
          break;
        }
      case 40: {
        if (activeIndexSearch >= AutoCompleteList.length - 1) {
          changeActiveIndexSearch(0);
        } else {
          changeActiveIndexSearch(prev => prev + 1);
        }
        break;
      }
      case 13: {
        const item = AutoCompleteList[activeIndexSearch];
        if (item && item.title) {
          changeTextSearch(item.title);
          onBlurInput();
          event.target.blur();
        }
        handleSearching();
        break;
      }
      case 27: {
        onBlurInput();
        event.target.blur();
        break;
      }
    }

    if (key == 38 || key == 40) {
      if (key == 38) {
        if (AutoCompleteList[activeIndexSearch - 1]) {
          const title = AutoCompleteList[activeIndexSearch - 1].title;
          changeTextSearch(title);
        } else {
          if (activeIndexSearch == 1) {
            const title = AutoCompleteList[0].title;
            changeTextSearch(title);
          } else {
            const title = AutoCompleteList[AutoCompleteList.length - 1].title;
            changeTextSearch(title);
          }
        }
      }

      if (key == 40) {
        if (AutoCompleteList[activeIndexSearch + 1]) {
          const title = AutoCompleteList[activeIndexSearch + 1].title;
          changeTextSearch(title);
        } else {
          if (activeIndexSearch == AutoCompleteList.length - 2) {
            const title = AutoCompleteList[AutoCompleteList.length - 1].title;
            changeTextSearch(title);
          } else {
            const title = AutoCompleteList[0].title;
            changeTextSearch(title);
          }
        }
      }
    }
  };

  const onChangeTextSearch = (event) => {
    const query = event.target.value;
    changeTextSearch(query);
    const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=5&srsearch=${query}`;

    axios.get(url)
      .then(({ data }) => changeAutoCompleteList(data.query.search))
      .catch((err) => console.log(err));
  };

  const handleSearching = () => {
    if (textSearch) {
      console.log("start searching ...");
      history.push('/about');
      dispatcher.useGoogleSearch(textSearch);
    }
  };

  const onHoverMouseAutoCompleteList = (itemNum) => {
    const title = AutoCompleteList[itemNum].title;
    changeTextSearch(title);
  };

  return (
    <Container>
      <GoogleHeaderHome dialogHandler={handleChangeDialog} />
      <GoogleInputHome
        onBlurHandler={onBlurInput}
        onKeydownHandler={onKeyDownInput}
        isFocus={focusInput}
        onFocusHandler={onFocusInput}
        onChangeHandler={onChangeTextSearch}
        value={textSearch}
        handleSearching={handleSearching}
      >
        {AutoCompleteList.length > 1 && focusInput && (
          <ul className={`list-autocomplete`}>
            {AutoCompleteList.map((element, index) => (
              <AutoCompleteHomeList onHover={onHoverMouseAutoCompleteList} itemNum={index} changeItem={changeActiveIndexSearch} key={element.title} isFocus={index == activeIndexSearch} {...element} />
            ))}
          </ul>
        )}
      </GoogleInputHome>
      <GoogleDialogServices top='10%' isShow={openDialog} toggle={handleChangeDialog} />
    </Container>
  );
};

export default Home;
