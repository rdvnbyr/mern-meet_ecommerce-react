import React, {useEffect, useState} from 'react';
// import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useDispatch } from 'react-redux'
import { CartActions } from '../../../../actions';

const useStyles = makeStyles((theme) => ({
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
  }));

const StripePay = () => {

    const dispatch = useDispatch()
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        window
          .fetch("http://localhost:8080/cart/create-payment-intent", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({data: [{ id: "xl-tshirt" }], price: 2000})
          })
          .then(res => {
            return res.json();
          })
          .then(data => {
            setClientSecret(data.clientSecret);
          });
      }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("clicked");
        // // STRIPE PAYMENT
        // const {error, paymentMethod} = await stripe.createPaymentMethod({
        //     type: 'card',
        //     card: elements.getElement(CardElement)
        //   });
        // if(error) {
        //   console.log(error);
        // };
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: elements.getElement(CardElement)
            }
          });
        console.log(payload);
        dispatch(CartActions.paymentWithStripe(payload, 2000 ))
        // const {data} = await Axios.post('cart/payment', paymentmethod)
        // console.log(data)
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