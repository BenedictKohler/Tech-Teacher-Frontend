import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import NavBar from './NavBar';
import ImageList from './ImageList';
import data from '../data/VideoInfo';


const Home = (props) => {

    // Set initial states
    const [isLoading, setLoading] = useState(true);
    var [tutorials, setTutorials] = useState([]);

    const fetchData = async () => {
        setTutorials(data);
    }

    useEffect(() => {
        fetchData().then(() => {
            setLoading(false);
        });
    }, []);

    function search(searchValue) {
        let tempList = [];
        for (let tutorial of data) {
            if (tutorial.description.toLowerCase().includes(searchValue)) tempList.push(tutorial);
        }
        setTutorials(tempList);
    }

    return (
        <Container fluid>
            <NavBar onSearch={search} title="Tech Teacher" displaySearch={true} searchHolder="Search by topic" />
            {isLoading && <Spinner animation="border" />}
            {!isLoading && <Container><Row><ImageList tutorials={tutorials} /></Row></Container>}
        </Container>
    );
}


export default Home;