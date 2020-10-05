import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { FormatAboutSearch, removeBreakTag } from '../../help';

const ResultSearch = (props) => {
    const link_caption = FormatAboutSearch(props.link);
    return (
        <Box className="result-search__item">
            <Box><a href={props.link} className="link-url__caption">{link_caption.map((element, index) => {
                if (index === 0) return <div key={index} className="mr-1">{element} {link_caption.length > 1 && <span> > </span>} </div>;
                else return <div key={index} className="mr-1"><span>{element}</span> {index < link_caption.length - 1 && (
                    <span> > </span>
                )}</div>;
            })}
            </a></Box>
            <Box mt={1}><a href={props.link} className="link-url__title">{props.title}</a></Box>
            <Box mt={1}>
                <Typography className="result-search__text" variant="caption"><div dangerouslySetInnerHTML={{ __html: removeBreakTag(props.htmlSnippet) }} /></Typography>
            </Box>
        </Box>
    );
};

export default ResultSearch;