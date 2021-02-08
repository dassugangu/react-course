import React, { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Event from "./Event";
import Users from "./Users";
import CreateUser from "./CreateUser";
import Home from "./Home";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Navbar, Nav, Form } from "react-bootstrap";
//import "./App.css";

function App() {
  const [name, setName] = useState("Darshan");
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link href="#features">
              <Link to="/about">About</Link>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <Link to="/contact">Contact Us</Link>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <Link to="/list">User List</Link>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <Link to="/create">Create User</Link>
            </Nav.Link>
          </Nav>
        </Navbar>
        <div class="container">
          <div class="row">
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/list">
                <Users />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/create">
                <CreateUser />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
        {/* <h1>Hello Rose from react</h1> */}
        {/* <About name={name} /> */}
        {/* <button onClick={()=>setName('Darshan Chauhan')}>Update Props</button>
        <Contact name={name}/> */}
        {/* <Event name={name} /> */}
        {/* <Users />
        <CreateUser /> */}
      </Router>
    </div>
  );
}

export default App;
