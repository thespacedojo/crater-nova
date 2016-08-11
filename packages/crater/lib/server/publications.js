import Posts from 'meteor/nova:posts';
import PublicationUtils from 'meteor/utilities:smart-publications';

Meteor.publish('posts.latestpodcast', function () {

  const selector = {podcastId: {$exists: true}};
  const options = {
    sort: {postedAt: -1},
    fields: PublicationUtils.arrayToFields(Posts.getPublishedFields())
  };
  const latestPodcast = Posts.find(selector, options);
  return latestPodcast;
});