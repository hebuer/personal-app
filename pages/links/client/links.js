Template.links.onCreated(
  function(){
    this.state = new ReactiveDict();
    this.state.setDefault({
        recipes: []
      });
    }
)




Template.links.events(
  {"click #search": function(elt, instance){
      const dish = instance.$('#input').val();
      Meteor.apply("getRecipe",[dish],{returnStubValue: true},
        function(error,result){

          console.dir(['getRecipe',error,result]);
          if (error) {
            console.log("Error!!"+JSON.stringify(error)); return;
          }
          console.log(result);
          r = JSON.parse(result);
          console.dir(r);

          return instance.state.set("recipes",r.results);
        });
      }
   }
)

Template.res.events({
      "click .clickable-row": function(event,instance){
          console.log(this.r.id);
          var href = "/searchdata/"+this.r.id;
          console.log(href);
          if (href) {
              window.location.assign(href);
          }
          // if (href) {
          //     window.location.assign("https://www.youtube.com/");
          // }
      }
})




Template.links.helpers({
  recipes: function(){
    const instance = Template.instance();
    return instance.state.get("recipes");
  }
})
