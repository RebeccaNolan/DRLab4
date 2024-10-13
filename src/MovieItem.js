import { useEffect } from "react"; //useEffect hook
import Card  from "react-bootstrap/Card"; //card component import 

const movieItem = (props)=>{ //movieItem, takes props as input
    //useEffect();
    return (
        /*Bootstrap cards imported and used
        to display Title, Poster and year*/
        <div>
            <Card>
                <Card.Header>{props.myMovie.Title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myMovie.Poster} alt={props.myMovie.Title} />
                        <footer>{props.myMovie.Year}</footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    );
}

export default movieItem; //export movieItem component
