//pass data from parent to child
const Movies = (props)=> {
    return (
        <div>
            movies component
            {console.log(props.movieDisp)} 
        </div>
    );
}

export default Movies;