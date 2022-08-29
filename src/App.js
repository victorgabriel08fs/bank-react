import React from 'react';
import { Route, Link, Routes, useNavigate, useLocation } from 'react-router-dom';
import RateCreatePage from './pages/RateCreatePage';
import PaymentsPage from './pages/PaymentsPage';
import './App.css'
import UsersPage from './pages/UsersPage';
import CustomersPage from './pages/CustomersPage';
import HomePage from './pages/HomePage';
import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';

export default function App() {

  let navigate = useNavigate();
  let location = useLocation();

  const expand = 'md';

  const handleGoBack = () => {
    navigate(-1);
  }

  return (
    <div >
      <Navbar key={expand} bg="dark" expand={expand} variant="dark">
        <Container fluid>
          <Navbar.Brand>Bank</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Options
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link><Link className='nav-link' to="/users">Users</Link></Nav.Link>
                {/* <Nav.Link><Link className='nav-link' to="/payments">Payments</Link></Nav.Link> */}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <div className='App-header'>

        <Routes>
          <Route path="/users" element={<UsersPage />} />
          <Route path="/payments" element={<PaymentsPage />} />
          <Route path="/rate" element={<RateCreatePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/users/:id/customers" element={<CustomersPage />} />
          <Route path="/customers/:id/payments" element={<PaymentsPage />} />
        </Routes>
        {location.pathname == '/' ? '' : <Button onClick={handleGoBack}>Voltar</Button>}
      </div>
    </div>
  );
}

