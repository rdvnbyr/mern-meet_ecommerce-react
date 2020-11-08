import React, {useEffect, useState} from 'react';
// import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useDispatch, useSelector } from 'react-redux'
import { CartActions } from '../../../../actions';
// import { useAlert } from 'react-alert';
import {Redirect} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
  }));

const StripePay = () => {

  const [paymentIsPaid, setPaymentIsPaid] = useState(false);
  
    // const alert = useAlert()
    const dispatch = useDispatch()
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');
    const { cart } = useSelector(state => state.carts);
    // console.log(cart)

    useEffect(() => {
        // const price = cart[0].totalPrice;
        // dispatch(CartActions.paymentWithStripe(price));
        // Create PaymentIntent as soon as the page loads
        !paymentIsPaid &&
          window
            .fetch("http://localhost:8080/cart/create-payment-intent", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({price: cart[0].totalPrice})
            })
            .then(res => {
              return res.json();
            })
            .then(data => {
              setClientSecret(data.clientSecret);
            });

      }, [cart]);

      if(paymentIsPaid) {
        return <Redirect to="/payment-respond/success" />
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        //STRIPE PAYMENT
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: elements.getElement(CardElement)
            }
          });

          if (payload.error) {
            return <Redirect to="/payment-respond/error" />
          } else {
            dispatch(CartActions.paymentEnd(cart[0]._id));
            setPaymentIsPaid(true);
          }
      }
    // const classes = useStyles()

    return (
            <div style={{margin: "120px auto", maxWidth: "500px"}}>
              <div className="my-3 p-4">
                <form onSubmit={handleSubmit}>
                    <CardElement />
                    <button
                      type="submit"
                      disabled={!stripe}
                  >
                    PAY
                  </button>  
                </form>
              </div>
            </div>
    )
}

export default StripePay;