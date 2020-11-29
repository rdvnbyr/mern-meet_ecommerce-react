import React from 'react';
import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { SessionActions } from '../../actions/session-actions';
import { Redirect } from 'react-router';
import {Button, ReactLoadingSpinnerBubbles} from '../elements'


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
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required('required'),
    password: Yup.string().min(8, 'Minimum 8 characters required!').required('Required!'),
  });

const SignIn = (props) => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const { isLogin, loading } = useSelector(
      (state) => ({
        isLogin: state.session.isLogin,
        loading: state.session.loading
      }),
      shallowEqual
    );

    const onSubmit = (values) => {
        const user = {
            email: values.email,
            password: values.password
        };
        dispatch(SessionActions.login(user));
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });

    if(isLogin) {
      return Redirect('/');
    };

    return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
        />
            {formik.touched && formik.errors.email ? <div className="text-danger">{formik.errors.email }</div> : null}
        
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            />
            {formik.touched && formik.errors.password ? <div className="text-danger">{formik.errors.password }</div> : null}
          {
            loading ? <ReactLoadingSpinnerBubbles /> : 
              <Button
                type="submit"
                children={"Sign In"}
                colorSubmit={true}
                className="btn-block text-uppercase mt-3"
                disabled={loading ? true : false}
              />
          }
          {/*<Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>*/}
        </form>
    </div>
    </Container>
    );
};

export default SignIn;
