Template.show_comments.helpers({
  commentslist() {return Comments.find()},
})

Template.add_comments.events({
  'click button'(elt,instance) {
    const username = instance.$('#username').val();
    const comments = instance.$('#comments').val();
    console.log('adding '+username);
    instance.$('#username').val("");
    instance.$('#comments').val("");
    Comments.insert({username:username,comments:comments,
    owner:Meteor.userId(), createAt: new Date });
    //People.insert({name,birthyear})
  }
})

template.comments_row.helpers({
  isOwner() {console.dir(this);
    return this.comments.owner==Meteor.userId()}
})
Template.comments_row.events({
    'click span'(elt,instance) {
      console.dir(this);
      console.log(this);
      console.log(this.person._id);
      if(this.comments.owner==Meteor.userId()){  Comments.remove(this.person._id);}

    }
})
