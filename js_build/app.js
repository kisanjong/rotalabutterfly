(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _js_viewNutrientCalculator = require('../js_view/NutrientCalculator');

var _js_viewNutrientCalculator2 = _interopRequireDefault(_js_viewNutrientCalculator);

React.render(React.createElement(_js_viewNutrientCalculator2['default'], { url: 'http://rotala.dev/json/en.json' }), document.getElementById('calculator'));

},{"../js_view/NutrientCalculator":6}],2:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _js_viewSelectCalcFor = require("../js_view/SelectCalcFor");

var _js_viewSelectCalcFor2 = _interopRequireDefault(_js_viewSelectCalcFor);

var InputDIYSolutionContainerDose = React.createClass({
	displayName: "InputDIYSolutionContainerDose",

	hasValue: function hasValue(event) {
		this.props.onValueEntered(event);
	},
	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"div",
				{ className: "form-group" },
				React.createElement(
					"label",
					{ className: "col-sm-4 control-label", htmlFor: "sol_volume" },
					this.props.labels.solution_container
				),
				React.createElement(
					"div",
					{ className: "col-sm-8" },
					React.createElement(
						"div",
						{ className: "input-group" },
						React.createElement("input", { type: "number", className: "form-control", id: "sol_volume", name: "sol_volume" }),
						React.createElement(
							"div",
							{ className: "input-group-addon" },
							this.props.units.milliliter
						)
					)
				)
			),
			React.createElement(
				"div",
				{ className: "form-group" },
				React.createElement(
					"label",
					{ className: "col-sm-4 control-label", htmlFor: "sol_dose" },
					this.props.labels.solution_dose
				),
				React.createElement(
					"div",
					{ className: "col-sm-8" },
					React.createElement(
						"div",
						{ className: "input-group" },
						React.createElement("input", { type: "number", className: "form-control", id: "sol_dose", name: "sol_dose", onChange: this.hasValue }),
						React.createElement(
							"div",
							{ className: "input-group-addon" },
							this.props.units.milliliter
						)
					)
				)
			)
		);
	}
});

var InputDIYSolutionContainerDoseContainer = React.createClass({
	displayName: "InputDIYSolutionContainerDoseContainer",

	getInitialState: function getInitialState() {
		return {
			value: null
		};
	},
	handleValue: function handleValue(event) {
		this.setState({ value: true });
	},
	render: function render() {
		if (this.state.value === true) {
			return React.createElement(
				"div",
				null,
				React.createElement(InputDIYSolutionContainerDose, { labels: this.props.labels, units: this.props.units, onValueEntered: this.handleValue }),
				React.createElement(_js_viewSelectCalcFor2["default"], { labels: this.props.labels, units: this.props.units })
			);
		} else {
			return React.createElement(
				"div",
				null,
				React.createElement(InputDIYSolutionContainerDose, { labels: this.props.labels, units: this.props.units, onValueEntered: this.handleValue })
			);
		}
	}
});

module.exports = InputDIYSolutionContainerDoseContainer;

},{"../js_view/SelectCalcFor":9}],3:[function(require,module,exports){
"use strict";

var InputDoseCalc = React.createClass({
	displayName: "InputDoseCalc",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "form-group" },
			React.createElement(
				"label",
				{ htmlFor: "dose_amount", className: "col-xs-12 col-sm-4 control-label" },
				this.props.labels.dose_calc_label
			),
			React.createElement(
				"div",
				{ className: "col-xs-6 col-sm-3" },
				React.createElement("input", { type: "number", name: "dose_amount", id: "dose_amount", className: "form-control" })
			),
			React.createElement(
				"div",
				{ className: "col-xs-6 col-sm-5" },
				React.createElement(
					"label",
					{ className: "radio-inline" },
					React.createElement("input", { type: "radio", name: "dose_units", id: "dose_amount", defaultValue: "milliliter" }),
					" ",
					this.props.units.milliliter
				),
				React.createElement(
					"label",
					{ className: "radio-inline" },
					React.createElement("input", { type: "radio", name: "dose_units", id: "dose_amount", defaultValue: "tsp" }),
					" ",
					this.props.units.five_milliliter
				),
				React.createElement(
					"label",
					{ className: "radio-inline" },
					React.createElement("input", { type: "radio", name: "dose_units", id: "dose_amount", defaultValue: "pumps" }),
					" ",
					this.props.units.pump_bottle
				)
			),
			React.createElement(
				"p",
				{ className: "help-block col-xs-12 col-sm-8 col-sm-offset-4" },
				this.props.labels.dose_calc_tooltip
			)
		);
	}
});

