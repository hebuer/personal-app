

Template.show_recipe.helpers({
  recipelist() {return Recipes.find()},
})

Template.add_recipe.events({
  'click button[id=addComments]'(elt,instance) {
    const title = instance.$('#title').val();
    const ingredient = instance.$('#ingredient').val();
    instance.$('#title').val("");
    instance.$('#ingredient').val("");
    var recipevar ={ title:title,
                ingredient:ingredient,
                owner:Meteor.userId()
              };
    Meteor.call('recipe.insert',recipevar);
  }
})

Template.recipe_row.events({
     'click span'(elt,instance){
    //  console.dir(this);
      //console.log(this);
      console.log(this.ingredient._id);
      Meteor.call('recipe.remove',this.ingredient);
    }
})

// Template.comments_row.onCreated(function(){
//   this.Dict = new ReactiveDict();
//   this.Dict.set("Editing",false);
//   this.Dict.set("id");
// })
Template.recipe_row.onCreated(function recipe_row_OnCreated() {
  // counter starts at 0
  this.Editing= new ReactiveVar(false);
});


Template.recipe_row.events({
     'click button[id=enableEdit]'(event,instance){
        // Template.instance().Dict.set("Editing", true);
        // console.log(this._id);
        // console.log(this.comments._id);
        // console.dir(this);
        // console.dir(event);
        // console.dir(instance);
        instance.Editing.set(true);
        console.log(instance.Editing.get());
      // Editing = false;
    }
})

Template.recipe_row.events({
     'click button[id=editRecipe]'(elt,instance){
      const old = this.ingredient.ingredient;
      const newIngredient = instance.$('#newRecipe').val();
      console.log("this id:"+this._id);
      console.log("this comment id:"+this.ingredient._id);
      console.log("old comments: "+old);
      console.log("new comments: "+newIngredient);
      console.log("this comments: "+this.ingredient);
      var id = this.ingredient._id;
      console.log("var id:"+id);
      // var com ={ username:username,
      //             comments:comments,
      //             owner:Meteor.userId()
      //           };

      Meteor.call('recipe.edit',id,newIngredient);
      instance.Editing.set(false);
    // Template.instance().Dict.set("Editing", false);
    }
})
Template.recipe_row.helpers({
  counter() {
    return Template.instance().counter.get();
  },

  isEditing() {
    return Template.instance().Editing.get();

  }

    //&& this._id=id
})
