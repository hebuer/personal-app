import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
    // clear the database
  Comments.insert({username:'Tim',comments:'not bad'});
  Comments.insert({username:'Caitlin',comments:'ok'});
});
