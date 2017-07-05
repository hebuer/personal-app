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
    Comments.update(com._id, {$set:{comments:newComments}});
    console.log("new com.comments:"+com.comments);
  },

  'recipe.insert':function(recipevar) {
    Recipes.insert(recipevar);
  },

  'recipe.remove':function(recipe){
    // console.log("title="+this.recipe.title);
    console.log('recipe.owner='+recipe.owner);
    console.log('userId='+this.userId);
    if(this.userId == recipe.owner)
    Recipes.remove(recipe);
  },

   'recipe.edit':function(id,newInstruction){
    console.log("id passed in method:"+id)
    var recipeVar = Recipes.findOne(id);
    console.log("instruction found in Collection:"+recipeVar.instruction);
    Recipes.update(recipeVar._id, {$set:{instruction:newInstruction}});
    console.log("new ingredient:"+recipeVar.instruction);
  }
});
