const movieReducer = (state = [],action) => {

    switch(action.type){
    
    case 'ADD_MOVIE':
    let stateCopy = [...state,action.payload];
    localStorage.setItem('movies',JSON.stringify(stateCopy));
    return stateCopy
    
    case 'DELETE_MOVIE':
    stateCopy = state.filter( movie => movie.id !== action.payload)
    localStorage.setItem('movies',JSON.stringify(stateCopy));
    return stateCopy
        
    case 'UPDATE_MOVIE':
    stateCopy = state.map((movie) => {
        const {id,name,active,publication_date} = action.payload;
        if(movie.id === id)
        {
        movie.name = name;
        movie.active = active;
        movie.publication_date = publication_date;
        } 
        return movie;
    })
    localStorage.setItem('movies',JSON.stringify(stateCopy));
    return stateCopy
    
    default:
        return state;
    }
    
    }
export default movieReducer;