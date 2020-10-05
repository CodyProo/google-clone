import React from "react";
import { Box } from "@material-ui/core";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import { CreateArrayPages } from "../../help";


const Pagination = ({ query, currentIndex, nextPageHandler, prevPageHandler }) => {
    const activePage = Math.ceil(currentIndex === 0 || currentIndex == 1 ? 1 : (currentIndex / 11) + 1);

    return (
        <Box className="about-container__padding pagination" my={5} display="flex" flexDirection="row" alignItems="center">
            {query && query.previousPage && query.previousPage[0] && (
                <Box onClick={prevPageHandler} mr={1}><KeyboardArrowLeft className="cursor-icon" /></Box>
            )}
            {CreateArrayPages(query.request[0].count).map((element) => (
                <li className={element + 1 === activePage ? 'active-page' : ''} key={element * 1000}>{element + 1}</li>
            ))}
            {query && query.nextPage && query.nextPage[0] && (
                <KeyboardArrowRight onClick={nextPageHandler} className="cursor-icon" />
            )}
        </Box>
    );
};

export default Pagination;