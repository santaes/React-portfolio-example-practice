import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { SiNetlify } from 'react-icons/si';
import { BsInstagram } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a
        href='https://www.linkedin.com/in/oleksander-sukharyev/'
        target='_blank'
        rel='noreferrer'
      >
        <BsLinkedin />
      </a>
      <a href='https:github.com/santaes' target='_blank' rel='noreferrer'>
        <FaGithub />
      </a>
      <a
        href='https://app.netlify.com/teams/santaes/overview'
        target='_blank'
        rel='noreferrer'
      >
        <SiNetlify />
      </a>
      <a
        href='https://www.instagram.com/santa_es/'
        target='_blank'
        rel='noreferrer'
      >
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
