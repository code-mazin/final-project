import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
// import { Provider } from "react-redux"
// import store from './store';



const GlobalStyle = createGlobalStyle`
  *,
  *::before, 
  *::after {
    box-sizing: border-box;
  }  html, body {
    margin: 0;
  }

  body {
    font-family: BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
  }
`;

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
      {/* <Provider store={store}> */}
        <App />
      {/* </Provider> */}
  </BrowserRouter>,
  document.getElementById("root")
);
