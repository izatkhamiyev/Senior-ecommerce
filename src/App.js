import logo from './logo.svg';
import './App.css';
import AppRouter from 'routers/AppRouter';
import { StrictMode } from 'react'

const App = () => (
    <StrictMode>
        <AppRouter />
    </StrictMode>
);


export default App;
