import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MovieList from './components/movies/MovieList';
const Routes = () => (
    <Switch>
        <Route  path="/list" component={MovieList} />
    </Switch>
)
export default Routes;