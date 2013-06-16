Ember.TEMPLATES["filter"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Confirm");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Cancel");
  }

  data.buffer.push("<div class=\"popup-window-bg\">\n  <div id=\"filter-window\" class=\"popup-window\">\n    \n    <div class=\"popup-window-header\">Set Filters</div>\n    <div class=\"popup-window-body\">\n      <div class=\"tabbable\">\n        <ul id=\"filer-tabs\" class=\"nav nav-tabs popup-window-nav\">\n          <li class=\"active\"><a href=\"#multiview-filter-general\" data-toggle=\"tab\">General</a></li>\n          <li><a href=\"#multiview-filter-condition\" data-toggle=\"tab\">Condition</a></li>\n          <li><a href=\"#multiview-filter-formula\" data-toggle=\"tab\">Formula</a></li>\n        </ul>\n        <div class=\"tab-content tab-content-border tab-content-padding\">\n          <div class=\"tab-pane active\" id=\"multiview-filter-general\">\n              <div class=\"field-block\">\n                <label class=\"radio\">\n                    <input type=\"radio\" name=\"filterGeneralLogicRadios\" value=\"\"> Include\n                </label>\n                <label class=\"radio\">\n                    <input type=\"radio\" name=\"filterGeneralLogicRadios\" value=\"\"> Exclude\n                </label>\n              </div>\n                \n              <div class=\"field-block\">\n                <button class=\"btn-popup\" id=\"multiview-filter-btn-all\">All</button>\n                <button class=\"btn-popup\" id=\"multiview-filter-btn-none\">None</button>\n              </div>\n\n              <div class=\"field-block\" style=\"margin-left:20px;\">\n                <label class=\"checkbox\">\n                  <input type=\"checkbox\" value=\"\">\n                  Kitchenware\n                </label>\n                <label class=\"checkbox\">\n                  <input type=\"checkbox\" value=\"\">\n                  Office Supplies\n                </label>\n                <label class=\"checkbox\">\n                  <input type=\"checkbox\" value=\"\">\n                  Computer Peripherals\n                </label>\n                <label class=\"checkbox\">\n                  <input type=\"checkbox\" value=\"\">\n                  Furniture\n                </label>\n                <label class=\"checkbox\">\n                  <input type=\"checkbox\" value=\"\">\n                  Home Appliance\n                </label>\n                <label class=\"checkbox\">\n                  <input type=\"checkbox\" value=\"\">\n                  Auto Parts\n                </label>\n              </div>\n\n          </div>\n          <div class=\"tab-pane\" id=\"multiview-filter-condition\">\n\n              <div class=\"field-block\">\n                <label class=\"radio\">\n                    <input type=\"radio\" name=\"filterConditionLogicRadios\" value=\"\"> Include\n                </label>\n                <label class=\"radio\">\n                    <input type=\"radio\" name=\"filterConditionLogicRadios\" value=\"\"> Exclude\n                </label>\n              </div>\n              \n              <div class=\"field-block\" style=\"margin-left:20px;\">\n                <input class=\"input-filter float-right\" id=\"focusedInput\" type=\"text\" placeholder=\"Input conditions...\">\n                <label class=\"radio\">\n                  <input type=\"radio\" name=\"filterConditionOptionsRadios\" value=\"\">\n                  Contains\n                </label>\n                <label class=\"radio\">\n                  <input type=\"radio\" name=\"filterConditionOptionsRadios\" value=\"\">\n                  Starts with\n                </label>\n                <label class=\"radio\">\n                  <input type=\"radio\" name=\"filterConditionOptionsRadios\" value=\"\">\n                  Ends with\n                </label>\n                <label class=\"radio\">\n                  <input type=\"radio\" name=\"filterConditionOptionsRadios\" value=\"\">\n                  Exactly matches\n                </label>\n              </div>\n\n          </div>\n          <div class=\"tab-pane\" id=\"multiview-filter-formula\">\n            <div class=\"\">\n              <label class=\"radio\">\n                <input type=\"radio\" name=\"filterFormulaOptionsRadios\" value=\"\">\n                By Field\n              </label>  \n            </div>\n            <div class=\"field-block\" style=\"margin-left:20px\">\n              <div>\n                  <div class=\"float-right\">By</div>\n                  <select class=\"select\">\n                    <option>1</option>\n                    <option>2</option>\n                    <option>3</option>\n                  </select>\n                  <select class=\"select\">\n                    <option>1</option>\n                    <option>2</option>\n                    <option>3</option>\n                  </select>\n              </div>\n              <div>\n                  <select class=\"select\">\n                    <option>Dimention</option>\n                    <option>2</option>\n                    <option>3</option>\n                  </select>\n                  <select class=\"select\">\n                    <option>Sum</option>\n                    <option>2</option>\n                    <option>3</option>\n                  </select>\n              </div>\n            </div>\n            <div class=\"\">\n              <label class=\"radio\">\n                <input type=\"radio\" name=\"filterFormulaOptionsRadios\" value=\"\">\n                By Formula\n              </label>  \n            </div>\n            <div class=\"field-block\" style=\"margin-left:20px\">\n              <div>\n                  <select class=\"select\">\n                    <option>Dimention</option>\n                    <option>2</option>\n                    <option>3</option>\n                  </select>\n                  <select class=\"select\">\n                    <option>Sum</option>\n                    <option>2</option>\n                    <option>3</option>\n                  </select>\n              </div>\n              <div>\n                  <select class=\"select\">\n                    <option>></option>\n                    <option>=</option>\n                    <option><</option>\n                    <option><=</option>\n                    <option>>=</option>\n                  </select>\n                  <input style=\"width:76px; height:10px; margin:0; background-color:#9da2a4;\" type=\"text\">\n              </div>\n            </div>\n            <div class=\"border-box\" style=\"margin-left:20px\">\n              <label>Minimum <input class=\"input-filter\" type=\"text\">\n              </label> \n              <label>Maximum <input class=\"input-filter\" type=\"text\">\n              </label> \n            </div>          \n          </div>\n        </div>\n    </div>\n  </div>\n  <div class=\"popup-window-footer\">\n    <button class=\"btn-popup\"><a>Reset</a></button>\n    <button type=\"submit\" class=\"btn-popup pull-right\">");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "multiview", options) : helperMissing.call(depth0, "linkTo", "multiview", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</button>\n    <button class=\"btn-popup pull-right\">");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "multiview", options) : helperMissing.call(depth0, "linkTo", "multiview", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</button>\n  </div>\n  </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("awesome");
  
});

