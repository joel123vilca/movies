import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CreateMovie from './CreateMovie';
import {addMovie,deleteMovie,updateMovie} from '../../actions/movie';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableFooter,
    Paper,
    Button,
    Toolbar,
    Grid,
    Typography
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';


class MovieList extends Component {  
    
  onDelete(id){
    let r = window.confirm("Do you want to delete this item");
    if( r === true)
      {
    this.props.deleteMovie(id);
    }
  }
    render() {
        const { movieList } = this.props;
        return (
        <Paper >
            <div>
              <Grid container spacing={0} >
                <Grid item xs={12}>
                  <Toolbar className="toolbar">
                    <Typography className="titulo-banner">Peliculas</Typography>
                    <div style={{flexGrow: '2'}} />
                    <CreateMovie  addMovie={this.props.addMovie}/>
                  </Toolbar>
                </Grid>
                <Grid item xs={6} >
                </Grid>
                <Grid item xs={6} style={{paddingTop:'10px',paddingBottom:'10px',paddingRight:'10px'}}>
                </Grid>
              </Grid>
              <Grid container spacing={0} >
                <Grid item xs={12} style={{paddingLeft:'10px',paddingRight:'10px'}} className="contenido-tabla">
                  <Table  aria-label="custom pagination table">
                    <TableHead>
                      <TableRow className="listdata--head">
                        <TableCell style={{color: 'black', fontSize: '14px'}}>ID</TableCell>
                        <TableCell style={{color: 'black', fontSize: '14px'}}>Nombre</TableCell>
                        <TableCell style={{color: 'black', fontSize: '14px'}}>F.Publicación</TableCell>
                        <TableCell style={{color: 'black', fontSize: '14px'}}>Estado</TableCell>
                        <TableCell style={{color: 'black', fontSize: '14px'}} align="right"></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      { movieList.map(movie => (
                          <TableRow  key={movie.id}>
                            <TableCell component="th" scope="row">
                              {movie.id}
                            </TableCell>
                            <TableCell component="th" scope="row">
                              {movie.name}
                            </TableCell>
                            <TableCell component="th" scope="row">
                              {movie.publication_date}
                            </TableCell>
                            <TableCell component="th" scope="row">
                              {movie.active}
                            </TableCell>
                            <TableCell align="right">
                                  <Button onClick={() => this.addNewMovie()}>
                                  <Link><EditIcon/></Link>
                                  </Button>
                                  <Button  onClick={() => this.onDelete(movie.id)}>
                                  <Link><DeleteIcon /></Link>
                                  </Button>
                              </TableCell>
                          </TableRow>
                      ))}
                    </TableBody>
                    <TableFooter>
                    </TableFooter>
                  </Table>
                </Grid>
              </Grid>
            </div>
          </Paper>
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
    deleteMovie:deleteMovie,
    updateMovie:updateMovie
  },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(MovieList);
