import React from "react";
import { Box, Typography } from "@material-ui/core";
import Services from "./Services";


const GoogleDialogServices = ({ isShow, toggle }) => {
  return (
    <Box className={`custom-dialog ${isShow ? 'dialog-show' : ''}`}>
      <Box className="custom-dialog-overlay" onClick={toggle}></Box>
      <Box display="flex" alignItems="flex-start" justifyContent="space-between" flexWrap="wrap" className="custom-dialog-content">

        {Services.map((service)=>(
          <Box key={service.text} className="google-item" align="center">
            <img src={service.icon} />
            <Typography variant="caption">{service.text}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default GoogleDialogServices;
