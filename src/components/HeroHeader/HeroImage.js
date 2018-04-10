// @flow
/* globals document */
import React, { PureComponent } from 'react';
import Img from 'gatsby-image';

import type { SizeImageSharpType } from '../../types/gatsby';

import styles from './HeroHeader.module.scss';

type PropsType = {
  image: SizeImageSharpType,
};

type StateType = {
  translateY: number,
};

export default class HeroImage extends PureComponent<PropsType, StateType> {
  handleScroll: () => void;

  constructor(props: PropsType) {
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
    const scrollTop = (document.documentElement && document.documentElement.scrollTop)
      || 0;

    this.setState({ translateY: scrollTop / 5 });
  }
  render() {
    const { image } = this.props;
    const { translateY } = this.state;

    return (
      <div
        className={styles.hero_image}
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
        <div className={styles.hero_image__shadow} />
      </div>
    );
  }
}
