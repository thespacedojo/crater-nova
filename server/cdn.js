Meteor.startup(function(){
  if (process.env.NODE_ENV === 'production') {
    WebAppInternals.setBundledJsCssPrefix(Meteor.settings.cdnPrefix);
  }
});
