import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    text: {
        fontFamily: "Arial, Helvetica, sans-serif",
        color: '#70757a',
    }, root: {
        marginTop: 13
    }
});


const SearchInformation = ({ total, time }) => {
    const styles = useStyles();
    return <Box className={`${styles.root} about-container__padding`}><Typography className={styles.text} variant="caption">About {total} results ({time} seconds)</Typography></Box>;
};

export default SearchInformation;