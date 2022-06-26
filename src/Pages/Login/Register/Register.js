import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../../Components/Loading/Loading';
import './Register.css';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = async event => {
    event.preventDefault();
    // const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const agree = event.target.terms.checked;

    await createUserWithEmailAndPassword(email, password);
    event.target.reset();
  }
  if (loading) {
    return <Loading />
  }
  if (user) {
    navigate('/');
  }
  const handleShowPassword = () => {
    const pass = passwordRef.current;
    if (pass.type === "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
  }
  const navigateLogin = () => {
    navigate('/')
  }

  let errorElement;
  if (error) {
    errorElement = <p className='text-danger'>Error: {error?.message}</p>
  }

  return (
    <section className="py-5 register-page">
      <div className='login p-4 w-75 mx-auto shadow'>
        <h2 className='mb-4 text-center'>Please Register</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4" >
            <Form.Control ref={nameRef} type="text" placeholder="Your Name" id="name" required />
          </Form.Group>
          <Form.Group className="mb-4" >
            <Form.Control ref={emailRef} type="email" placeholder="Enter email" id="email" required />
          </Form.Group>

          <Form.Group className="mb-1" >
            <Form.Control ref={passwordRef} type="password" placeholder="Password" id="password" required />
          </Form.Group>
          <Form.Group className="mb-3 ms-3 d-flex gap-3" >
            <Form.Check onClick={handleShowPassword} type="checkbox" id='showPassword' name="showPassword" />
            <Form.Label htmlFor='showPassword'>Show Password</Form.Label>
          </Form.Group>
          <Button className='w-100' variant="dark" type="submit">
            Register
          </Button>
        </Form>
        {errorElement}
        <p>Already have an account? <Link to='/login' className=' text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        <SocialLogin />
      </div>
    </section>
  );
};

export default Register;