export function addMovie(movie)
{
    return {
    type:'ADD_MOVIE',
    payload:movie
    }
}

export function deleteMovie(Id)
{
    return {
    type:'DELETE_MOVIE',
    payload:Id
    }
}

export function updateMovie(movie)
{
    return {
        type:'UPDATE_MOVIE',
        payload:movie
        }

}