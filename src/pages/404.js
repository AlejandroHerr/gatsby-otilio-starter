import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { siteInfoType } from '../propTypes/postsIndex';

import MainHeader from '../components/MainHeader';

const FourOhFour = ({ data }) => {
  const {
    siteInfo: {
      childDataJson: siteInfo,
    },
  } = data;

  return (
    <div>
      <Helmet title={siteInfo.title} />
      <MainHeader
        title="404 - Not Found"
        url={siteInfo.url}
        description="Sorry for the inconvenience. Someone will pay for that"
      />
    </div>
  );
};

FourOhFour.propTypes = {
  data: PropTypes.shape({
    siteInfo: siteInfoType.isRequired,
  }).isRequired,
};

export default FourOhFour;


/* eslint-disable */
export const pageQuery = graphql`
  query FourOhFourQuery {
    siteInfo: file(relativePath: { eq: "siteInfo.json" }) {
      childDataJson {
        url,
        title,
      }
    }
  }
`;
