import React from 'react';
import { IndexLink } from 'react-router';

const CrLogo = ({logoUrl, siteTitle}) => {
  return (
    <h1 className="logo">
      <IndexLink to={{pathname: "/"}} className="logo-image">
        <img src={logoUrl} alt={siteTitle} style={{maxWidth: "100px", maxHeight: "100px"}} />
      </IndexLink>
      <IndexLink to={{pathname: "/"}} className="logo-text">{siteTitle}</IndexLink>
    </h1>
  )
}

CrLogo.displayName = "CrLogo";

module.exports = CrLogo;