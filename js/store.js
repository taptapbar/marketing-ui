App.Store = DS.Store.extend({
  revision: 12,
  adapter: DS.RESTAdapter.extend({
    url: 'https://e2YPe1XMH6wKjQtqMi3YJCVKMYJqdJxWRVLQWtlg:javascript-key=4X4J1vrPxeeahgXQ8UjKoxKFku1KzFXGPnnjeIxA@api.parse.com/1/classes'
  })
});

DS.RESTAdapter.registerTransform('array', {
  serialize: function(value) {
    if (Em.typeOf(value) === 'array') {
      return value;
    } else {
      return [];
    }
  },
  deserialize: function(value) {
    return value;
  }
});