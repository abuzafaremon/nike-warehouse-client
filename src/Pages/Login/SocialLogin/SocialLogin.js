import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import './SocialLogin.css';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init';
import Loading from '../../../Components/Loading/Loading';

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || '/home';

  if (user) {
    navigate(from, { replace: true });
  }

  if (loading) {
    return <Loading />
  }

  let errorElement;
  if (error) {
    errorElement = <p className='text-danger'>Error: {error?.message}</p>
  }
  return (
    <div>
      <div className="divider w-75 mx-auto d-flex align-items-center justify-content-center mb-3">
        <span></span>
        <p className='px-3 my-0'>Or</p>
        <span></span>
      </div>
      {errorElement}
      <div className='social-login d-flex flex-column gap-2' >
        <button onClick={() => signInWithGoogle()}><FcGoogle />&#8680;<span>Google Log In</span></button>
        <button disabled><FaFacebookSquare className='facebook' />&#8680;<span>Facebook Log In</span></button>
        <button disabled><BsGithub />&#8680;<span>Github Log In</span></button>
      </div>
    </div>
  );
};

export default SocialLogin;