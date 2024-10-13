
import MovieItem from "./MovieItem"; //import MovieItem component

const Movies = (props)=> { /*props passes data from parent to child*/
    return props.movieDisp.map( /*Maps over movieDisp array (passed via props)*/
        (movie)=> {
            return <MovieItem myMovie = {movie} key={movie.imdbID}/>  //Pass each movie object to MovieItem, using imdbID as key
        }
    );
}

export default Movies; //export movies component
