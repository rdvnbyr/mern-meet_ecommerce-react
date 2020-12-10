import React, {useEffect, useState} from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useDispatch, useSelector } from 'react-redux'
import { CartActions } from '../../../../actions';
import {Redirect} from 'react-router-dom';
import './_stripePay.scss';
import {Button} from 'react-bootstrap';
import {Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { ReactLoadingSpinnerBubbles } from '../../../elements'


  const initialValues = {
    firstName: "",
    lastName: ""
  };

  const checkoutSchema = Yup.object({
    firstName: Yup.string().required('require'),
    lastName: Yup.string().required('require'), 
  });

  const StripePay = () => {

  const [paymentIsPaid, setPaymentIsPaid] = useState(false);
  const [submiting, setSubmiting] = useState(false);
  
    // const alert = useAlert()
    const dispatch = useDispatch()
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');
    const { cart } = useSelector(state => state.carts);
    const loading = useSelector(state => state.carts.loading);
    const apiUrl = useSelector(state=>state.apps.apiUrl)

    useEffect(() => {
        // const price = cart[0].totalPrice;
        // dispatch(CartActions.paymentWithStripe(price));
        // Create PaymentIntent as soon as the page loads
          window
            .fetch(`${apiUrl}/cart/create-payment-intent`, {
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

      }, [apiUrl,cart]);

      if(paymentIsPaid) {
        return <Redirect to="/payment-respond/success" />
      };

    return (
      <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={checkoutSchema}
      onSubmit={ async (values) => {
        setSubmiting(true)
        const payload = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement)
          }
        });

        if (payload.error) {
          setSubmiting(false);
        } else {
          dispatch(CartActions.paymentEnd(cart[0]._id));
          setPaymentIsPaid(true);
        }
     
      }}
    >
      {({ handleSubmit, touched, errors }) => (
        <>
        <div className="container _contain-stripe-form">
          <div className="my-3 p-4 mx-auto _stripe-div">
            <Form className="_form-stripe" onSubmit={handleSubmit}>
              <p>Please place your order</p>
              <div className="my-3">
              <label>First Name</label>
                <Field
                  name="firstName"
                  placeholder="Enter First Name"
                  className="field_input_stripe p-3"
                />
                {
                  (touched.firstName && errors.firstName) && <div className="text-danger text-right">{errors.firstName}</div> 
                }
              </div>
              <div className="my-3">
              <label>Last Name</label>
                <Field
                  name="lastName"
                  placeholder="Enter Last Name"
                  className="field_input_stripe p-3"
                />
                {
                  (touched.lastName && errors.lastName) && <div className="text-danger text-right">{errors.lastName}</div> 
                }
              </div>
              <div className="my-3">
                <label>Card Number</label>
                <CardElement
                  className="sr-card-element"
                />
              </div>
                {
                  submiting || loading ?
                    <div className="text-center"><ReactLoadingSpinnerBubbles color="blue"/></div>
                  :
                    <Button
                      className="_stripe-btn btn btn-secondary btn-block my-4 p-2"
                      type="submit"
                      disabled={!stripe}
                    >
                      Pay
                    </Button>
                }
            </Form>
          </div>
        </div>
        </>
      )}
    </Formik>

    )


}

export default StripePay;