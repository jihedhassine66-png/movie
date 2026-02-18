import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import filterIcon from '../assets/filtericon.svg';

const Header = ({ searchTerm, setSearchTerm, setShow, searchResults, setShowAddForm, setShowFilterForm, theme, toggleTheme }) => { 

  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid className="app-navbar-container">
        <Navbar.Brand href="#">Movie App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" style={{background: 'var(--text-secondary)'}} />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex w-100 align-items-center">
            
            {/* Barre de recherche qui prend la place disponible */}
            <Form.Control
              type="search"
              placeholder="Search movies..."
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ flexGrow: 1 }} 
            />
            
            <div className="d-flex gap-2 align-items-center">
              <Button variant="outline-success" onClick={() => { setShow(true); }}>Search</Button>
              <Button variant="outline-success" onClick={() => setShowAddForm(true)} >Add</Button>
              
              {/* Bouton Filtre */}
              <Button variant="outline-success" onClick={() => setShowFilterForm(true)} title="Filter" style={{padding: '8px 12px'}}>
                <img src={filterIcon} alt="filter" className="filter-icon" style={{width: '20px', height: '20px'}} />
              </Button>

              {/* Bouton Dark/Light Mode */}
              <Button 
                variant="link" 
                onClick={toggleTheme} 
                style={{
                  color: 'var(--text-main)', 
                  textDecoration: 'none', 
                  fontSize: '1.2rem',
                  padding: '4px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {theme === 'dark' ? (
                  // Icône Soleil (pour passer en clair)
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: '#ffc107'}}>
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </svg>
                ) : (
                  // Icône Lune (pour passer en sombre)
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: '#4b5563'}}>
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                )}
              </Button>
            </div>

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;