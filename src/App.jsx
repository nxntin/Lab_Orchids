import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Orchids from './components/Homepage/Orchids';
import OrchidDetail from './components/OrchidDetail';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import { ThemeProvider } from './theme/ThemeContext';

function App() {
    return (
        <ThemeProvider>
            <Router>
                <div className="App">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Orchids />} />
                        <Route path="/all-plants" element={<Orchids />} />
                        <Route path="/new" element={<Orchids />} />
                        <Route path="/detail/:id" element={<OrchidDetail />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
