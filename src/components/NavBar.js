import React from "react";
import { Navbar, FormControl, Button, Form } from "react-bootstrap";
import { GiTeacher } from "react-icons/gi";
import { FaCommentDots } from 'react-icons/fa';
import { Link } from "react-router-dom";

const NavBar = (props) => {
  // Set initial states
  const [searchValue, setValue] = React.useState("");

  const search = () => {
    props.onSearch(searchValue.toLowerCase());
  };

  return (
    <Navbar
      style={{ backgroundColor: "rgb(240, 240, 240)" }}
      expand="sm"
      sticky="top"
    >
      <Navbar.Brand className="mx-3"><Link style={{ textDecoration: 'none', color: 'black' }} to={{ pathname: '/' }}><h3 className="my-auto"><GiTeacher size={40} /> {props.title}</h3></Link></Navbar.Brand>
      <Navbar.Brand className="mx-3"><Link to={{ pathname: '/feedback' }} style={{ textDecoration: 'none', color: 'black' }}>Leave Feedback <FaCommentDots className="mb-3" /></Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {props.displaySearch && <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Form className="d-flex">
          <FormControl
            type="text"
            onChange={(e) => setValue(e.target.value)}
            placeholder={props.searchHolder}
            className="mr-2"
          />
          <Button className="mx-2" variant="outline-dark" onClick={search}>Search</Button>
        </Form>
      </Navbar.Collapse>}
    </Navbar>
  );
};

export default NavBar;