module.exports = InputDoseCalc;

},{}],4:[function(require,module,exports){
"use strict";

var InputDoseTarget = React.createClass({
  displayName: "InputDoseTarget",

  render: function render() {
    return React.createElement(
      "div",
      { className: "form-group" },
      React.createElement(
        "label",
        { className: "col-sm-4 control-label", htmlFor: "target_amount" },
        this.props.labels.dose_target
      ),
      React.createElement(
        "div",
        { className: "col-sm-8" },
        React.createElement(
          "div",
          { className: "input-group" },
          React.createElement("input", { type: "number", className: "form-control", name: "target_amount", id: "target_amount" }),
          React.createElement(
            "div",
            { className: "input-group-addon" },
            this.props.units.ppm
          )
        )
      )
    );
  }
});

module.exports = InputDoseTarget;

},{}],5:[function(require,module,exports){
"use strict";

var InputTankSize = React.createClass({
	displayName: "InputTankSize",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "form-group" },
			React.createElement(
				"label",
				{ htmlFor: "tank_vol", className: "col-xs-12 col-sm-4 control-label" },
				this.props.labels.aquarium
			),
			React.createElement(
				"div",
				{ className: "col-xs-6 col-sm-3" },
				React.createElement("input", { type: "number", name: "tank_vol", id: "tank_vol", className: "form-control" })
			),
			React.createElement(
				"div",
				{ className: "col-xs-6 col-sm-5" },
				React.createElement(
					"label",
					{ className: "radio-inline" },
					React.createElement("input", { type: "radio", name: "tank_units", id: "tank_units", defaultValue: "gal" }),
					" ",
					this.props.units.us_gal
				),
				React.createElement(
					"label",
					{ className: "radio-inline" },
					React.createElement("input", { type: "radio", name: "tank_units", id: "tank_units", defaultValue: "L" }),
					" ",
					this.props.units.Liter
				)
			)
		);
	}
});

module.exports = InputTankSize;

},{}],6:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _js_viewRadioFertType = require('../js_view/RadioFertType');

var _js_viewRadioFertType2 = _interopRequireDefault(_js_viewRadioFertType);

var _js_viewInputTankSize = require('../js_view/InputTankSize');

var _js_viewInputTankSize2 = _interopRequireDefault(_js_viewInputTankSize);

var NutrientCalculator = React.createClass({
	displayName: 'NutrientCalculator',

	handleSubmit: function handleSubmit(formData) {
		console.log(formData);
		return;
		// $.ajax({
		//   url: 'http://rotala.dev/json/test.json',
		//   dataType: 'json',
		//   type: 'POST',
		//   data: formData,
		//   success: function(data) {
		//     this.setState({returnData: data});
		//   }.bind(this),
		//   error: function(xhr, status, err) {
		//     console.error(this.props.url, status, err.toString());
		//   }.bind(this)
		// });
	},
	loadLabelsFromServer: function loadLabelsFromServer() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: (function (data) {
				this.setState({ labels: data.labels });
				this.setState({ units: data.units });
			}).bind(this),
			error: (function (xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}).bind(this)
		});
	},
	getInitialState: function getInitialState() {
		return {
			labels: [],
			units: [],
			returnData: []
		};
	},
	componentDidMount: function componentDidMount() {
		this.loadLabelsFromServer();
	},
	render: function render() {
		return React.createElement(
			'form',
			{ className: 'form-horizontal', onSubmit: this.handleSubmit },
			React.createElement(_js_viewInputTankSize2['default'], { labels: this.state.labels, units: this.state.units }),
			React.createElement(_js_viewRadioFertType2['default'], { labels: this.state.labels, units: this.state.units })
		);
	}
});

module.exports = NutrientCalculator;

},{"../js_view/InputTankSize":5,"../js_view/RadioFertType":7}],7:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _js_viewSelectFertType = require('../js_view/SelectFertType');

var _js_viewSelectFertType2 = _interopRequireDefault(_js_viewSelectFertType);

var _js_viewRadioSolutionDry = require('../js_view/RadioSolutionDry');

