import React from "react";
import { Formik, Form } from "formik";
import * as Yup from 'yup';

// Validation schema
const checkoutSchema = Yup.object().shape({
    firstName: Yup.string().required('required'),
    lastName: Yup.string().required('required'),
    address: Yup.string().required('required'),
    city: Yup.string().required('required'),
    postCode: Yup.number().required('required'),
    country: Yup.string().required('required')
});

export const initialValues = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    region: "",
    postCode: "",
    country: "",
    paymentMethod: ""
}

export function FormikHandler({
  btnRef,
  payment,
  children,
  autoComplete
}) {

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
        onSubmit={(values) => {
          payment(values);
        }}
      >
        {({ handleSubmit }) => (
          <>
            <Form className="" autoComplete={autoComplete}>
                {children}
              <button
                type="submit"
                style={{ display: "none" }}
                ref={btnRef}
                onSubmit={() => handleSubmit()}
              ></button>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
}
