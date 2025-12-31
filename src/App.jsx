import React from 'react';
import './App.css';
import NavRoutes from './Components/Navbar/NavRoutes';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div>
        <NavRoutes />
      </div>
    </ErrorBoundary>
  );
}

export default App;
