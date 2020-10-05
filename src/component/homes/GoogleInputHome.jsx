import React from "react";
import { Box } from "@material-ui/core";
import GoogleImage from "../../assets/images/google.svg";
import GoogleInput from "./GoogleInput";

const GoogleInputHome = (props) => {
  return (
    <Box className="google-container" display="flex" flexDirection="column" alignItems="center">
      <img className="google-image" src={GoogleImage} />
      <GoogleInput {...props} />
      {props.children}
      <Box mt={5} className="google-button-group__home" display="flex" flexDirection="row" alignItems="center">
        <button>Google Search</button>
        <button>I'm Feeling Lucky</button>
      </Box>
    </Box>
  );
};

export default GoogleInputHome;
