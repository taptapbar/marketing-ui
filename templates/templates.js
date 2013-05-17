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
  var buffer = '', stack1, stack2, hashTypes, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("+");
  }

  data.buffer.push("<section id=\"view-detail-container\">\n  <div class=\"detail-block\">\n    <h3>Dimension</h3>\n    \n    <div class=\"dimension\">\n      <h4>User</h4>\n      \n      <div class=\"attributes\">\n        <div class=\"attribute\">Age</div>\n        <div class=\"attribute selected\">Region</div>\n        <div class=\"attribute\">Constellation</div>\n        <div class=\"attribute\">Purchase Power</div>\n      </div>\n    </div>\n    \n    <div class=\"dimension\">\n      <h4>Product</h4>\n      \n      <div class=\"attributes\">\n        <div class=\"attribute selected\">Category</div>\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"detail-block\">\n    <h3>Measure</h3>\n    \n    <div class=\"inner\">\n      <div class=\"attribute\">Count</div>\n      <div class=\"attribute\">Sales</div>\n      <div class=\"attribute\">Profit</div>\n    </div>\n  </div>\n</section>\n\n<section id=\"view-container\">\n  <div class=\"tabs clearfix\">\n    <div class=\"tab active\"></div>\n    <div class=\"tab\"></div>\n    <div class=\"add-view-btn\">");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "multiview_new", options) : helperMissing.call(depth0, "linkTo", "multiview_new", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</div>\n  </div>\n  \n  <div class=\"chart-container\">\n    <div class=\"chart\">\n      <img src=\"img/chart.png\" />\n    </div>\n    \n    <div class=\"filters clearfix\">\n      <div class=\"filter\">Set Timeframe</div>\n      <div class=\"filter\">Set Filter</div>\n    </div>\n  </div>\n</section>");
  return buffer;
  
});

Ember.TEMPLATES["multiview_new"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<div id=\"create-view-container\">\n  <section class=\"step clearfix\">\n    <h2>Create your view</h2>\n    <div class=\"sub-step\">\n      <h3>(1) Select up to 3 dimensions</h3>\n      \n      <div class=\"inner clearfix\">\n        <div class=\"options\">\n          <div class=\"option\">Age</div>\n          <div class=\"option\">Gender</div>\n          <div class=\"option\">Income</div>\n        </div>\n        <div class=\"right-arrow\"></div>\n        <div class=\"selected-options options\">\n          <div class=\"option\">Income</div>\n          <div class=\"option\">Region</div>\n        </div>\n      </div>\n    </div>\n    \n    <div class=\"sub-step\">\n      <h3>(2) Choose the measure you want to see</h3>\n      \n      <form class=\"inner\">\n        <div class=\"clearfix\">\n          <div class=\"radio-input clearfix\">\n            <input type=\"radio\" name=\"measure\" value=\"revenue\">\n            <span>Revenue</span>\n          </div>\n          <div class=\"radio-input\">\n            <input type=\"radio\" name=\"measure\" value=\"cost\">\n            <span>Cost</span>\n          </div>\n          <div class=\"radio-input\">\n            <input type=\"radio\" name=\"measure\" value=\"forecast\">\n            <span>Forecast</span>\n          </div>\n        </div>\n      </form>\n    </div>\n  </section>\n</div>");
  
});