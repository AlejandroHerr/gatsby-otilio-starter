// @flow
import React from 'react';

import SimpleIcon from './icons/SimpleIcon';

import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footer__inner}>
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
            <a href="https://www.gatsbyjs.org"><SimpleIcon brand="gatsby" className={styles.footer__gatsby_icon} /></a>
          </span>
          <br />
          <span>
            Served by
            {' '}
            <a href="https://www.netlify.com/"><SimpleIcon brand="netlify" className={styles.footer__netlify_icon} /></a>
          </span>
        </div>
      </section>
    </div>
  </footer>
);

export default Footer;
