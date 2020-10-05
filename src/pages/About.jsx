import React, { useState } from "react";
import { useStore } from "../hooks/useStore";
import HeaderAbout from "../component/about/AboutHeader";
import AboutSection from "../component/about/AboutSection";
import { Redirect } from "react-router-dom";
import SearchInformation from "../component/about/SearchInformation";
import SearchResultContainer from "../component/about/SearchResultContainer";
import Pagination from "../component/about/Pagination";
import { Typography, Box } from "@material-ui/core";

const About = () => {
    const context = useStore();
    const [activeSection, changeActiveSection] = useState(0);
    const handleActiveSection = (event, newValue) => changeActiveSection(newValue);

    if (context.loading) {
        return <p>Loading</p>;
    }
    if (context.error) {
        return <p>Error</p>;
    }
    if (context.results.length === 0) {
        return <Redirect to="/" />;
    }

    const { queries } = context.results;
    console.log(context);

    return (
        <>
            <HeaderAbout valueInput={context.text} />
            <AboutSection active={activeSection} changeActive={handleActiveSection} />
            {context && context.results && context.results.items && context.results.items.length > 1 && (
                <SearchInformation
                    total={context.results.searchInformation.formattedTotalResults}
                    time={context.results.searchInformation.formattedSearchTime}
                />
            )}

            {context && context.results && context.results.items && context.results.items.length > 1 ? (
                <Box display="flex" flexDirection="row">
                    <Box>
                        <SearchResultContainer result={context.results} />
                        <Pagination query={queries} currentIndex={context.startIndex} text={context.text} />
                    </Box>
                </Box>
            ) : (
                    <Box className="about-container__padding" mt={6}>
                        <Box><Typography variant="overline">Your Search - {context.text} - did not match any documents</Typography></Box>
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