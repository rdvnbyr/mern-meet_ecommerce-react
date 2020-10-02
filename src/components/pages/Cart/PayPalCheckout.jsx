import React, {Component} from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
 
class PayPalCheckout extends Component {
    render() {
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
            sandbox:    'YOUR-SANDBOX-APP-ID',
            production: 'YOUR-PRODUCTION-APP-ID',
        }
         return (
            <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
        );
    }
}
export default PayPalCheckout