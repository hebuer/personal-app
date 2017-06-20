Meteor.methods({
  'com.insert':function(com) {
    Comments.insert(com);
  },

  'com.remove':function(com){
    console.log("userid="+this.userId);
    console.log('comment.owner='+com.owner);
    if(this.userId == com.owner)
    Comments.remove(com);
  }
});
