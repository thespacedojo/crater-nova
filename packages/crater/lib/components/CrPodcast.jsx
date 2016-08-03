import React from 'react';

const CrPodcast = () => {
  
  return (
    <div className="podcast">

      <h4 className="podcast-heading">The Crater Podcast</h4>
      <div className="podcast-content">
        <h3 className="podcast-title">#108 - Post MeteorCamp NYC Edition</h3>
        <p className="podcast-date">July 25, 2016</p>
        <iframe frameBorder='0' height='36px' scrolling='no' seamless src='https://simplecast.com/e/43470?style=light' width='100%'></iframe>
        <a className="podcast-discuss" href="#">Discuss this episode</a>
      </div>
    </div>
  )
}

CrPodcast.displayName = "CrPodcast";

module.exports = CrPodcast;
