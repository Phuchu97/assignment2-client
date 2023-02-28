import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { Navbar, Form, FormGroup, FormControl, Button } from "react-bootstrap";
import { loginPage, registerAccount } from "../FetchApi";
import '../css/login.css'

function LoginComponent() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameRegister, setUsernameRegister] = useState("");
    const [passwordRegister, setPasswordRegister] = useState("");
  
    const callbacklogin = (data) => {
      if(data.statusCode === 200) {
        alert('Đăng nhập thành công');
        localStorage.userId = data.userId;
        setIsLoggedIn(true);
        navigate('/home-page');
      } else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng!');
      }
    }

    const callbackRegister = (data) => {
      console.log(data);
    }

    async function handleLogin(){
      // Logic to handle login
      try {
        await loginPage(callbacklogin, {
          username: username,
          password: password
        })
      } catch {
        alert('Có lỗi trong quá trình đăng nhập!')
      }
    };
  
    async function handleRegister(){
      // Logic to handle registration
      try {
        await registerAccount(callbackRegister, {
          username: usernameRegister,
          password: passwordRegister
        });
        alert('Đăng kí thành công')
      } catch {
        alert('Có lỗi trong quá trình đăng kí!')
      }
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
                value={usernameRegister}
                type="text"
                placeholder="Username"
                onChange={(e) => setUsernameRegister(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                value={passwordRegister}
                type="password"
                placeholder="Password"
                onChange={(e) => setPasswordRegister(e.target.value)}
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