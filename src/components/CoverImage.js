/* globals window,document */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

export default class CoverImage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      translateY: 0,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const scrollTop = (window.pageYOffset || document.documentElement.scrollTop) || 0;

    this.setState({ translateY: scrollTop / 5 });
  }
  render() {
    const { className, image, shadowClassName } = this.props;
    const { translateY } = this.state;

    return (
      <div
        className={className}
        style={{ transform: `translate3d(0px, ${translateY}px, 0px)` }}
      >
        <Img
          sizes={image}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            margin: '0',
          }}
        />
        <div className={shadowClassName} />
      </div>
    );
  }
}

CoverImage.propTypes = {
  className: PropTypes.string.isRequired,
  image: PropTypes.shape({
    aspectRatio: PropTypes.number,
    base64: PropTypes.string,
    size: PropTypes.string,
    src: PropTypes.string,
    srcSet: PropTypes.string,
    srcSetWebp: PropTypes.string,
    srcWebp: PropTypes.string,
  }).isRequired,
  shadowClassName: PropTypes.string.isRequired,
};
