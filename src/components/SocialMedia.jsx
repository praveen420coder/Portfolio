import React from 'react';
import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <a href="https://github.com/praveen420coder" target="_blank"><BsInstagram /></a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/praveen-kumar-b14381187/" target="_blank"><BsLinkedin /></a> 
        </div>
        <div>
          <a href="https://github.com/praveen420coder" target="_blank"><BsGithub /></a>
        </div>
    </div>
  )
};

export default SocialMedia;