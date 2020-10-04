import React from "react"
import { Typography } from "@material-ui/core"

const Title = ({children, classes}) => {
  return (
    <Typography variant="overline" className={classes}>{children}</Typography>
  )
}

Title.defaultProps = {
  classes: ""
}

export default Title;
