import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../../Components/Loading/Loading';
import { async } from '@firebase/util';
import { toast } from 'react-toastify';

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
  const location = useLocation();

  if (loading || sending) {
    return <Loading />
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  if (user.providerData[0].providerId === 'password' && !user.emailVerified) {
    return <section style={{ 'minHeight': '80vh' }}>
      <div className="container">
        <div className='text-center my-5 shadow p-4 w-100 mx-auto' style={{ 'maxWidth': '350px' }}>
          <h1 className='text-crimson'>Your Email is not verified!</h1>
          <h2 className='text-warning'>Please verify your email address.</h2>
          <button className="btn btn-dark btn-lg mt-2"
            onClick={async () => {
              await sendEmailVerification();
              toast('Sent Email')
            }}
          >Send Verification Email Again</button>
        </div>
      </div>
    </section>
  }

  return children;
};

export default RequireAuth;