Ember.TEMPLATES["multiview"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("+");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Set Timeframe");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Set Filter");
  }

  data.buffer.push("<section id=\"view-detail-container\">\n  <div class=\"detail-block\">\n    <h3>Dimension</h3>\n    \n    <div class=\"dimension\">\n      <h4>User</h4>\n      \n      <div class=\"attributes\">\n        <div class=\"attribute\">Age</div>\n        <div class=\"attribute selected\">Region</div>\n        <div class=\"attribute\">Constellation</div>\n        <div class=\"attribute\">Purchase Power</div>\n      </div>\n    </div>\n    \n    <div class=\"dimension\">\n      <h4>Product</h4>\n      \n      <div class=\"attributes\">\n        <div class=\"attribute selected\">Category</div>\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"detail-block\">\n    <h3>Measure</h3>\n    \n    <div class=\"inner\">\n      <div class=\"attribute\">Count</div>\n      <div class=\"attribute\">Sales</div>\n      <div class=\"attribute\">Profit</div>\n    </div>\n  </div>\n</section>\n\n<section id=\"view-container\">\n  <div class=\"tabs clearfix\">\n    <div class=\"tab active\"></div>\n    <div class=\"tab\"></div>\n    <div class=\"add-view-btn\">");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "multiview_new", options) : helperMissing.call(depth0, "linkTo", "multiview_new", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</div>\n  </div>\n  \n  <div class=\"chart-container\">\n    <div class=\"chart\">\n      ");
  hashTypes = {'id': "ID",'contentBinding': "ID",'categoriesBinding': "ID",'titleBiding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ColumnGraphView", {hash:{
    'id': ("chart-multiview"),
    'contentBinding': ("content"),
    'categoriesBinding': ("categories"),
    'titleBiding': ("This is a Column Graph")
  },contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </div>\n    \n    <div class=\"filters clearfix\">\n      <div class=\"filter\">");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "timeframe", options) : helperMissing.call(depth0, "linkTo", "timeframe", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</div>\n      <div class=\"filter\">");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "filter", options) : helperMissing.call(depth0, "linkTo", "filter", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</div>\n    </div>\n  </div>\n</section>");
  return buffer;
  
});

