import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppProvider from "./context/ProductContext";
import FilterContextProvider from "./context/FilterContext";
import AddCartProvider from "./context/AddCartContext";
import reportWebVitals from './reportWebVitals';
import SnackbarProvider from 'react-simple-snackbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

      <AppProvider>
        <FilterContextProvider>
          <AddCartProvider>
            <SnackbarProvider>
              <App />
            </SnackbarProvider>

          </AddCartProvider>
        </FilterContextProvider>
      </AppProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
