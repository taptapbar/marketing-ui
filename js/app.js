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
    var chart = App.Chart.find(1);
    
    var that = this;
    var renderedGraph;
    chart.then(function(){
      renderedGraph = graph.render(that.elementId, that.type, chart.get('dataValues'), [
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
                ], that.title);
    });
    return renderedGraph;
  }
});

$(function () {
  $('#tabs a:first').tab('show');
})
