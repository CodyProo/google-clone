import React from "react";
import { useHistory } from "react-router-dom";
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';

const GoogleInput = ({ isFocus, value, onBlurHandler, onChangeHandler, onKeydownHandler, onFocusHandler, handleSearching, isIconAfter }) => {
    const history = useHistory();
    const focusable = isFocus ? "input-focus" : "";
    const isDisableSearch = value ? "" : "icon-disabled";
    const ActiveGoogle = () => history.push("/google");
    const iconAfterClass = isIconAfter ? "google-input-after-icon" : '';

    return (
        <div className={`google-input-home ${focusable} ${iconAfterClass}`}>
            <SearchIcon className={`icons search-icons ${isDisableSearch}`} onClick={handleSearching} />
            <input type="text" value={value} onBlur={onBlurHandler} onChange={onChangeHandler} onKeyDown={onKeydownHandler} onFocus={onFocusHandler} />
            <MicIcon onClick={ActiveGoogle} className="icons microphone-icons" />
        </div>
    );
};

GoogleInput.defaultProps = {
    onBlurHandler: () => { },
    onFocusHandler: () => { },
    handleSearching: () => { },
    onChangeHandler: () => { },
    onKeydownHandler: () => { },
};

export default GoogleInput;