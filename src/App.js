import './App.css';
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import JumbotronDisplay from "./components/Jumbotron";
import {Route,BrowserRouter as Router, Switch} from "react-router-dom";
// import {useState,useEffect} from "react";
import EventSection from './components/Events/Events';
import ProfileList from './components/Profiles/ProfileList';
function App() {
  return (
    <div className="App">
    <Router>
      <NavBar />
      <JumbotronDisplay />
      <ProfileList/>
      <hr/>
      <Footer />
    </Router>
    </div>
  );
}
export default App;
