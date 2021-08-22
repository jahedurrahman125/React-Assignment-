import {
    Card, CardContent, Typography
} from '@material-ui/core';
import useStyles from './style';
import { useParams } from 'react-router-dom';
import Api from '../../Api/api';
import CustomTypography from '../CustomTypography';

const DetailsCard =() => {
  const [users] = Api();
  const classes = useStyles();
  const { id } = useParams();
  return (
    <div className={classes.container}>
      <Card className={classes.root}>
    <CardContent className={classes.cards}>
      {users.filter(user=>user.id == id).map((selectedItem, index) =>(
        <div key={index}>
          <CustomTypography text={`-name: ${selectedItem.name}`}/>
          <CustomTypography text={`-username: ${selectedItem.username}`}/>
          <CustomTypography text={`-email: ${selectedItem.email}`}/>
          <CustomTypography text={`-phone: ${selectedItem.phone}`}/>
          <CustomTypography text={`-company: ${selectedItem.company.name}`}/>
          <CustomTypography text={`-website: ${selectedItem.website}`}/>
          <CustomTypography text={`-address: `}/>
          <ul>
          <li><CustomTypography text={`street: ${selectedItem.address.street}`}/></li>
          <li><CustomTypography text={`suite: ${selectedItem.address.suite}`}/></li>
          <li><CustomTypography text={`city: ${selectedItem.address.city}`}/></li>
          <li><CustomTypography text={`zipcode: ${selectedItem.address.zipcode}`}/></li>
          </ul>
        </div>
      ))}
    </CardContent>
    </Card>
    </div>
  );
}
export default DetailsCard;