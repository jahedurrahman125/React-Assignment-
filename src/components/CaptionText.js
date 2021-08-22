import React from "react";
import Typography from "@material-ui/core/Typography";

export default function CaptionText(props) {
  const { username } = props;
  return (
    <Typography variant="caption" display="block" gutterBottom>
      {username}
    </Typography>
  );
}
