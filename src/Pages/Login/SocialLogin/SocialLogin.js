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
        <p className='px-3 my-0'>Or - Continue With</p>
        <span></span>
      </div>
      {errorElement}
      <div className='social-login d-flex gap-2 align-items-center justify-content-center' >
        <button onClick={() => signInWithGoogle()}><FcGoogle /></button>
        <button title='Disabled' disabled><FaFacebookSquare className='facebook' /></button>
        <button title='Disabled' disabled><BsGithub className='github' /></button>
      </div>
    </div>
  );
};

export default SocialLogin;