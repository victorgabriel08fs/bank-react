import { Route, Routes, BrowserRouter } from 'react-router-dom';
import React from 'react';

import PaymentPage from './pages/RateCreatePage';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PaymentPage />} path="/" exact />

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;