App.ChartView = Ember.View.extend({
  tagName: 'div',
  classNames: ['highcharts'],
  title: 'Graph',
  type: 'column',
  didInsertElement: function() {
    var chartGenerator = new App.ChartGenerator();
    var view = App.BigObjectView.find(1);
    
    var that = this;
    var renderedChart;
    view.then(function(){
      renderedChart = chartGenerator.render(that.elementId, that.type, view.get('dataValues'), view.get('categories'), that.title);
    });
    return renderedChart;
  }
});