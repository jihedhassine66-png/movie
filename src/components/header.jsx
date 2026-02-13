import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import filterIcon from '../assets/filtericon.svg';


const Header = ({ searchTerm, setSearchTerm, setShow, searchResults, setShowAddForm,setShowFilterForm}) => { 

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className="app-navbar-container">
        <Navbar.Brand href="#">Movie App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="type here to Search..."
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{border: '1px solid var(--primary) !important'}}
            />
            <Button variant="outline-success" onClick={() => { setShow(true); }}>Search</Button>
            <Button variant="outline-success" onClick={() => setShowAddForm(true)} >Add a movie</Button>
            <Button variant="outline-success" onClick={() => setShowFilterForm(true)} title="Filter" aria-label="Open filter">
              <img src={filterIcon} alt="filter" className="filter-icon" />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;