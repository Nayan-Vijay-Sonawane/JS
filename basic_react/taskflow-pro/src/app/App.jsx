import React from 'react';
import AppRoutes from "./routes";
import ErrorBoundary from '../components/ErrorBoundary';
import '../App.css';

function App() {
    return(
        <ErrorBoundary>
            <AppRoutes />
        </ErrorBoundary>
    )
}

export default App;