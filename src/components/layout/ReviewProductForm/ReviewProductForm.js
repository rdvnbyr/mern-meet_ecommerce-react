import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import {TextField, TextareaAutosize} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useLocation } from 'react-router';
import { ProductsActions } from '../../../actions';



const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const initialValues = {
    rating: '',
    comment: ''
};

const validationSchema = Yup.object({
    rating: Yup.number().required('Required!'),
    comment: Yup.string().min(8, 'Minimum 8 characters required!').required('Required!'),
});

export const ReviewProductForm = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const productId = useLocation().pathname.split("/")[2];

    const onSubmit = (values) => {

        const review = {
            rating: values.rating,
            comment: values.comment
        };
        dispatch(ProductsActions.reviewProductAction(review, productId));
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });

    return (
        <div style={{margin: "120px auto", minHeight: "60vh"}}>
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Review Product
                </Typography>
                <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
                <div className="form-group row">
                    <div className="col-md-12">
                    <label htmlFor="rating" className="text-black">Rating </label>
                    <select 
                        as="select"
                        className="form-control"
                        id="rating"
                        name="rating" 
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.rating}
                    >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    {
                        formik.touched.rating && formik.errors.rating ?
                        <div style={{fontSize: '10px'}} className="text-danger text-right">{formik.errors.rating}</div>
                        :
                        null
                    }
                    </div>
                </div>
                
                    <div className="form-group row">
                        <div className="col-md-12">
                            <label htmlFor="comment" className="text-black">Comment </label>
                            <textarea 
                                name="comment"
                                id="comment"
                                cols="30"
                                rows="7" 
                                className="form-control"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.comment}
                            ></textarea>
                            {
                                formik.touched.comment && formik.errors.comment ?
                                <div style={{fontSize: '10px'}} className="text-danger text-right">{formik.errors.comment}</div>
                                :
                                null
                            }
                        </div>
                    </div>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="inherit"
                    className={classes.submit}
                >
                    Review
                </Button>
                </form>
            </div>
            </Container>
    </div>
    );
};

