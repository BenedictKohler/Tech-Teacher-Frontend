import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import DatabaseService from "../services/DatabaseService";
import FeedBackNavBar from "./FeedBackNavBar";
import PostList from "./PostList";


const FeedBack = (props) => {

    // Set initial states
    const [isLoading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [postsCopy, setPostsCopy] = useState([]);

    const fetchData = async () => {
        let result = await DatabaseService.getPosts();
        if (result.status === 200) {
            setPosts(result.data);
            setPostsCopy(result.data);
        }
        else setPosts([]);
    }

    useEffect(() => {
        fetchData().then(() => {
            setLoading(false);
        });
    }, []);

    async function submitPost(post) {
        setLoading(true);
        await DatabaseService.addPost(post);
        fetchData();
        setLoading(false);
    }

    function search(searchValue) {
        let tempList = [];
        for (let post of postsCopy) {
            if (post.content.toLowerCase().includes(searchValue)) tempList.push(post);
        }
        setPosts(tempList);
    }

    return (
        <Container fluid>
            <FeedBackNavBar submitPost={submitPost} onSearch={search} title="Tech Teacher" searchHolder="Search by content" />
            {isLoading && <Spinner animation="border" />}
            {!isLoading && <PostList posts={posts} />}
        </Container>
    );

}

export default FeedBack;