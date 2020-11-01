import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import { Field } from 'formik';

export function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
        <Field
          as="select"
          name="paymentMethod"
          className="w-100 py-2"
          placeholder="Select.."
        >
          <option value={null} style={{display: 'none'}}>Select..</option>
          <option value="paypal">PayPal</option>
          <option value="creditCard">Credit Card</option>
          <option value="klarna">Klarna</option>
          <option value="debitCard">Debit Card</option>
        </Field>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}