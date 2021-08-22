import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


const ImageList = (props) => {

    let tutorials = [];

    for (let tutorial of props.tutorials) {
        tutorials.push(
            <Col xs={6}>
            <Card className="my-3 mx-2">
                <Card.Title className="mt-3"><h3>{tutorial.title}</h3></Card.Title>
                <Card.Img variant="top" src={tutorial.image} />
                <Card.Body>
                    <Card.Text>{tutorial.description}</Card.Text>
                    <Button variant="dark"><Link style={{ textDecoration: 'none', color: 'white' }} to={{ pathname: "/tutorial", content: tutorial }}>View Tutorial</Link></Button>
                </Card.Body>
            </Card>
            </Col>
        );
    }

    return tutorials;

}

export default ImageList;