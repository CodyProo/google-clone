import React from "react"
import Title from "./Title"
import AppsIcon from '@material-ui/icons/Apps';
import { IconButton, Avatar, Box } from "@material-ui/core"

const GoogleHeaderHome = ({ dialogHandler }) => {
  return(
    <Box display="flex" justifyContent="space-between" alignItems="center" flexDirection="row">
      <Box display="flex" flexDirection="row">
        <Title classes="mr-4 nav-text">About</Title>
        <Title classes="nav-text">Store</Title>
      </Box>
      <Box className="Avatar-sec" display="flex" alignItems="center">
        <Title classes="mr-4 nav-text">Gmail</Title>
        <Title classes="mr-3 nav-text">Images</Title>
        <IconButton onClick={dialogHandler} className="mr-3 dialogbtn">
          <AppsIcon />
        </IconButton>
        <Avatar />
      </Box>
    </Box>
  );
}

export default GoogleHeaderHome;
