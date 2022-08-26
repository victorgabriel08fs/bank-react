import React from 'react';
import {Route, Link, Routes} from 'react-router-dom';
import RateCreatePage from './pages/RateCreatePage';
import PaymentsPage from './pages/PaymentsPage';
import './App.css'
import UsersPage from './pages/UsersPage';

export default function App() {
  return (
    <div className='App-header'>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/payments">Payments</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/rate">Register Rate</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/users" element={<UsersPage />} />
          <Route path="/payments" element={<PaymentsPage />} />
          <Route path="/rate" element={<RateCreatePage />} />
        </Routes>
      </div>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}