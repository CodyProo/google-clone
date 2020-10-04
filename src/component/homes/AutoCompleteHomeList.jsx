import React from "react";
import SearchIcon from '@material-ui/icons/Search';

const AutoCompleteHomeList = ({ isFocus, title, changeItem, itemNum, onHover }) => {
  const activeFocus = isFocus ? "focusable" : "";
  const changeActiveIndexSearch = () => {
    changeItem(itemNum);
    onHover(itemNum);
  };


  return (
    <li className={activeFocus} onMouseEnter={changeActiveIndexSearch}>
      <a href="#">
        <SearchIcon />
        <span>{title}</span>
      </a>
    </li>
  );
};

export default AutoCompleteHomeList;
