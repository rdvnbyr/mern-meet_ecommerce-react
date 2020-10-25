import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Field } from 'formik';
import { InputTextField } from '../../elements';

export default function AddressForm() {

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Field
            component={InputTextField}
            {...{
              fullWidth: true
            }}
            label="First Name"
            name="firstName"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
            <Field
              component={InputTextField}
              {...{
                fullWidth: true
              }}
              label="Last Name"
              name="lastName"
            />
        </Grid>
        <Grid item xs={12} sm={12}>
            <Field
              component={InputTextField}
              {...{
                fullWidth: true
              }}
              label="Address"
              name="address"
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <Field
              component={InputTextField}
              {...{
                fullWidth: true,
                autoComplete: "shipping address-level2"
              }}
              label="City"
              name="city"
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <Field
              component={InputTextField}
              {...{
                fullWidth: true
              }}
              label="State/Province/Region"
              name="region"
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <Field
              component={InputTextField}
              {...{
                fullWidth: true,
                autoComplete: "shipping postal-code"
              }}
              label="Zip / Postal code"
              name="postCode"
            />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={InputTextField}
            {...{
              fullWidth: true,
              autoComplete: "shipping country"
            }}
            label="Country"
            name="country"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}