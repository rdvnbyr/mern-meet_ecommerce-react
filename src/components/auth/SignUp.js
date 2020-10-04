import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { SessionActions } from '../../actions/session-actions';

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp= (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  
    const initialValues = {
        username : '',
        email: '',
        password: '',
        passwordConfirm: '',
        
    };

    
    const lowercaseRegex = /(?=.*[a-z])/;
    const uppercaseRegex = /(?=.*[A-Z])/;
    const numericRegex = /(?=.*[0-9])/;

    const validationSchema = Yup.object().shape({
      username: Yup.string()
        .min(2, "Too Short!")
        .required("Required"),
      email: Yup.string()
        .lowercase()
        .email('Must be a valid email!')
        .required('Required!'),
      password: Yup.string()
        .matches(lowercaseRegex, 'one lowercase required!')
        .matches(uppercaseRegex, 'one uppercase required!')
        .matches(numericRegex, 'one number required!')
        .min(8, 'Minimum 8 characters required!')
        .required('Required!'),
      passwordConfirm: Yup.string()
        .oneOf([Yup.ref('password')], 'Password must be the same!')
        .required('Required!'),
    });

    const onSubmit = (values) => {
      const user = {
          username:values.username,
          email: values.email,
          password: values.password,
          status: "client"
      };
      dispatch(SessionActions.register(user));
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Username"
                name="username"
                type="text"
                // error="wrong"
                success="right"
                value={formik.values.username}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched && formik.errors.username ? <div className="text-danger">{formik.errors.username }</div> : null}
            </Grid>
            <Grid item xs={12}>
              <TextField
              variant="outlined"
              required
              fullWidth
              label="Email"
              name="email"
              type="email"
              // error="wrong"
              success="right"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched && formik.errors.email ? <div className="text-danger">{formik.errors.email }</div> : null}
            </Grid>
            <Grid item xs={12}>
              <TextField
              variant="outlined"
              required
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched && formik.errors.password ? <div className="text-danger">{formik.errors.password }</div> : null}
            </Grid>
            <Grid item xs={12}>
              <TextField
              variant="outlined"
              required
              fullWidth
              label="Password Confirm"
              name="passwordConfirm"
              type="password"
              // error="wrong"
              success="right"
              value={formik.values.passwordConfirm}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched && formik.errors.passwordConfirm ? <div className="text-danger">{formik.errors.passwordConfirm }</div> : null}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="inherit"
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
      </div>

    </Container>
  )
  }


export default SignUp;