var _js_viewRadioSolutionDry2 = _interopRequireDefault(_js_viewRadioSolutionDry);

var RadioDIYPremixed = React.createClass({
	displayName: 'RadioDIYPremixed',

	isChecked: function isChecked(event) {
		this.props.onTypeSelected(event);
	},
	render: function render() {
		return React.createElement(
			'div',
			{ className: 'form-group' },
			React.createElement(
				'label',
				{ className: 'col-sm-4 control-label', htmlFor: 'source' },
				this.props.labels.type_of
			),
			React.createElement(
				'div',
				{ className: 'col-sm-8' },
				React.createElement(
					'label',
					{ className: 'radio-inline' },
					React.createElement('input', { type: 'radio', name: 'source', id: 'source', value: 'diy', onChange: this.isChecked }),
					' ',
					this.props.labels.diy
				),
				React.createElement(
					'label',
					{ className: 'radio-inline' },
					React.createElement('input', { type: 'radio', name: 'source', id: 'source', value: 'premixed', onChange: this.isChecked }),
					' ',
					this.props.labels.commercial
				)
			)
		);
	}
});

var Source = React.createClass({
	displayName: 'Source',

	loadOptionsFromServer: function loadOptionsFromServer() {
		var url = '';
		if (this.state.fertType === 'diy') {
			url = 'http://rotala.dev/json/compounds.json';
		} else if (this.state.fertType === 'premixed') {
			url = 'http://rotala.dev/json/commercial-products.json';
		}
		$.ajax({
			url: url,
			dataType: 'json',
			cache: false,
			success: (function (data) {
				this.setState({ options: data });
			}).bind(this),
			error: (function (xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}).bind(this)
		});
	},
	handleSelection: function handleSelection(event) {
		this.setState({ fertType: event.target.value }, function () {
			this.loadOptionsFromServer();
		});
	},
	getInitialState: function getInitialState() {
		return {
			fertType: null,
			options: []
		};
	},
	componentDidMount: function componentDidMount() {},
	render: function render() {
		if (this.state.fertType === null) {
			return React.createElement(
				'div',
				null,
				React.createElement(RadioDIYPremixed, { labels: this.props.labels, units: this.props.units, onTypeSelected: this.handleSelection })
			);
		} else if (this.state.fertType === 'diy') {
			return React.createElement(
				'div',
				null,
				React.createElement(RadioDIYPremixed, { labels: this.props.labels, units: this.props.units, onTypeSelected: this.handleSelection }),
				React.createElement(_js_viewSelectFertType2['default'], { options: this.state.options, fertType: this.state.fertType, labels: this.props.labels, units: this.props.units }),
				React.createElement(_js_viewRadioSolutionDry2['default'], { labels: this.props.labels, units: this.props.units })
			);
		} else if (this.state.fertType === 'premixed') {
			return React.createElement(
				'div',
				null,
				React.createElement(RadioDIYPremixed, { labels: this.props.labels, units: this.props.units, onTypeSelected: this.handleSelection }),
				React.createElement(_js_viewSelectFertType2['default'], { options: this.state.options, fertType: this.state.fertType, labels: this.props.labels, units: this.props.units })
			);
		} else {
			return React.createElement(
				'div',
				{ className: 'alert alert-danger' },
				'Something Done Broke!'
			);
		}
	}
});

module.exports = Source;

//console.log(Array.isArray(this.props.children));

},{"../js_view/RadioSolutionDry":8,"../js_view/SelectFertType":10}],8:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _js_viewInputDIYSolutionContainerDose = require('../js_view/InputDIYSolutionContainerDose');

var _js_viewInputDIYSolutionContainerDose2 = _interopRequireDefault(_js_viewInputDIYSolutionContainerDose);

var _js_viewSelectCalcFor = require('../js_view/SelectCalcFor');

var _js_viewSelectCalcFor2 = _interopRequireDefault(_js_viewSelectCalcFor);

