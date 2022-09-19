import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import userAuth from 'shared/hooks/useAuth';


import { signup } from 'redux/contacts/auth/authOperations';

const RegisterForm = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const isUserLogin = userAuth();

  if (isUserLogin) {
    return <Navigate to="/contacts" />;
  }

  const { name, email, password } = state;

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(signup(state));

    setState({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Login name</Form.Label>
        <Form.Control
          value={name}
          name="name"
          type="text"
          placeholder="Enter name"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={email}
          name="email"
          type="email"
          placeholder="Enter email"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Label htmlFor="inputPassword5">Password</Form.Label>
      <Form.Control
        onChange={handleChange}
        value={password}
        type="password"
        name="password"
        id="inputPassword5"
        placeholder="Enter password"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Text id="passwordHelpBlock" muted>
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </Form.Text>

      <Button variant="primary" type="submit" style={{ marginTop: '15px' }}>
        Register
      </Button>
    </Form>
  );
};

export default RegisterForm;
