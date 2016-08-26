Meteor.startup(function(){
  WebAppInternals.setBundledJsCssPrefix(Meteor.settings.cdnPrefix);
});
