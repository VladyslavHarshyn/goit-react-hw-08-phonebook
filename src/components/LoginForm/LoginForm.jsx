import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import useAuth from 'shared/hooks/useAuth';

import { login } from 'redux/contacts/auth/authOperations';


const LoginForm = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const isUserLogin = useAuth();

  const dispatch = useDispatch();

  const { email, password } = state;

  if (isUserLogin) {
    return <Navigate to="/contacts" />;
  }

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(login(state));

    setState({
      name: '',
      email: '',
      password: '',
    });
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
