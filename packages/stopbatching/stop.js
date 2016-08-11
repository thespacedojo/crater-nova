console.log("no batching!!")
console.log(Meteor.connection)
Meteor.connection._bufferedWritesMaxAge = 0;