Ember.TEMPLATES["multiview_new"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<div id=\"create-view-container\">\n  <section class=\"step clearfix\">\n    <h2>Create your view</h2>\n    <div class=\"sub-step\">\n      <h3>(1) Select up to 3 dimensions</h3>\n      \n      <div class=\"inner clearfix\">\n        <div class=\"options\">\n          <div class=\"option\">Age</div>\n          <div class=\"option\">Gender</div>\n          <div class=\"option\">Income</div>\n        </div>\n        <div class=\"right-arrow\"></div>\n        <div class=\"selected-options options\">\n          <div class=\"option\">Income</div>\n          <div class=\"option\">Region</div>\n        </div>\n      </div>\n    </div>\n    \n    <div class=\"sub-step\">\n      <h3>(2) Choose the measure you want to see</h3>\n      \n      <form class=\"inner\">\n        <div class=\"clearfix\">\n          <div class=\"radio-input clearfix\">\n            <input type=\"radio\" name=\"measure\" value=\"revenue\">\n            <span>Revenue</span>\n          </div>\n          <div class=\"radio-input\">\n            <input type=\"radio\" name=\"measure\" value=\"cost\">\n            <span>Cost</span>\n          </div>\n          <div class=\"radio-input\">\n            <input type=\"radio\" name=\"measure\" value=\"forecast\">\n            <span>Forecast</span>\n          </div>\n        </div>\n      </form>\n    </div>\n  </section>\n</div>");
  
});

