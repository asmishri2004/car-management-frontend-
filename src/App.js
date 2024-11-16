import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpLogin from './pages/SignUpLogin';
import CarList from './pages/CarList';
import CarForm from './pages/CarForm';
import CarDetail from './pages/CarDetail';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignUpLogin />} />
                <Route path="/cars" element={<CarList />} />
                <Route path="/cars/new" element={<CarForm />} />
                <Route path="/cars/:id" element={<CarDetail />} />
                <Route path="/cars/:id/edit" element={<CarForm />} />
            </Routes>
        </Router>
    );
}

export default App;
