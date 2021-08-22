import React from "react";
import Typography from "@material-ui/core/Typography";
export default function CustomTypography(props) {
  const { text } = props;
  
  return (
    <Typography variant="h5" gutterBottom>
      {text}
    </Typography>
  );
}
