import React, { useState } from "react";
import HeaderAbout from "../component/about/AboutHeader";
import AboutSection from "../component/about/AboutSection";
import { useParams } from "react-router-dom";
import SearchInformation from "../component/about/SearchInformation";
import SearchResultContainer from "../component/about/SearchResultContainer";
import Pagination from "../component/about/Pagination";
import { Typography, Box } from "@material-ui/core";
import useSWR from "swr";
import { BASEURL } from "../help/config";

const About = () => {
    const params = useParams();
    const [page, setPage] = useState(window.localStorage.getItem("page") || 0);
    const [archive] = useState(JSON.parse(window.localStorage.getItem("archive")) || []);
    const check_is_exists_on_archive = (cacheID) => archive.find((element) => element === cacheID);
    const addToArchive = (cacheID) => window.localStorage.setItem("archive", JSON.stringify([...archive, cacheID]));
    const { error, data } = useSWR(BASEURL(params.text, page));
    const [activeSection, changeActiveSection] = useState(0);
    const handleActiveSection = (event, newValue) => changeActiveSection(newValue);

    const nextPageHandler = () => {
        const page_items = data.queries.nextPage[0].startIndex;
        console.log(page_items);
        setPage(page_items);
        window.localStorage.setItem("page", page_items);
    };

    const prevPageHandler = () => {
        const page_items = data.queries.previousPage[0].startIndex;
        setPage(page_items);
        window.localStorage.setItem("page", page_items);
    };


    if (error) return <p>Error</p>;
    if (!data) return <p>loading ...</p>;
    console.log(data);

    return (
        <>
            <HeaderAbout valueInput={params.text} />
            <AboutSection active={activeSection} changeActive={handleActiveSection} />
            {data.items && data.items.length > 1 && (
                <SearchInformation
                    total={data.searchInformation.formattedTotalResults}
                    time={data.searchInformation.formattedSearchTime}
                />
            )}

            {data.items && data.items.length > 1 ? (
                <Box display="flex" flexDirection="row">
                    <Box>
                        <SearchResultContainer
                            addToArchive={addToArchive}
                            result={data}
                            check_is_exists_on_archive={check_is_exists_on_archive}
                        />
                        <Pagination
                            query={data.queries}
                            nextPageHandler={nextPageHandler}
                            currentIndex={page}
                            prevPageHandler={prevPageHandler}
                        />
                    </Box>
                </Box>
            ) : (
                    <Box className="about-container__padding" mt={6}>
                        <Box><Typography variant="overline">Your Search - {params.text} - did not match any documents</Typography></Box>
                        <Box><Typography variant="overline">Suggestions : </Typography></Box>
                        <ul>
                            <li><Typography variant="overline">Make sure all words are spelled correctly.</Typography></li>
                            <li><Typography variant="overline">Try different keywords.</Typography></li>
                            <li><Typography variant="overline">Try more general keywords.</Typography></li>
                        </ul>
                    </Box>
                )}
        </>
    );
};

export default About;