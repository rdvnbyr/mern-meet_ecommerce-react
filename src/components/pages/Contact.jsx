import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import { ContactActions } from '../../actions';
import {AlertDialogSlide} from '../elements';
import { ReactLoadingSpinnerBubbles } from '../elements';

const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    subject: "",
    message: ""
};

function Contact() {

    const dispatch = useDispatch();
    const {actionLoading, respondMessage, isSuccess } = useSelector(
        (state) => ({
            actionLoading: state.contact.loading,
            respondMessage: state.contact.respondMsg,
            isSuccess: state.contact.isSuccess
        }),
        shallowEqual
    );

    const handleClose = () => {
        dispatch(ContactActions.isSuccessToggle());
    };

    const validationSchema = Yup.object({
        email: Yup.string().email().required("require"),
        firstName: Yup.string().min( 3, "must be minimum 3 characters").required("require"),
        lastName: Yup.string().required('require'),
        message: Yup.string().min(10, 'must be min 10 characters').max(500, 'must be max 500 characters').required('require')
    });

    const onSubmit = (values , { resetForm }) => {
        // console.log(values);
        const subscribe = {...values};
        dispatch(ContactActions.postSubscribe(subscribe));
        resetForm();
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });

    return (
        <div style={{minHeight:"100vh", marginTop:"120px", marginBottom: "120px"}}>
            <>
                <div className="site-blocks-cover inner-page aos-init aos-animate"  data-aos="fade">
                    <div className="container">
                        <div className="row" style={{margin: 'auto', maxHeight: '100vh'}}>
                            <img src="https://cdn.shopify.com/s/files/1/0052/7043/7978/t/4/assets/contact_us_banner_long2.jpg?14881" alt="" className="img-fluid"/>
                        </div>
                    </div>
                </div>
                <>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="mt-5 p-3 p-lg-5 border">
                                        <div className="form-group row">
                                            <div className="col-md-6">
                                                <label htmlFor="c_fname" className="text-black">First Name <span className="text-danger">*</span></label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="c_fname"
                                                    name="firstName"
                                                    onBlur={formik.handleBlur}
                                                    onChange={formik.handleChange}
                                                    value={formik.values.firstName}
                                                />
                                                {formik.touched.firstName && formik.errors.firstName ?  <div style={{fontSize: '10px'}} className="text-danger text-right">{formik.errors.firstName}</div>: null}
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="c_lname" className="text-black">Last Name <span className="text-danger">*</span></label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="c_lname"
                                                    name="lastName"
                                                    onBlur={formik.handleBlur}
                                                    onChange={formik.handleChange}
                                                    value={formik.values.lastName}
                                                />
                                                {
                                                    formik.touched.lastName && formik.errors.lastName ?
                                                    <div style={{fontSize: '10px'}} className="text-danger text-right">{formik.errors.lastName}</div>
                                                    :
                                                    null
                                                }
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <label htmlFor="c_email" className="text-black">Email <span className="text-danger">*</span></label>
                                                <input 
                                                    type="email"
                                                    className="form-control"
                                                    id="c_email"
                                                    name="email"
                                                    placeholder=""
                                                    onBlur={formik.handleBlur}
                                                    onChange={formik.handleChange}
                                                    value={formik.values.email}
                                                />
                                                {
                                                    formik.touched.email && formik.errors.email ?
                                                    <div style={{fontSize: '10px'}} className="text-danger text-right">{formik.errors.email}</div>
                                                    :
                                                    null
                                                }
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <label htmlFor="c_subject" className="text-black">Subject </label>
                                                <input 
                                                    type="text" 
                                                    className="form-control"
                                                    id="c_subject"
                                                    name="subject" 
                                                    onBlur={formik.handleBlur}
                                                    onChange={formik.handleChange}
                                                    value={formik.values.subject}
                                                />
                                                {
                                                    formik.touched.subject && formik.errors.subject ?
                                                    <div style={{fontSize: '10px'}} className="text-danger text-right">{formik.errors.subject}</div>
                                                    :
                                                    null
                                                }
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <label htmlFor="c_message" className="text-black">Message </label>
                                                <textarea 
                                                    name="message"
                                                    id="c_message"
                                                    cols="30"
                                                    rows="7" 
                                                    className="form-control"
                                                    onBlur={formik.handleBlur}
                                                    onChange={formik.handleChange}
                                                    value={formik.values.message}
                                                ></textarea>
                                                {
                                                    formik.touched.message && formik.errors.message ?
                                                    <div style={{fontSize: '10px'}} className="text-danger text-right">{formik.errors.message}</div>
                                                    :
                                                    null
                                                }
                                            </div>
                                        </div>
                                        {
                                            actionLoading ?
                                                <div className="d-flex justify-content-center">
                                                    <ReactLoadingSpinnerBubbles width="100px" />
                                                </div>
                                                
                                            :
                                            <div className="form-group row">
                                                <div className="col-lg-12">
                                                    <button type="submit" className="btn btn-dark btn-lg btn-block">Contact Us</button>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-5 mt-5 ml-auto">
                                <div className="p-4 border mb-3">
                                    <span className="d-block text-primary h6 text-uppercase">New York</span>
                                    <p className="mb-0">203 Fake St. Mountain View, San Francisco, California, USA</p>
                                </div>
                                <div className="p-4 border mb-3">
                                    <span className="d-block text-primary h6 text-uppercase">London</span>
                                    <p className="mb-0">203 Fake St. Mountain View, San Francisco, California, USA</p>
                                </div>
                                <div className="p-4 border mb-3">
                                    <span className="d-block text-primary h6 text-uppercase">Canada</span>
                                    <p className="mb-0">203 Fake St. Mountain View, San Francisco, California, USA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </>
            {
                isSuccess &&
                    <>
                        <AlertDialogSlide
                            open={isSuccess}
                            onClose={handleClose}
                            children={respondMessage.message}
                        />
                    </>
            }
        </div>
    )
}

export default Contact