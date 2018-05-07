// Template.list.helpers({
//   tasks: function() {
//     return [
//       { name: "Go to the market store" },
//       { name: "Go to the mall" },
//       { name: "Go to work" },
//     ];
//   }
// });

Template.list.helpers({
  tasks: function() {
    return Tasks.find({});
  },
  // para formatar data a ser exibida
  formatDate: function() {
    return moment(this.date).format('DD/MM/YY HH:mm');
  }
});
