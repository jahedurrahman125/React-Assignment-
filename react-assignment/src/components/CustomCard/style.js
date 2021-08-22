import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({

root: {
    width: 195,
    maxHeight: 250,
    border: "4px solid #b0215e"
  },
  name: {
    height: "4em",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatarStyle: {
    display: "flex",
    justifyContent:"center"
  }, 
  avatar: {
    backgroundColor: "red[500]",
  }
}));