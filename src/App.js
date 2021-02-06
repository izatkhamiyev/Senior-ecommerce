import logo from './logo.svg';
import './App.css';
import AppRouter from 'routers/AppRouter';
import { StrictMode } from 'react'
import {BrowserRouter} from 'react-router-dom'

const App = () => (
    <BrowserRouter>
        <StrictMode>
            <AppRouter />
        </StrictMode>
    </BrowserRouter>
);


export default App;
