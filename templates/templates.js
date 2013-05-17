Ember.TEMPLATES["filter"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<div class=\"popup-window-bg\">\n  <div id=\"filter-window\" class=\"popup-window\">\n    Hello\n  </div>\n</div>");
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("awesome");
  
});

Ember.TEMPLATES["multiview"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<section id=\"view-detail-container\">\n  <div class=\"detail-block\">\n    <h3>Dimension</h3>\n    \n    <div class=\"dimension\">\n      <h4>User</h4>\n      \n      <div class=\"attributes\">\n        <div class=\"attribute\">Age</div>\n        <div class=\"attribute selected\">Region</div>\n        <div class=\"attribute\">Constellation</div>\n        <div class=\"attribute\">Purchase Power</div>\n      </div>\n    </div>\n    \n    <div class=\"dimension\">\n      <h4>Product</h4>\n      \n      <div class=\"attributes\">\n        <div class=\"attribute selected\">Category</div>\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"detail-block\">\n    <h3>Measure</h3>\n    \n    <div class=\"inner\">\n      <div class=\"attribute\">Count</div>\n      <div class=\"attribute\">Sales</div>\n      <div class=\"attribute\">Profit</div>\n    </div>\n  </div>\n</section>\n\n<section id=\"view-container\">\n  <div class=\"tabs clearfix\">\n    <div class=\"tab active\"></div>\n    <div class=\"tab\"></div>\n    <div class=\"add-view-btn\">+</div>\n  </div>\n  \n  <div class=\"chart-container\">\n    <div class=\"chart\">\n      <img src=\"img/chart.png\" />\n    </div>\n    \n    <div class=\"filters clearfix\">\n      <div class=\"filter\">Set Timeframe</div>\n      <div class=\"filter\">Set Filter</div>\n    </div>\n  </div>\n</section>");
  
});