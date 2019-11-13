import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {addMovie} from '../../actions/movie';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import esLocale from "date-fns/locale/es";

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);


class  CreateMovie extends Component {

  state={
    open:false,
    active:true,
    selectedDate:new Date(),
    publication_date: new Date().toJSON().slice(0, 10),
    name:''
  }
  handleClickOpen = () => {
    this.setState({
      open: true
    })
  };
  handleClose = () => {
    this.setState({
      open: false
    })
  };
  handleChange=(e)=> {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(this.state);
  }
  handleDateChange = (selectDate) => { 
    let date = JSON.stringify(selectDate)
    date = date.slice(1, 11)
    this.setState(
      { publication_date: date, selectedDate:selectDate}
      ,()=>{
        console.log('luego de setear la fecha : ',this.state.selectedDate);
      });
  };
  addNewMovie = () =>
  {
    const {name, active, publication_date} = this.state;
    this.props.addMovie({id:Math.max(...this.props.movieList.map(function(o){return o.id})) + 1,name:name,active:active,publication_date:publication_date});
    this.setState({
      open: false
    })
  }
  render(){
    const {name,active} = this.state;
  return (
    <div>
      <Button variant="contained" style={{color: 'white', background:'green'}} onClick={this.handleClickOpen}>
        Nueva Pelicula
      </Button>
      <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.open}>
        <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
          <center>Nueva Pelicula</center>
        </DialogTitle>
        <DialogContent dividers>
        <Grid item xs={12} style={{padding:'15px'}}>
          <Grid container spacing={1} style={{marginBottom:'15px'}}>
            <Grid item xs={4}>
              <h6>Nombre de Pelicula:</h6>
            </Grid>
            <Grid item xs={8}>
              <TextField
                required
                id="standard-required"
                defaultValue="Nombre de Pelicula"
                margin="normal"
                variant="outlined"
                name="name"
                value={name}
                onChange={this.handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <h6>Fecha de Publicación:</h6>
            </Grid>
            <Grid item xs={8}>
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale} > 
                  <KeyboardDatePicker
                    placeholder="dd/mm/yyyy"
                    style={{width:'100%'}}
                    inputVariant="outlined"
                    disableToolbar
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    name="selectDate"
                    id="date-picker-inline"
                    value={this.state.selectedDate}
                    onChange={(selectDate) => { this.handleDateChange(selectDate) }}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={4}>
              <h6>Estado:</h6>
            </Grid>
            <Grid item xs={8}>
              <FormControl variant="outlined" fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="active"
                  value={active}
                  onChange={this.handleChange}
                >
                  <MenuItem value={true}>Activo</MenuItem>
                  <MenuItem value={false}>Inactivo</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
          <center>
            <Button variant="contained" onClick={this.addNewMovie} color="primary" style={{width:'200px'}}>
              Guardar
            </Button>
          </center>
        </DialogContent>
      </Dialog>
    </div>
  );
  }
}
const mapStateToProps = (state) => {
  return {
    movieList : state
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addMovie:addMovie,
  },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)((withStyles(styles)(CreateMovie)));