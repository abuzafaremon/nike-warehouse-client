import React, { useRef } from 'react';
import './Login.css';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import Loading from '../../../Components/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/';

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
    auth
  );

  const handleSubmit = async event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);

    const { data } = await axios.post('https://radiant-oasis-95888.herokuapp.com/login', { email });
    localStorage.setItem('accessToken', data.accessToken);
    navigate(from, { replace: true });
    event.target.reset();
  }

  if (user) {
    navigate(from, { replace: true });
  }

  if (loading || sending) {
    return <Loading />
  }

  const handleShowPassword = () => {
    const pass = passwordRef.current;
    if (pass.type === "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
  }

  let errorElement;
  if (error) {
    errorElement =
      <p className='text-danger'>Error: {error?.message}</p>
  }

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast('Email sent')
    }
    else {
      toast('Please enter your email address')
    }
  }

  const navigateRegister = () => {
    navigate('/register')
  }

  return (
    <section className='py-5 login-page'>
      <div className='login p-4 w-75 mx-auto shadow'>
        <h2 className='mb-4 text-center'>Please Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4" >
            <Form.Control ref={emailRef} type="email" placeholder="Enter email" id="email" required />
          </Form.Group>

          <Form.Group className="mb-4" >
            <Form.Control ref={passwordRef} type="password" placeholder="Password" id="password" required />
          </Form.Group>
          <Form.Group className="mb-4 ms-3 d-flex gap-3" >
            <Form.Check onClick={handleShowPassword} type="checkbox" id='showPassword' name="showPassword" />
            <Form.Label htmlFor='showPassword'>Show Password</Form.Label>
          </Form.Group>
          <Button className='w-100' variant="dark" type="submit">
            Login
          </Button>
        </Form>
        {errorElement}
        <p>Forgot Password? <span className='mb-1 text-decoration-none shadow-sm' onClick={resetPassword}>Reset Password</span></p>
        <p>New to Nike Warehouse? <Link to='/register' className=' text-decoration-none shadow-sm' onClick={navigateRegister}>Please Register</Link></p>
        <SocialLogin />
      </div>
    </section>
  );
};

export default Login;