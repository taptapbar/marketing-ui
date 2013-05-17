App = Ember.Application.create();

App.Router.map(function() {
  this.route('multiview',        { path: "/multiview" });
  this.route('multiview_new',    { path: "/multiview/new" });
  this.route('comparison',       { path: "/comparison" });
  this.route('item_association', { path: "/item_association" });
  this.route('significance',     { path: "/significance" });
  this.route('diagnosis',        { path: "/diagnosis" });
  this.route('filter',           { path: "/filter" });
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

$(function () {
  $('#tabs a:first').tab('show');
})
