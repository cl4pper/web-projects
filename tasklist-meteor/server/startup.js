Meteor.startup(() => {
  Meteor.publish("tarefas", function() {
    return Tasks.find({});
  });
});
