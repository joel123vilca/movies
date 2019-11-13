const movieReducer = (state = [],action) => {
    switch(action.type){
    
    case 'ADD_MOVIE':
      let stateCopy = [...state,action.payload];
      localStorage.setItem('movies',JSON.stringify(stateCopy));
    return stateCopy
    
    case 'DELETE_MOVIE':
      state = state.filter( movie => movie.id !== action.payload)
      localStorage.setItem('movies',JSON.stringify(state));
    return state
    
    case 'UPDATE_MOVIE':
      state = state.map((movie) => {
        const {id,name,active,publication_date} = action.payload;
        if(movie.id === id)
        {
        movie.name = name;
        movie.active = active;
        movie.publication_date = publication_date;
        } 
        return movie;
      })
      localStorage.setItem('movies',JSON.stringify(state));
    return state
    
    default:
      return state;
    }
  }
export default movieReducer;