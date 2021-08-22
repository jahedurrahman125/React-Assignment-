import React from "react";
import CustomButton from "../CustomButton";
import {Card, CardHeader, CardContent, Avatar} from "@material-ui/core";
import CustomTypography from "../CustomTypography";
import CaptionText from "../CaptionText";
import CustomLink from "../CustomLink";
import useStyles from './style';


export default function CustomCard({user}) {
  const classes = useStyles();
  function avatarIcon(value){
    const fullName = value.split(' ');
    const avatar = fullName.shift().charAt(0);
    return avatar;
  }
 
  return (
    <Card className={classes.root}>
      <div className={classes.avatarStyle}><CardHeader  
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} >
            {avatarIcon(user.name)}
          </Avatar>
        }     
      /></div>
      <CardContent>
        <div className={classes.name} >
          <CustomTypography text={user.name} />
        </div>
        <CaptionText username={`@${user.username}`}/>
        <CustomLink website={user.website} />
        <CustomButton buttonText="More Details" userId={user.id}/>
      </CardContent>
    </Card>
  );
}
