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
    {id:1,name:'Jason Bourne',active:true,publication_date:"2019-12-13"},
    {id:2,name:'Alicia en el Pais de las Maravillas',active:false,publication_date:"2019-12-13"},
    {id:3,name:'Tarzan la Leyenda',active:false,publication_date:"2019-12-13"},
    {id:4,name:'Mi buen Amigo Gigante',active:true,publication_date:"2019-12-13"}
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
