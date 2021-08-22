import { Card, Col } from "react-bootstrap";


const PostList = (props) => {

    return (
        props.posts.map(post =>
            <Col>
                <Card className="m-3">
                    <Card.Title>{post.author}</Card.Title>
                    <Card.Body>
                        <Card.Text>{post.content}</Card.Text>
                    </Card.Body>
                    <Card.Text>{post.dateAdded}</Card.Text>
                </Card>
            </Col>
        )
    );
}

export default PostList;