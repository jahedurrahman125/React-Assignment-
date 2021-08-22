import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
export default function CustomLink(props) {
  const { website } = props;
  return (
    <Typography gutterBottom>
      <Link href={website}>{website}</Link>
    </Typography>
  );
}
