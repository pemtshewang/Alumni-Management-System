import './App.css';
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import JumbotronDisplay from "./components/Jumbotron";
import {Route,BrowserRouter as Router, Switch} from "react-router-dom";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import CallIcon from '@mui/icons-material/Call';
import {useState,useEffect} from "react";

function App() {
  return (
    <div className="App">
    <Router>
      <NavBar />
      <JumbotronDisplay />
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
       <Fab size="small" color="secondary" aria-label="add">
        <CallIcon />
       </Fab>
      </Box>
      <Footer />
    </Router>
    </div>
  );
}
export default App;
