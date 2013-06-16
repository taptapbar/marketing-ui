App.ColumnGraphConfig = Ember.Object.extend(App.GraphConfig, {
  init: function () {
    var yAxis, plotOptions;
    yAxis = {
      title: {
        text: "Measurement"
      }
    };
    plotOptions = {
      bar: {
        animation: false,
        borderWidth: 0,
        shadow: false,
        dataLabels: {
          enabled: true
        }
      }
    };
    tooltip = {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    };
    scrollbar = {
      enabled: true
    },
    this.set('yAxis', yAxis);
    this.set('plotOptions', plotOptions);
    this.set('tooltip', tooltip);
    this.set('scrollbar', scrollbar);
    return;
  }
});

App.ColumnGraphView = App.GraphView.extend({
  type: 'column'
});
