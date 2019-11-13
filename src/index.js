import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import movieReducer from './reducers/movieReducer';
import {Provider} from 'react-redux'

let initialState = [
    {id:1,name:'John Doe',active:true,publication_date:12/11/2019},
    {id:2,name:'Jane Doe',active:false,publication_date:12/11/2019},
    {id:3,name:'Terry Adams',active:false,publication_date:12/11/2019},
    {id:4,name:'Jenny Smith',active:true,publication_date:12/11/2019}
];

if( localStorage.getItem("movies") === null)
localStorage.setItem('movies',JSON.stringify(initialState));
else 
initialState = JSON.parse(localStorage.getItem('movies'));

const store = createStore(movieReducer,initialState);
ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>, document.getElementById('root'));
serviceWorker.unregister();
