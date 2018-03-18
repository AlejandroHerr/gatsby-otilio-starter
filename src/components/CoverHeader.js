import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './CoverHeader.module.scss';

import CoverImage from './CoverImage';

console.log(styles);

const CoverHeader = ({
  description, logo, image, title, url, isHome, isPost,
}) => (
  <header className={classnames(styles.coverHeader, {
    [styles['coverHeader--post']]: isPost,
    [styles['coverHeader--hasImage']]: !!image,
  })}
  >
    <div className={styles.coverHeader__inner}>
      <nav className={styles.coverHeader__navigation}>
        {logo
        && (
          <span className={styles.coverHeader__logo}>
            <a href={url}><img src={logo} alt="Blog Logo" /></a>
          </span>
        )}
      </nav>
      <h1 className={styles.coverHeader__name}>
        <a href="/url">{title}</a>
      </h1>
      {description
       && (<span className={styles.coverHeader__description}>{description}</span>)
      }
      {image && (<CoverImage image={image} />)}
    </div>
    {!image && (<div className={styles.coverHeader__after} />)}
  </header>
);


CoverHeader.defaultProps = {
  description: '',
  logo: '',
  image: '',
  title: '',
  url: '',
  isPost: false,
};

CoverHeader.propTypes = {
  description: PropTypes.string,
  logo: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  isPost: PropTypes.bool,
};

export default CoverHeader;

/*
{{#if @blog.navigation}}
<span id="menu-button" class="nav-button">
  <a class="menu-button"><i class="ic ic-menu"></i> Menu</a>
</span>
{{/if}}
*/

/*
<header id="post-header"{{#if feature_image}} class="has-cover" {{/if}}>
	<div class="inner">
		<nav id="navigation">
			{{#if @blog.logo}}
			<span class="blog-logo">
				<a href="{{@blog.url}}"><img src="{{@blog.logo}}" alt="Blog Logo" /></a>
			</span>
			{{else}}
			<span id="home-button" class="nav-button">
				<a class="home-button" href="{{@blog.url}}" title="Home"><i class="ic ic-arrow-left"></i> Home</a>
			</span>
			{{/if}}
			{{#if @blog.navigation}}
			<span id="menu-button" class="nav-button">
				<a class="menu-button"><i class="ic ic-menu"></i> Menu</a>
			</span>
			{{/if}}
		</nav>
		<h1 class="post-title">{{{title}}}</h1>
		<span class="post-meta">{{author}} | <time datetime="{{date format='YYYY-MM-DD'}}">{{date format="DD MMM YYYY"}}</time></span>
		{{#if feature_image}}<div class="post-cover cover" style="background-image: url('{{feature_image}}');"></div>{{/if}}
	</div>
</header>
*/
