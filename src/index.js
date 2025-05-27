import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { useParams } from 'react-router';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider, StyledEngineProvider, } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

import HomePage from './pages/HomePage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme} defaultMode="dark">
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route component={HomePage} />
          <Route path="*" element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
              <App />
            </main>
          } />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StyledEngineProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
