Template.input.events({
  "submit form": function(e, template) {
    e.preventDefault();

    var newTask = $("#newTask");
    var name = newTask.val();

    Tasks.insert({name: name, date: new Date()});
    newTask.val("");
  }
});
