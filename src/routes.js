import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MovieList from './components/movies/MovieList';
const Routes = () => (
    <Switch>
        <Route  exact path="/" component={MovieList} />
    </Switch>
)
export default Routes;