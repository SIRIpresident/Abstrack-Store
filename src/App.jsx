import React from 'react';
import Main from './pages/Main';
import Ipbuseo from './components/Ipbuseo';
import Hweone from './components/Hweone';
import Fire from './components/Fire';
import Odd from './components/Odd';
import Rect from './components/Rect';
import Hyeonsoo from './components/Hyeonsoo';
import Sign from './components/Sign';
import Design from './components/Design';
import Sticker from './components/Sticker';
import Notebook from './components/Notebook';
import Dongsang from './components/Dongsang';
import Heart from './components/Heart';
import {createGlobalStyle} from "styled-components";
import {BrowserRouter as Router, Route} from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    background-color: #EBF5FF;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

function App() {
  return (
    <>
      <header>
      <GlobalStyle/>
      <Router>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/ipbuseo" exact>
          <Ipbuseo/>
        </Route>
        <Route path="/hweone" exact>
          <Hweone/>
        </Route>
        <Route path="/fire" exact>
          <Fire/>
        </Route>
        <Route path="/odd" exact>
          <Odd/>
        </Route>
        <Route path="/rect" exact>
          <Rect/>
        </Route>
        <Route path="/hyeonsoo" exact>
          <Hyeonsoo/>
        </Route>
        <Route path="/sign" exact>
          <Sign/>
        </Route>
        <Route path="/design" exact>
          <Design/>
        </Route>
        <Route path="/sticker" exact>
          <Sticker/>
        </Route>
        <Route path="/notebook" exact>
          <Notebook/>
        </Route>
        <Route path="/Dongsang" exact>
          <Dongsang/>
        </Route>
        <Route path="/heart" exact>
          <Heart/>
        </Route>
      </Router>
      </header>
    </>
  );
}

export default App;
