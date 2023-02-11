import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { Navbar, Form, FormGroup, FormControl, Button } from "react-bootstrap";
import '../css/login.css'

function LoginComponent() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = () => {
      // Logic to handle login
      setIsLoggedIn(true);
      navigate('/home-page')
    };
  
    const handleRegister = () => {
      // Logic to handle registration
    };
  
    const handleLogout = () => {
      // Logic to handle logout
      setIsLoggedIn(false);
    };
  
    return (
      <div>
        <Navbar>
          <Navbar.Brand>Login Page</Navbar.Brand>
          {isLoggedIn ? (
            <Button variant="danger" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <div>
              <Button variant="success" onClick={() => setIsRegisterOpen(true)} className="navber-button-handle mr-2">
                <span >Register</span>
              </Button>
              <Button variant="primary" onClick={() => setIsRegisterOpen(false)} className="navber-button-handle">
                <span>Login</span>
              </Button>
            </div>
          )}
        </Navbar>
        {isRegisterOpen ? (
          <Form className="form-middle">
            <h1>Register</h1>
            <FormGroup>
              <FormControl
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <Button variant="primary" onClick={handleRegister}>
              Register
            </Button>
          </Form>
        ) : (
          <Form className="form-middle">
             <h1>Login</h1>
            <FormGroup>
              <FormControl
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <Button variant="primary" onClick={handleLogin}>
              Login
            </Button>
          </Form>
        )}
      </div>
    );
}

export default LoginComponent;