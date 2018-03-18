/* globals window,document */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

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
        style={{ backgroundImage: `url(${image})`, transform: `translate3d(0px, ${translateY}px, 0px)` }}
      >
        <div className={shadowClassName} />
      </div>
    );
  }
}

CoverImage.propTypes = {
  className: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  shadowClassName: PropTypes.string.isRequired,
};
