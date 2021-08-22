import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    container:{
        display: "flex",
        justifyContent:"center",
        alignItems: "center",
        height: "100vh",
    },
    root:{
        maxWidth: 545,
        boxShadow: "5px 5px 15px rgba(#BA7E7E, .5)",
        border: "4px solid #b0215e",
    }
}));