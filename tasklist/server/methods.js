Meteor.methods({
  adiciona: function(obj) {
    Tasks.insert({ name: obj.name, data: new Date() });
  },
  remove: function(id) {
    Tasks.remove({_id: id});
  }
});
