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

  // 'recipe.remove':function(recipe){
  //   console.log("title="+this.title);
  //   console.log('comment.owner='+recipe.owner);
  //   if(this.userId == com.owner)
  //   Comments.remove(com);
  // },

   'recipe.edit':function(id,newIngredient){
    console.log("new comments: "+newIngredient);
    console.log("id passed in method:"+id)
    var recipevar = Recipes.findOne(id);
    console.log("recipe found in Collection:"+recipevar.ingredient);
    Recipes.update(recipevar._id, {$set:{ingredient:newIngredient}});
    console.log("new ingredient:"+recipevar.ingredient);
  }
});
