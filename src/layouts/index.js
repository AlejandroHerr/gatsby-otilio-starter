import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Footer from '../components/Footer';
import '../global.scss';

const Template = ({
  children, data, location,
}) => (
  <div>
    <Helmet>
      <link rel="canonical" href={`${data.siteInfo.childDataJson.url}${location.pathname}`} />
    </Helmet>
    {children()}
    <Footer />
  </div>
);

Template.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.shape({
    siteInfo: PropTypes.shape({
      childDataJson: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Template;

/* eslint-disable */
export const pageQuery = graphql`
  query LayourQUery {
    siteInfo: file(relativePath: { eq: "siteInfo.json" }) {
      childDataJson {
        url,
      }
    }
  }
`;
