import React, { useState } from 'react';
import { Box, IconButton, Avatar, Container } from "@material-ui/core";
import GoogleImage from "../../assets/images/google.svg";
import GoogleInput from "../homes/GoogleInput";
import AppsIcon from '@material-ui/icons/Apps';
import GoogleDialogServices from '../homes/GoogleDialogServices';
import { useEffect } from 'react';
import { useStoreDispatcher } from '../../hooks/useStore';

const HeaderAbout = ({ valueInput }) => {
    const [isFocus, changeFocus] = useState(false);
    const [value, changeValue] = useState();
    const onBlurHandler = () => changeFocus(false);
    const [openDialog, changeDialog] = useState(false);
    const onFocusHandler = () => changeFocus(true);
    const dispatcher = useStoreDispatcher();
    const onChangeHandler = (event) => changeValue(event.target.value);
    const onKeydownHandler = (event) => {
        if (event.keyCode === 13 && value !== "") {
            dispatcher.useGoogleSearch(value);
            changeFocus();
            event.target.blur();
        }
    };
    const handleSearching = () => {
        dispatcher.useGoogleSearch(value);
    };
    const handleChangeDialog = () => changeDialog(prev => !prev);

    useEffect(() => {
        changeValue(valueInput);
    }, [valueInput]);


    return (
        <Container>
            <Box className="About__Header">
                <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                    <img className="google-about-img" src={GoogleImage} />
                    <GoogleInput
                        isIconAfter
                        onKeydownHandler={onKeydownHandler}
                        onBlurHandler={onBlurHandler}
                        value={value}
                        onChangeHandler={onChangeHandler}
                        onFocusHandler={onFocusHandler}
                        isFocus={isFocus}
                        handleSearching={handleSearching}
                    />
                </Box>
                <Box display="flex" flexDirection="row">
                    <IconButton onClick={handleChangeDialog} className="mr-4 dialogbtn">
                        <AppsIcon />
                    </IconButton>
                    <Avatar />
                </Box>
                <GoogleDialogServices top='15%' isShow={openDialog} toggle={handleChangeDialog} />
            </Box>
        </Container>
    );
};

export default HeaderAbout;