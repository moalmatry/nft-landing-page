import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import myLogo from '../assets/mylogo.svg';

export const Footer = () => {
  return (
    <div className="footer-container footer-text">
      <p>© Copyright 2023 Mohamed Almatry , All rights reserved</p>
      <p className="icons">
        <AiFillInstagram />
        <img src={myLogo} className="w-8 object-contain" alt="my-logo" />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
