import { Card, Col } from 'react-bootstrap';
import ReactPlayer from 'react-player';

const VideoList = (props) => {
    let videos = [];
    let ind = 1;

    for (let video of props.videos) {
        videos.push(
            <Col xs={6}>
                <Card border="secondary" className="my-3 mx-2">
                    <Card.Title className="mt-3"><h3>Episode {ind++}</h3></Card.Title>
                    <ReactPlayer
                        width="100%"
                        url={video.path}
                        controls={true}
                    />
                    <Card.Body>
                        <Card.Text>{video.description}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        );
    }

    return videos;
}

export default VideoList;