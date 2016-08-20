import React from 'react';
import { DocumentContainer } from "meteor/utilities:react-list-container";
import { FormattedMessage, FormattedRelative } from 'react-intl';
import Posts from 'meteor/nova:posts';
import { Link } from 'react-router';

// note: post.postedAt is sometimes the empty object when SSR'ing (see https://github.com/kadirahq/flow-router/issues/639)
const Podcast = ({post}) => {
  return (
    <div className="podcast-content">
      <h3 className="podcast-title">{post.title}</h3>
      <div className="podcast-date">{post.postedAt && !_.isObject(post.postedAt) ? <FormattedRelative value={post.postedAt}/> : null}</div>
      <iframe frameBorder='0' height='36px' scrolling='no' seamless src={`https://simplecast.com/e/${post.podcastId}?style=light`} width='100%'></iframe>
      <div className="podcast-links">
        <Link className="podcast-discuss" to={Posts.getPageUrl(post)}>Discuss this episode</Link>
        |
        <a className="podcast-subscribe" href="https://itunes.apple.com/us/podcast/the-meteor-podcast/id795089333?mt=2">Subscribe on iTunes</a>
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
