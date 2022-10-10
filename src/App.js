import "./App.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import ProfileList from "./components/Profiles/ProfileList";
import EventSection from "./components/Events/Events";
import Login from "./components/credentials/Login";
import SignUp from "./components/credentials/SignUp";
import EventCreate from "./components/Events/forms/CreateEvent";
import { UserContext } from "./context/UserContext";
import { useMemo, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const providerValue = useMemo(() => ({ isLoggedIn, setIsLoggedIn }),[isLoggedIn, setIsLoggedIn ]);

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn , user, setUser }}>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" exact element={<MainPage />} />
            <Route path="/alumni" element={<ProfileList />} />
            <Route path="/events" element={<EventSection />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/events/create/" element={isLoggedIn?<EventCreate />:<Login/>} />
          </Routes>
          <hr />
          <>
            <Footer />
          </>
        </div>
      </Router>
    </UserContext.Provider>
  );
}
export default App;
