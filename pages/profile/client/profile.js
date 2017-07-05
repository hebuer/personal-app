

Template.show_recipe.helpers({
  recipelist() {return Recipes.find()},
})

Template.add_recipe.events({
  'click button[id=add]'(elt,instance) {
    const title = instance.$('#title').val();
    const ingredient = instance.$('#ingredient').val();
    const instruction = instance.$('#instruction').val();
    console.log(title);
    console.log(ingredient);
    console.log(instruction);
    instance.$('#title').val("");
    instance.$('#ingredient').val("");
    instance.$('#instruction').val("");
    var recipeVar ={ title:title,
                ingredient:ingredient,
                instruction:instruction,
                owner:Meteor.userId()
              };
    console.log(recipeVar);
    Meteor.call('recipe.insert',recipeVar);
  }
})

Template.recipe_row.events({
     'click span'(elt,instance){
      // console.dir(this);
      //console.log(this);
      console.log("id: "+this.recipe._id);
      console.log("print recipe: "+this.recipe.title);
      Meteor.call('recipe.remove',this.recipe);
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
        instance.Editing.set(true);
        console.log(instance.Editing.get());
    }
})

Template.recipe_row.events({
     'click button[id=edit]'(elt,instance){
      const old = this.recipe.instruction;
      const newInstruction = instance.$('#newRecipe').val();
      console.log("this id:"+this._id);
      console.log("old comments: "+old);
      console.log("new comments: "+newInstruction);
      console.log("this comments: "+this.ingredient);
      var id = this.recipe._id;
      console.log("var id:"+id);
      Meteor.call('recipe.edit',id,newInstruction);
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
