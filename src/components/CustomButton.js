import React from "react";
import Button from "@material-ui/core/Button";

export default function CustomButton(props) {
  const { buttonText, userId } = props;
  
  return (
    <Button href={`/${userId}`} variant="contained" color="primary">
      {buttonText}
    </Button>
  );
}
