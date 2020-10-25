import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';


const PayPalCheckout = () => {

        const onSuccess = (payment) => {
            		console.log("The payment was succeeded!", payment);
        }
 
        const onCancel = (data) => {
            console.log('The payment was cancelled!', data);
        }
 
        const onError = (err) => {
            console.log("Error!", err);
        }
 
        let env = 'sandbox'; 
        let currency = 'EUR'; 
        let total = 1; 

        const client = {
            sandbox:    'R8NNEUJFMED98',
            production: 'access_token$sandbox$xwq64m9jj9dhwgm7$968b48d5c98ff7acf07871ce240261d7',
        }

         return (
            <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
        );
    
}
export default PayPalCheckout