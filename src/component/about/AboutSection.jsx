import React from "react";
import { Tabs, Tab, Box } from "@material-ui/core";
import { OndemandVideo, Wallpaper, Book, Apps, MoreVert } from "@material-ui/icons";

const AboutSection = ({ changeActive, active }) => {
    const tabs_label = [
        { label: 'All', icon: 'Search' },
        { label: 'Images', icon: 'Wallpaper' },
        { label: 'Video', icon: 'OndemandVideo' },
        { label: 'Books', icon: 'Book' },
        { label: 'More', icon: 'MoreVert' }
    ];

    const showIcon = (text) => {
        switch (text) {
            case "Search":
                return <Apps className="icon-section" />;
            case "Wallpaper":
                return <Wallpaper className="icon-section" />;
            case "Book":
                return <Book className="icon-section" />;
            case "MoreVert":
                return <MoreVert className="icon-section" />;
            case "OndemandVideo":
                return <OndemandVideo className="icon-section" />;
        }
    };

    return (
        <Box className="section-about-container">
            <Box className="about-container__padding">
                <Tabs value={active} onChange={changeActive}>
                    {tabs_label.map((elem, indexElem) => (
                        <Tab
                            className="tab-item"
                            key={elem.label}
                            id={`ele${indexElem}`}
                            icon={
                                <Box display="flex" flexDirection="row" alignItems="center">
                                    {showIcon(elem.icon)}
                                    <span id={`ele${indexElem}`}>{elem.label}</span>
                                </Box>
                            }
                        />
                    ))}
                </Tabs>
            </Box>
        </Box>
    );
};

export default AboutSection;