import { useEffect } from "react";
import Card  from "react-bootstrap/Card";

const movieItem = (props)=>{
    //useEffect();
    return (
        /*Bootstrap cards imported and used
        to display movies*/
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

export default movieItem;