Ember.TEMPLATES["timeframe"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Confirm");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Cancel");
  }

  data.buffer.push("<div class=\"popup-window-bg\">\n  <div id=\"filter-window\" class=\"popup-window\">\n  	<div class=\"popup-window-header\">Timeframe setting</div>\n  	<div class=\"popup-window-body\">\n  		<div id=\"timeframe-container\">\n  			<ul class=\"none-style content-indent\">\n  				<li>Range</li>\n  				<li>\n  					<label class=\"radio\">\n                    	<input type=\"radio\" name=\"timeframeRangeRadios\" value=\"\"> All the data\n                	</label>\n                </li>\n                <li class=\"li-datepicker clearfix\">\n                	<label class=\"radio\">\n                		<input type=\"radio\" name=\"timeframeRangeRadios\" value=\"\">\n                		<input class=\"float-left\" type=\"text\" style=\"width:65px;\">\n                		<i class=\"icon-calendar\" style=\"position:absolute;\"></i>\n                	</label>\n                </li>\n                <li class=\"li-datepicker clearfix\">\n                	<label>\n                		<input class=\"\" type=\"text\" style=\"width:65px;\">\n                		<i class=\"icon-calendar\" style=\"position:absolute;\"></i>\n                	</label>\n\n                </li>\n            </ul>\n            <ul class=\"none-style content-indent clear\">\n                <li>Cycle</li>\n                <li>\n                	<label class=\"radio\">\n                    	<input type=\"radio\" name=\"timeframeCycleRadios\" value=\"\"> All\n                	</label>\n                </li>\n                <li>\n                	<label class=\"radio\">\n                    	<input type=\"radio\" name=\"timeframeCycleRadios\" value=\"\"> Specified days\n                	</label>\n                </li>\n                <li class=\"clearfix\">\n                	<section><ul class=\"none-style\">\n                		<li class=\"float-left\">\n                			<select class=\"select\" style=\"width:80px;\">\n                				<option>Every</option>\n                				<option>Exclude</option>\n                				<option>Every first day of the week</option>\n                				<option>Every first 2 days of the week </option>\n                				<option>Every first 3 days of the week</option>\n                			</select>\n                		</li>\n                		<li class=\"float-left clearfix\" style=\"margin-left:4px;\">\n                			<label class=\"checkbox\">\n                  				<input type=\"checkbox\" value=\"\">\n                  				Monday\n                			</label>\n                			<label class=\"checkbox\">\n                  				<input type=\"checkbox\" value=\"\">\n                  				Tuesday\n                			</label>\n                			<label class=\"checkbox\">\n                  				<input type=\"checkbox\" value=\"\">\n                  				Wednesday\n                			</label>\n                			<label class=\"checkbox\">\n                  				<input type=\"checkbox\" value=\"\">\n                  				Thursday\n                			</label>\n                		</li>\n                		<li class=\"float-left clearfix\" style=\"margin-left:4px;\">\n                			<label class=\"checkbox\">\n                  				<input type=\"checkbox\" value=\"\">\n                  				Friday\n                			</label>\n                			<label class=\"checkbox\">\n                  				<input type=\"checkbox\" value=\"\">\n                  				Saturday\n                			</label>\n                			<label class=\"checkbox\">\n                  				<input type=\"checkbox\" value=\"\">\n                  				Sunday\n                			</label>\n                		</li>\n                	</ul></section>\n                </li>\n                <li>\n                	<label class=\"radio\">\n                    	<input type=\"radio\" name=\"timeframeCycleRadios\" value=\"\"> Specified weeks\n                	</label>\n                </li>\n                <li class=\"clearfix\">\n                	<ul class=\"none-style\">\n                		<li class=\"float-left\">\n                			<select class=\"select\" style=\"width:80px;\">\n                				<option>1st</option>\n                				<option>2nd</option>\n                				<option>3rd</option>\n                				<option>4th</option>\n                				<option>5th</option>\n                			</select>\n                		</li>\n                		<li class=\"float-left\" style=\"margin-left:4px;\">\n                			Week of every \n                		</li>\n                		<li class=\"float-left\" style=\"margin-left:4px;\">\n                			<label class=\"checkbox\">\n                  				<input type=\"checkbox\" value=\"\">\n                  				Friday\n                			</label>\n                			<label class=\"checkbox\">\n                  				<input type=\"checkbox\" value=\"\">\n                  				Saturday\n                			</label>\n                			<label class=\"checkbox\">\n                  				<input type=\"checkbox\" value=\"\">\n                  				Sunday\n                			</label>\n                		</li>\n                	</ul>\n                </li>\n                <li>\n	                <label class=\"radio\">\n                    	<input type=\"radio\" name=\"timeframeCycleRadios\" value=\"\"> Specified months\n                	<ul class=\"none-style clearfix\">\n                		<li class=\"float-left\" style=\"margin-left:4px;\">\n                			<label class=\"checkbox\">\n                  				<input type=\"checkbox\" value=\"\">\n                  				January\n                			</label>\n                			<label class=\"checkbox\">\n                  				<input type=\"checkbox\" value=\"\">\n                  				Febuary\n                			</label>\n                			<label class=\"checkbox\">\n                  				<input type=\"checkbox\" value=\"\">\n                  				March\n                			</label>\n                			<label class=\"checkbox\">\n                  				<input type=\"checkbox\" value=\"\">\n                  				April\n                			</label>\n                		</li>\n                		<li class=\"float-left\" style=\"margin-left:4px;\">\n                			<label class=\"checkbox\">\n                  				<input type=\"checkbox\" value=\"\">\n                  				May\n                			</label>\n                			<label class=\"checkbox\">\n                  				<input type=\"checkbox\" value=\"\">\n                  				June\n                			</label>\n                			<label class=\"checkbox\">\n                  				<input type=\"checkbox\" value=\"\">\n                  				July\n                			</label>\n                			<label class=\"checkbox\">\n                  				<input type=\"checkbox\" value=\"\">\n                  				Augus\n                			</label>\n                		</li>\n                		<li class=\"float-left\" style=\"margin-left:4px;\">\n                			<label class=\"checkbox\">\n                  				<input type=\"checkbox\" value=\"\">\n                  				September\n                			</label>\n                			<label class=\"checkbox\">\n                  				<input type=\"checkbox\" value=\"\">\n                  				October\n                			</label>\n                			<label class=\"checkbox\">\n                  				<input type=\"checkbox\" value=\"\">\n                  				November\n                			</label>\n                			<label class=\"checkbox\">\n                  				<input type=\"checkbox\" value=\"\">\n                  				December\n                			</label>\n                		</li>\n                	</ul>\n                	</label>\n                </li>\n  			</ul>\n  		</div>\n  	</div>\n  	<div class=\"popup-window-footer\">\n    	<button class=\"btn-popup \"><a>Reset</a></button>\n    	<button type=\"submit\" class=\"btn-popup pull-right\">");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "multiview", options) : helperMissing.call(depth0, "linkTo", "multiview", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</button>\n    	<button class=\"btn-popup pull-right\">");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "multiview", options) : helperMissing.call(depth0, "linkTo", "multiview", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</button>\n  </div>\n  </div>\n</div>");
  return buffer;
  
});