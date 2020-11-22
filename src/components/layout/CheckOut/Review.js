import React, {Fragment, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import {CartActions} from '../../../actions';




/* const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
]; */

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review({shippingAddress}) {
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state.carts);
  const {token, userId} = useSelector(state => state.session.access)
  const classes = useStyles();

  useEffect(() => {
    dispatch(CartActions.getCart(token, userId));
}, [dispatch, token, userId]);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      {
        (cart !== undefined || cart.length > 0) ?
          cart.map( (userCart, index) => {
            return(
              <List disablePadding key={index}>
                {
                  userCart.items.map((item, index) => (
                      <ListItem className={classes.listItem} key={index}>
                        <ListItemText secondary={item.product.title} primary={item.product.brand}/>
                        <ListItemText primary={'Quantity'} secondary={item.quantity}/>
                        <Typography variant="body2">{item.price}€</Typography>
                      </ListItem>
                    ))
                }
                <ListItem className={classes.listItem} style={{borderTop: '1px solid gray'}}>
                  <ListItemText primary="Shipping" />
                  <Typography variant="subtitle1" className={classes.total}>
                    {userCart.shippingPrice}€
                  </Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ListItemText primary="tax" />
                  <Typography variant="subtitle1" className={classes.total}>
                    {userCart.taxPrice}€
                  </Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ListItemText primary="Total" />
                  <Typography variant="subtitle1" className={classes.total}>
                    {userCart.totalPrice}€
                  </Typography>
                </ListItem>
              </List> 
            )
          })
          :
          null
      }
      <Grid container spacing={2} style={{borderTop: '1px solid gray'}}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          {
            shippingAddress.map( (userCart, index) => {
                return(
                  <Fragment key={index}>
                    <Typography gutterBottom>{userCart.firstname + " " + userCart.lastname}</Typography>
                    <Typography gutterBottom>
                      {`${userCart.address}, ${userCart.city}, ${userCart.region}, ${userCart.postCode}, ${userCart.country}`}
                    </Typography>
                  </Fragment>
                )
              })
          }
        </Grid>
{/*         <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
            </Grid> */}
      </Grid>
    </React.Fragment>
  );
}