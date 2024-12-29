import React from 'react';
import { Link } from 'react-router-dom';

import notFoundImage from '@/assets/images/not-found.svg';
import './index.scss';


function NotFoundPage() {
  return (
    <div className="notfound-page">
      <div className="container flex flex-col justify-center items-center gap-2">
        <img src={notFoundImage} alt="Not found" className="image" />
        <p>Oops! The page you are looking for does not exist.</p>
          <Link to="/" className="py-[14px] px-1 w-72 rounded-lg text-white-light 
        bg-gradient-to-bl from-primary-400 to-primary-300 text-center">Back to home</Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
