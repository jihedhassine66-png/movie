import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import filterIcon from '../assets/filtericon.svg';


const Header = ({ searchTerm, setSearchTerm, setShow, searchResults, setShowAddForm,setShowFilterForm}) => { 



  const showSearchResults = () => {
    return (
      <div style={{position: 'absolute', top: '60px', right: '20px', backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', zIndex: 1000, maxHeight: '300px', overflowY: 'auto'}}>
        {searchResults.length > 0 ? (
          searchResults.map((movie, index) => (
            <div key={movie.id || index} style={{padding: '10px', borderBottom: '1px solid #eee'}}>
              <p style={{margin: 0, fontWeight: 'bold'}}>{movie.title}</p>
              <p style={{margin: 0, fontSize: '0.9rem', color: '#555'}}>{movie.description}</p>
            </div>
          ))
        ) : ( 
          <div style={{padding: '10px', color: '#555'}}>No results found</div>
        )} 
      </div>
    );
  }  

  useEffect(() => {
    // keep for debugging if needed
  }, [searchTerm, searchResults]); 

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className="app-navbar-container">
        <Navbar.Brand href="#">Movie App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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