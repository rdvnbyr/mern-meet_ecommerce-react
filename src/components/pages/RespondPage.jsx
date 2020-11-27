import React from 'react';
import {Typography, Button} from '@material-ui/core';
import { useLocation} from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    stepper: {
      padding: theme.spacing(3, 0, 5),
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
  }));

const RespondPage = () => {
    const classes = useStyles();
    const params = useLocation().pathname.split('/')[2];

    return (
        <div style={{marginTop: '180px', minHeight: '50vh'}}>
            <CssBaseline />
            <main className={classes.layout}>
            <Paper className={classes.paper}>
                    <React.Fragment>
                        <Typography variant="h4" gutterBottom>
                            {
                                params === "success" ? 
                                    'Thank you for your order.'
                                : 
                                    'Order is not completed. Somthing went wrong.'
                            }
                        </Typography>
                        <Typography variant="subtitle1">
                        {
                            params === "success" ?
                                <p>
                                Your order number is #2001539. We have emailed your order confirmation, and will
                                send you an update when your order has shipped.
                                </p>
                            :
                                <p>
                                No Comment !
                                </p>
                        }
                        </Typography>
                        <div className={classes.buttons}>
                        <Link to="/">
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                            >
                                Go Back
                            </Button>
                          </Link>              
                      </div>
                </React.Fragment>
            </Paper>
            </main>
        </div>
    )
}

export default RespondPage
