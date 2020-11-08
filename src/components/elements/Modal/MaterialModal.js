import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';



export function AlertDialogSlide({
    open,// boolean
    onClose,
    keepMounted,// boolean
    transitionDirection = "up",
    children,
    buttonColor = "primary",
    disableBackdropClick,
    disableEscapeKeyDown,
    fullScreen = false,
    maxWidth, // 'lg', 'md', 'sm', 'xl', 'xs'
    onBackdropClick // () => {}
}) {


    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction={transitionDirection} ref={ref} {...props} />;
    });

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted={keepMounted}
        onClose={onClose}
        disableBackdropClick={disableBackdropClick}
        disableEscapeKeyDown={disableEscapeKeyDown}
        fullScreen={fullScreen}
        maxWidth={maxWidth}
        onBackdropClick={onBackdropClick}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {children}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color={buttonColor}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
