import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap import remains
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Ensure BrowserRouter and Routes/Route are imported

// Ensure Router is wrapped around the App component here for routing to work properly
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Dynamic route for capturing 'text' parameter */}
        <Route path="/:text" element={<App />} /> 
        {/* Default route */}
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </StrictMode>
);