var RadioSolutionDry = React.createClass({
	displayName: 'RadioSolutionDry',

	isChecked: function isChecked(event) {
		this.props.onTypeSelected(event);
	},
	render: function render() {
		return React.createElement(
			'div',
			{ className: 'form-group' },
			React.createElement(
				'label',
				{ className: 'col-sm-4 control-label' },
				this.props.labels.using
			),
			React.createElement(
				'div',
				{ className: 'col-sm-8' },
				React.createElement(
					'label',
					{ className: 'radio-inline' },
					React.createElement('input', { type: 'radio', name: 'method', id: 'method', value: 'solution', onChange: this.isChecked }),
					' ',
					this.props.labels.solution
				),
				React.createElement(
					'label',
					{ className: 'radio-inline' },
					React.createElement('input', { type: 'radio', name: 'method', id: 'method', value: 'dry', onChange: this.isChecked }),
					' ',
					this.props.labels.dry
				)
			)
		);
	}
});

var RadioSolutionDryContainer = React.createClass({
	displayName: 'RadioSolutionDryContainer',

	getInitialState: function getInitialState() {
		return {
			type: null
		};
	},
	handleSelection: function handleSelection(event) {
		this.setState({ type: event.target.value });
	},
	render: function render() {
		if (this.state.type === null) {
			return React.createElement(
				'div',
				null,
				React.createElement(RadioSolutionDry, { labels: this.props.labels, units: this.props.units, onTypeSelected: this.handleSelection })
			);
		} else if (this.state.type === 'solution') {
			return React.createElement(
				'div',
				null,
				React.createElement(RadioSolutionDry, { labels: this.props.labels, units: this.props.units, onTypeSelected: this.handleSelection }),
				React.createElement(_js_viewInputDIYSolutionContainerDose2['default'], { labels: this.props.labels, units: this.props.units })
			);
		} else if (this.state.type === 'dry') {
			return React.createElement(
				'div',
				null,
				React.createElement(RadioSolutionDry, { labels: this.props.labels, units: this.props.units, onTypeSelected: this.handleSelection }),
				React.createElement(_js_viewSelectCalcFor2['default'], { fertType: this.state.fertType, labels: this.props.labels, units: this.props.units })
			);
		} else {
			return React.createElement(
				'div',
				{ className: 'alert alert-danger' },
				'Something Done Broke!'
			);
		}
	}
});

module.exports = RadioSolutionDryContainer;

},{"../js_view/InputDIYSolutionContainerDose":2,"../js_view/SelectCalcFor":9}],9:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _js_viewSubmitBtn = require('../js_view/SubmitBtn');

var _js_viewSubmitBtn2 = _interopRequireDefault(_js_viewSubmitBtn);

var _js_viewSelectRounding = require('../js_view/SelectRounding');

var _js_viewSelectRounding2 = _interopRequireDefault(_js_viewSelectRounding);

var _js_viewInputDoseCalc = require('../js_view/InputDoseCalc');

var _js_viewInputDoseCalc2 = _interopRequireDefault(_js_viewInputDoseCalc);

var _js_viewInputDoseTarget = require('../js_view/InputDoseTarget');

var _js_viewInputDoseTarget2 = _interopRequireDefault(_js_viewInputDoseTarget);

