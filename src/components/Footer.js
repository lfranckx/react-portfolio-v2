import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <h3>Contact Me</h3>
      <Link to='/'>
        <i className="fas fa-paper-plane"></i>&nbsp; Email
      </Link>

      <section class='social-media'>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f icon' />
            </Link>
            <Link
              class='social-icon-link instagram icon'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram icon' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube icon' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter icon' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin icon' />
            </Link>
            <Link
                class='social-icon-link github'
                to='/'
                target='_blank'
                aria-label='LinkedIn'
            >
              <i className="fab fa-github icon"></i>
            </Link>
          </div>
      </section>

    </div>
  );
}

export default Footer;
