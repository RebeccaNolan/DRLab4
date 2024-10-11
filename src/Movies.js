
import MovieItem from "./MovieItem";

const Movies = (props)=> { /*props passes data from parent to child*/
    return props.movieDisp.map(
        (movie)=> {
            return <MovieItem myMovie = {movie} key={movie.imdbID}/> 
        }
    );
}

export default Movies;