import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

const VerifyEmail = () => {
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState();

  const paramString = useLocation().search;
  const token = paramString.split('=')[1];

  if (!token) {
    return <p className='text-danger px-4 py-3'>Token not present</p>
  }
  return (
    <div>
      <h2 className='text-center py-5'>
        {verified && !error ?
          'Your have been verified' :
          error ?
            error :
            'Verification in progress, please wait...'
        }
      </h2>
    </div>
  );
};

export default VerifyEmail;