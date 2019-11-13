import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from '@material-ui/icons/Delete';

export default function DeleteDialog(props) {
  return (
    <div>
      <Dialog
        open={props.deleteDialog}
        onClose={props.handleClose}
        PaperProps={{
          style: {
            background:'#C0392B',
            color: 'white'
          }
        }}
        
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"¿Está seguro de eliminar el video?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleDelete} color="primary">
          <DeleteIcon style={{color:'white'}}/> 
            <span style={{color:'white',paddingTop: '2px'}}> Eliminar</span>
          </Button>
          <Button onClick={props.handleClose} color="primary" autoFocus>
          <span style={{color:'white'}}>Cancelar</span>  
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
