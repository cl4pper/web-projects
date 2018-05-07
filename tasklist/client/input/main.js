Template.input.events({
  "submit form": function(e, template) {
    e.preventDefault();

    var newTask = $("#newTask");
    var name = newTask.val();

    // Tasks.insert({name: name, date: new Date()});
    Meteor.call("adiciona", { name: name });
    newTask.val("");
  }
});
