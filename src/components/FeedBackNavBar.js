import React, { useState } from "react";
import { Navbar, FormControl, Button, Form, Modal } from "react-bootstrap";
import { GiTeacher } from "react-icons/gi";
import { BiMessageAltEdit } from "react-icons/bi";
import { Link } from "react-router-dom";

const FeedBackNavBar = (props) => {
    // Set initial states
    const [searchValue, setValue] = React.useState("");

    const search = () => {
        props.onSearch(searchValue.toLowerCase());
    };

    const [show, setShow] = useState(false);
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handlePost() {
        if (content.length == 0 || author.length == 0) return;
        props.submitPost({author: author, content: content});
        setShow(false);
    }

    return (
        <Navbar
            style={{ backgroundColor: "rgb(240, 240, 240)" }}
            expand="sm"
            sticky="top"
        >
            <Navbar.Brand className="mx-3"><Link style={{ textDecoration: 'none', color: 'black' }} to={{ pathname: '/' }}><h3 className="my-auto"><GiTeacher size={40} /> {props.title}</h3></Link></Navbar.Brand>
            <Navbar.Brand className="mx-3"><Link onClick={handleShow} style={{ textDecoration: 'none', color: 'black' }}>Create Post <BiMessageAltEdit size={25} className="mb-3" /> </Link></Navbar.Brand>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Author</Form.Label>
                        <Form.Control className="mb-2" as="textarea" rows={1} onChange={e => setAuthor(e.target.value)} placeholder="Enter your name ..." />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Content</Form.Label>
                        <Form.Control as="textarea" rows={2} onChange={e => setContent(e.target.value)} placeholder="Write your post here ..." />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="primary" onClick={handlePost}>Post</Button>
                </Modal.Footer>
            </Modal>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                <Form className="d-flex">
                    <FormControl
                        type="text"
                        onChange={(e) => setValue(e.target.value)}
                        placeholder={props.searchHolder}
                        className="mr-2"
                    />
                    <Button className="mx-2" variant="outline-dark" onClick={search}>Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default FeedBackNavBar;
