import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#97644e] py-[3rem] pb-[2rem] rounded-[2px]">
      <div className="flex flex-col items-center mb-[1rem]">
        <div className="mb-[2rem] text-center">
          <p className="text-[1.5rem] text-white">Subscribe To Our Newsletter</p>
          <form onSubmit={handleSubmit} className="flex items-center justify-center mt-[0.5rem]">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className="border-[1px] border-white rounded-[6px] py-[8px] px-[10px] mr-[5px]"
            />
            <button type="submit" className="py-[0.5rem] px-[1rem] rounded-t-lg bg-[#282828] text-white rounded-none cursor-pointer">Subscribe</button>
          </form>
        </div>
        <div className="flex flex-wrap justify-center mb-[1rem]">
          <button  links={['About']} />
          <button  links={['Contact']} />
          <button  links={['PrivacyPolicy']} />
          <button  links={['Blogs']} />
          <button  links={['Guarantee']} />
          <button  links={['Checkout']} />
          <button  links={['TermsAndConditions']} />
        </div>
        <div className="flex justify-center space-x-4 mb-[1rem]">
          <a href="https://facebook.com" className="text-white text-[1.3rem]"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://twitter.com" className="text-white text-[1.3rem]"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://instagram.com" className="text-white text-[1.3rem]"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://linkedin.com" className="text-white text-[1.3rem]"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
      </div>
      <div className="bg-[#DDDDDD] mb-[1rem] w-full h-[0.05rem]"></div>
      <div className="flex justify-center">
        <span className="text-[1rem] text-white">Copyright © 2024 All Right reserved , Artisan LLC</span>
      </div>
    </footer>
  );
};



export default Footer;