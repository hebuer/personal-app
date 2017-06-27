Meteor.methods({
  'com.insert':function(com) {
    Comments.insert(com);
  },

  'com.remove':function(com){
    console.log("userid="+this.userId);
    console.log('comment.owner='+com.owner);
    if(this.userId == com.owner)
    Comments.remove(com);
  },

   'com.edit':function(id,newComments){
    console.log("new comments: "+newComments);
    console.log("id passed in method:"+id)
    var com = Comments.findOne(id);
    console.log("com:"+com.comments);
    //  var com = Comments.findOne(_id: new Mongo.ObjectID(id))
    //  console.log("userid="+this.userId);
    //  console.log('comment.owner='+com.owner);
    // console.log("comments in method: "+comments);
    // console.log("old comment in com: "+this);
    // console.log("com:"+com);
    //  if(this.userId == com.owner)
    Comments.update(com._id, {$set:{comments:newComments}});
    console.log("new com.comments:"+com.comments);
  }
});
