
if (Meteor.isServer) {
Meteor.publish('comments',function(){
  return Comments.find();
})

Meteor.publish('recipes',function(){
  return Recipes.find();
})
}
