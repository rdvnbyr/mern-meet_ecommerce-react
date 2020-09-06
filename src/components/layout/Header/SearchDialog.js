import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function SearchDialog({open, onClose}) {

  return (
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title" fullWidth={true} maxWidth="lg">
        <DialogTitle id="form-dialog-title">SEARCH</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, omnis.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="search"
            label="SEARCH"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
  );
}
