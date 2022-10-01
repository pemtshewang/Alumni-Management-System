import './App.css';
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import JumbotronDisplay from "./components/Jumbotron";
import {Route,BrowserRouter as Router, Switch} from "react-router-dom";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
// import {useState,useEffect} from "react";
import SignIn from "./components/credentials/Login";

function App() {
  return (
    <div className="App">
    <Router>
      <NavBar />
      <JumbotronDisplay />
      <SignIn />
      <hr/>
      <Footer />
    </Router>
    </div>
  );
}
export default App;
