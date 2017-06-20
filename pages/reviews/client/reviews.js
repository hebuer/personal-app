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
    var com ={ username:username,
                comments:comments,
                owner:Meteor.userId()
              };
    Meteor.call('com.insert',com);
    //People.insert({name,birthyear})
  }
})

Template.comments_row.helpers({
  owner() {console.dir(this);
    return this.comments.owner==Meteor.userId()}
})
Template.comments_row.events({
     'click span'(elt,instance){
      console.dir(this);
      console.log(this);
      console.log(this.comments._id);
      Meteor.call('com.remove',this.comments);
      // Comments.remove(this.comments._id);
      // if(this.comments.owner==Meteor.userId()){
      //   Comments.remove(this.person._id);
      // }
    }
})
