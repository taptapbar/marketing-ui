App = Ember.Application.create();

App.Router.map(function() {
  this.route('multiview',        { path: "/multiview" })
  this.route('comparison',       { path: "/comparison" })
  this.route('item_association', { path: "/item_association" })
  this.route('significance',     { path: "/significance" })
  this.route('diagnosis',        { path: "/diagnosis" })
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