var SelectCalcFor = React.createClass({
	displayName: 'SelectCalcFor',

	getInitialState: function getInitialState() {
		return {
			value: null
		};
	},
	isSelected: function isSelected(event) {
		this.setState({ value: event.target.value });
	},
	render: function render() {
		if (this.state.value === null) {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					{ className: 'form-group' },
					React.createElement(
						'label',
						{ className: 'col-sm-4 control-label' },
						this.props.labels.method_label
					),
					React.createElement(
						'div',
						{ className: 'col-sm-8' },
						React.createElement(
							'select',
							{ className: 'form-control', value: 'ei', onChange: this.isSelected },
							React.createElement(
								'option',
								{ value: 'target' },
								this.props.labels.method_target
							),
							React.createElement(
								'option',
								{ value: 'result' },
								this.props.labels.method_dose
							),
							React.createElement(
								'option',
								{ value: 'ei' },
								this.props.labels.method_ei
							),
							React.createElement(
								'option',
								{ value: 'ei_daily' },
								this.props.labels.method_ei_daily
							),
							React.createElement(
								'option',
								{ value: 'ei_low' },
								this.props.labels.method_ei_low
							),
							React.createElement(
								'option',
								{ value: 'pps' },
								this.props.labels.method_pps
							),
							React.createElement(
								'option',
								{ value: 'pmdd' },
								this.props.labels.method_pmdd
							)
						)
					)
				),
				React.createElement(_js_viewSelectRounding2['default'], { labels: this.props.labels }),
				React.createElement(_js_viewSubmitBtn2['default'], { labels: this.props.labels })
			);
		} else if (this.state.value === 'target') {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					{ className: 'form-group' },
					React.createElement(
						'label',
						{ className: 'col-sm-4 control-label' },
						this.props.labels.method_label
					),
					React.createElement(
						'div',
						{ className: 'col-sm-8' },
						React.createElement(
							'select',
							{ className: 'form-control', onChange: this.isSelected },
							React.createElement(
								'option',
								{ value: 'target' },
								this.props.labels.method_target
							),
							React.createElement(
								'option',
								{ value: 'result' },
								this.props.labels.method_dose
							),
							React.createElement(
								'option',
								{ value: 'ei' },
								this.props.labels.method_ei
							),
							React.createElement(
								'option',
								{ value: 'ei_daily' },
								this.props.labels.method_ei_daily
							),
							React.createElement(
								'option',
								{ value: 'ei_low' },
								this.props.labels.method_ei_low
							),
							React.createElement(
								'option',
								{ value: 'pps' },
								this.props.labels.method_pps
							),
							React.createElement(
								'option',
								{ value: 'pmdd' },
								this.props.labels.method_pmdd
							)
						)
					)
				),
				React.createElement(_js_viewInputDoseTarget2['default'], { labels: this.props.labels, units: this.props.units }),
				React.createElement(_js_viewSelectRounding2['default'], { labels: this.props.labels }),
				React.createElement(_js_viewSubmitBtn2['default'], { labels: this.props.labels })
			);
		} else if (this.state.value === 'result') {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					{ className: 'form-group' },
					React.createElement(
						'label',
						{ className: 'col-sm-4 control-label' },
						this.props.labels.method_label
					),
					React.createElement(
						'div',
						{ className: 'col-sm-8' },
						React.createElement(
							'select',
							{ className: 'form-control', onChange: this.isSelected },
							React.createElement(
								'option',
								{ value: 'target' },
								this.props.labels.method_target
							),
							React.createElement(
								'option',
								{ value: 'result' },
								this.props.labels.method_dose
							),
							React.createElement(
								'option',
								{ value: 'ei' },
								this.props.labels.method_ei
							),
							React.createElement(
								'option',
								{ value: 'ei_daily' },
								this.props.labels.method_ei_daily
							),
							React.createElement(
								'option',
								{ value: 'ei_low' },
								this.props.labels.method_ei_low
							),
							React.createElement(
								'option',
								{ value: 'pps' },
								this.props.labels.method_pps
							),
							React.createElement(
								'option',
								{ value: 'pmdd' },
								this.props.labels.method_pmdd
							)
						)
					)
				),
				React.createElement(_js_viewInputDoseCalc2['default'], { labels: this.props.labels, units: this.props.units }),
				React.createElement(_js_viewSelectRounding2['default'], { labels: this.props.labels }),
				React.createElement(_js_viewSubmitBtn2['default'], { labels: this.props.labels })
			);
		} else {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					{ className: 'form-group' },
					React.createElement(
						'label',
						{ className: 'col-sm-4 control-label' },
						this.props.labels.method_label
					),
					React.createElement(
						'div',
						{ className: 'col-sm-8' },
						React.createElement(
							'select',
							{ className: 'form-control', onChange: this.isSelected },
							React.createElement(
								'option',
								{ value: 'target' },
								this.props.labels.method_target
							),
							React.createElement(
								'option',
								{ value: 'result' },
								this.props.labels.method_dose
							),
							React.createElement(
								'option',
								{ value: 'ei' },
								this.props.labels.method_ei
							),
							React.createElement(
								'option',
								{ value: 'ei_daily' },
								this.props.labels.method_ei_daily
							),
							React.createElement(
								'option',
								{ value: 'ei_low' },
								this.props.labels.method_ei_low
							),
							React.createElement(
								'option',
								{ value: 'pps' },
								this.props.labels.method_pps
							),
							React.createElement(
								'option',
								{ value: 'pmdd' },
								this.props.labels.method_pmdd
							)
						)
					)
				),
				React.createElement(_js_viewSelectRounding2['default'], { labels: this.props.labels }),
				React.createElement(_js_viewSubmitBtn2['default'], { labels: this.props.labels })
			);
		}
	}
});

