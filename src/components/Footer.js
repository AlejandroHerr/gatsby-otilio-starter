import React from 'react';
import PropTypes from 'prop-types';

import GatsbyIcon from './icons/GatsbyIcon';
import NetlifyIcon from './icons/NetlifyIcon';

import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footer__wrapper}>
      <section className={styles.footer__credits}>
        <div className={styles.footer__authoring}>
          <span>
            Theme
            {' '}
            <a href="https://github.com/AlejandroHerr/gatsby-otilio-starter">Otilio</a>
            {' '}
            by
            {' '}
            <a href="https://github.com/AlejandroHerr">AlejandroHerr</a>
          </span>
          <br />
          <span>
          Ported from <a href="https://github.com/zutrinken/attila">Attila for Ghost</a>
          </span>
        </div>
        <div className={styles.footer__tech} >
          <span>
            Powered by
            {' '}
            <a href="https://www.gatsbyjs.org"><GatsbyIcon className={styles.footer__gatsby_icon} /></a>
          </span>
          <br />
          <span>
            Served by
            {' '}
            <a href="https://www.netlify.com/"><NetlifyIcon className={styles.footer__netlify_icon} /></a>
          </span>
        </div>
      </section>
    </div>
  </footer>
);

export default Footer;
//
