import React from "react";
import { Box } from "@material-ui/core";
import ResultSearch from "./Result";


const SearchResultContainer = ({ result }) => {
    return (<Box className="about-container__padding">
        {result.items.map((element) => (
            <ResultSearch key={element.title} {...element} />
        ))}
    </Box>);
};

export default SearchResultContainer;