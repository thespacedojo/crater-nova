import React from 'react';
import { DocumentContainer } from "meteor/utilities:react-list-container";
import { FormattedMessage, FormattedRelative } from 'react-intl';

const Podcast = ({post}) => {
  return (
    <div className="podcast-content">
      <h3 className="podcast-title">{post.title}</h3>
      <div className="podcast-date"><FormattedRelative value={post.postedAt}/></div>
      <iframe frameBorder='0' height='36px' scrolling='no' seamless src={`https://simplecast.com/e/${post.podcastId}?style=light`} width='100%'></iframe>
      <div className="podcast-links">
        <a className="podcast-discuss" href="#">Discuss this episode</a>
        |
        <a className="podcast-subscribe" href="#">Subscribe on iTunes</a>
      </div>
    </div>
  )
}

const CrPodcast = () => {
  
  const selector = {podcastId: {$exists: true}};
  const options = {sort: {postedAt: -1}};

  return (

    <div className="podcast">

      <h4 className="podcast-heading">The Crater Podcast</h4>
  
      <DocumentContainer 
        collection={Posts} 
        publication="posts.latestpodcast" 
        selector={selector}
        options={options}
        component={Podcast}
        documentPropName="post"
      />
      
    </div>
  )
}

CrPodcast.displayName = "CrPodcast";

module.exports = CrPodcast;
