import React from "react";
import { Box } from "@material-ui/core";
import GoogleImage from "../../assets/images/google.svg";
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from "react-router-dom";

const GoogleInputHome = ({
  children,
  onFocusHandler,
  onBlurHandler,
  isFocus,
  onKeydownHandler,
  onChangeHandler,
  value,
  handleSearching
}) => {
  const history = useHistory();
  const focusable = isFocus ? "input-focus" : "";
  const isDisableSearch = value ? "" : "icon-disabled";
  const ActiveGoogle = () => history.push("/google");

  return (
    <Box className="google-container" display="flex" flexDirection="column" alignItems="center">
      <img className="google-image" src={GoogleImage} />
      <div className={`google-input-home ${focusable}`}>
        <SearchIcon className={`icons search-icons ${isDisableSearch}`} onClick={handleSearching} />
        <input type="text" value={value} onBlur={onBlurHandler} onChange={onChangeHandler} onKeyDown={onKeydownHandler} onFocus={onFocusHandler} />
        <MicIcon onClick={ActiveGoogle} className="icons microphone-icons" />
      </div>
      {children}
      <Box mt={5} className="google-button-group__home" display="flex" flexDirection="row" alignItems="center">
        <button>Google Search</button>
        <button>I'm Feeling Lucky</button>
      </Box>
    </Box>
  );
};

export default GoogleInputHome;
