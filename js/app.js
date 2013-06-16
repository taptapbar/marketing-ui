App = Ember.Application.create();

App.Router.map(function() {
  this.route('multiview',        { path: "/multiview" });
  this.route('multiview_new',    { path: "/multiview/new" });
  this.route('comparison',       { path: "/comparison" });
  this.route('item_association', { path: "/item_association" });
  this.route('significance',     { path: "/significance" });
  this.route('diagnosis',        { path: "/diagnosis" });
  this.route('filter',           { path: "/filter" });
  this.route('timeframe',        { path: "/timeframe" });
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

App.GraphConfig = Ember.Object.create({
  chart: null,
  renderToId: null,
  chartType: null,
  series: null,
  categories: null,
  initialize: function() {
    var chart, title, xAxis;
    //this.sub_initialize();
    chart = {
      renderTo: this.get('renderToId'),
      type: this.get('chartType')
    };
    xAxis = {
      categories: this.get('categories'),
      max: 10
    };
    title = {
      text: this.get('title')
    };
    this.set('chart', chart);
    this.set('xAxis', xAxis);
    return this.set('title', title);
  },
  credits: {
    enabled: false
  },
  colors: ["#2f69bf", "#a2bf2f", "#bf5a2f", "#bfa22f", "#772fbf", "#bf2f2f", "#00337f", "#657f00", "#7f2600", "#7f6500"]
});

App.GraphController = Ember.ObjectController.extend({
  graphConfig: function(type) {
    switch (type) {
      case 'column':
        return App.ColumnGraphConfig;
    }
  },
  graphType: function(type) {
    switch (type) {
      case 'column':
        return 'column';
    }
  },
  render: function(render_to, type, data, categories, title) {
    var graph, graphType;
    graph = this.graphConfig(type).create();
    graphType = this.graphType(type);
    graph.set('chartType', graphType);
    graph.set('renderToId', render_to);
    graph.set('series', data);
    graph.set('categories', categories);
    graph.set('title', title);
    graph.initialize();
    return new Highcharts.Chart(graph);
  }
});

App.GraphView = Ember.View.extend({
  tagName: 'div',
  classNames: ['highcharts'],
  title: 'Graph',
  type: 'column',
  didInsertElement: function() {
    var graph;
    graph = new App.GraphController();
    return graph.render(this.elementId, this.type, [{
                name: 'Tokyo',
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 54.4, 54.4, 54.4, 54.4, 54.4, 54.4, 54.4, 54.4, 54.4, 54.4]
    
            }, {
                name: 'New York',
                data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3, 54.4, 54.4, 54.4, 54.4, 54.4, 54.4, 54.4, 54.4, 54.4, 54.4]
    
            }, {
                name: 'London',
                data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2, 54.4, 54.4, 54.4, 54.4, 54.4, 54.4, 54.4, 54.4, 54.4, 54.4]
    
            }, {
                name: 'Berlin',
                data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1, 54.4, 54.4, 54.4, 54.4, 54.4, 54.4, 54.4, 54.4, 54.4, 54.4]
    
            }], [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ], this.title);
  }
});

$(function () {
  $('#tabs a:first').tab('show');
})
