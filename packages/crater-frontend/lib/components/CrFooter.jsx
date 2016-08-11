import React from 'react';
import { FormattedMessage } from 'react-intl';

const Footer = props => {
  return (
    <div className="footer">
      Crater.io © 2016 Josh Owens / 
      Illustration credit: <a href="https://www.behance.net/gallery/What-Space-Really-Looks-Like/12984019" target="_blank">What Space Really Looks Like</a> by Nina Geometrieva /
      Theme by <a href="http://twitter.com/sachagreif" target="_blank">Sacha Greif</a> / <a href="http://telescopeapp.org" target="_blank">Built with Nova</a>
    </div>
  )
}

Footer.displayName = "Footer";

module.exports = Footer;