import React from "react";
import { Box } from "@material-ui/core";
import ResultSearch from "./Result";


const SearchResultContainer = ({ result, check_is_exists_on_archive, addToArchive }) => {
    return (<Box className="about-container__padding">
        {result.items.map((element) => (
            <ResultSearch key={element.cacheId} addToArchive={addToArchive} {...element} check_is_exists_on_archive={check_is_exists_on_archive} />
        ))}
    </Box>);
};

export default SearchResultContainer;