module.exports = SelectCalcFor;

},{"../js_view/InputDoseCalc":3,"../js_view/InputDoseTarget":4,"../js_view/SelectRounding":11,"../js_view/SubmitBtn":12}],10:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _js_viewSelectCalcFor = require('../js_view/SelectCalcFor');

var _js_viewSelectCalcFor2 = _interopRequireDefault(_js_viewSelectCalcFor);

var SelectFertType = React.createClass({
	displayName: 'SelectFertType',

	isSelected: function isSelected(event) {
		this.setState({ selected: true });
	},
	getInitialState: function getInitialState() {
		return {
			selected: null
		};
	},
	componentDidMount: function componentDidMount() {},
	render: function render() {

		var obj = this.props.options;
		var arr = Object.keys(obj).sort();

		var selectOptions = arr.map(function (option, index) {
			return React.createElement(
				'option',
				{ value: option, key: index },
				option
			);
		});

		if (this.props.fertType === 'diy') {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					{ className: 'form-group' },
					React.createElement(
						'label',
						{ className: 'col-sm-4 control-label' },
						this.props.labels.dose_with
					),
					React.createElement(
						'div',
						{ className: 'col-sm-8' },
						React.createElement(
							'select',
							{ className: 'form-control', onChange: this.isSelected },
							selectOptions
						)
					)
				)
			);
		} else if (this.props.fertType === 'premixed') {
			if (this.state.selected === true) {
				return React.createElement(
					'div',
					null,
					React.createElement(
						'div',
						{ className: 'form-group' },
						React.createElement(
							'label',
							{ className: 'col-sm-4 control-label' },
							this.props.labels.dose_with
						),
						React.createElement(
							'div',
							{ className: 'col-sm-8' },
							React.createElement(
								'select',
								{ className: 'form-control', onChange: this.isSelected },
								selectOptions
							)
						)
					),
					React.createElement(_js_viewSelectCalcFor2['default'], { fertType: this.state.fertType, labels: this.props.labels, units: this.props.units })
				);
			} else {
				return React.createElement(
					'div',
					null,
					React.createElement(
						'div',
						{ className: 'form-group' },
						React.createElement(
							'label',
							{ className: 'col-sm-4 control-label' },
							this.props.labels.dose_with
						),
						React.createElement(
							'div',
							{ className: 'col-sm-8' },
							React.createElement(
								'select',
								{ className: 'form-control', onChange: this.isSelected },
								selectOptions
							)
						)
					)
				);
			}
		} else {
			return React.createElement(
				'div',
				{ className: 'alert alert-danger' },
				'Something Done Broke!'
			);
		}
	}
});

module.exports = SelectFertType;

//console.log(Array.isArray(this.props.children));

},{"../js_view/SelectCalcFor":9}],11:[function(require,module,exports){
"use strict";

var SelectRounding = React.createClass({
		displayName: "SelectRounding",

		render: function render() {
				return React.createElement(
						"div",
						{ className: "form-group" },
						React.createElement(
								"label",
								{ className: "col-sm-4 control-label", htmlFor: "round_to" },
								this.props.labels.round_to
						),
						React.createElement(
								"div",
								{ className: "col-sm-8" },
								React.createElement(
										"select",
										{ className: "form-control", id: "round_to", name: "round_to" },
										React.createElement(
												"option",
												{ value: "0" },
												"0"
										),
										React.createElement(
												"option",
												{ value: "1" },
												"1"
										),
										React.createElement(
												"option",
												{ value: "2" },
												"2"
										),
										React.createElement(
												"option",
												{ value: "3" },
												"3"
										),
										React.createElement(
												"option",
												{ value: "4" },
												"4"
										),
										React.createElement(
												"option",
												{ value: "5" },
												"5"
										),
										React.createElement(
												"option",
												{ value: "6" },
												"6"
										),
										React.createElement(
												"option",
												{ value: "7" },
												"7"
										),
										React.createElement(
												"option",
												{ value: "8" },
												"8"
										)
								)
						)
				);
		}
});

module.exports = SelectRounding;

},{}],12:[function(require,module,exports){
"use strict";

var SubmitBtn = React.createClass({
  displayName: "SubmitBtn",

  render: function render() {
    return React.createElement(
      "button",
      { type: "submit", value: "Post", className: "btn btn-primary btn-block" },
      this.props.labels.submit_btn
    );
  }
});

module.exports = SubmitBtn;

},{}]},{},[1]);
