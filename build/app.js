(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _viewNutrientCalculator = require('../view/NutrientCalculator');

var _viewNutrientCalculator2 = _interopRequireDefault(_viewNutrientCalculator);

React.render(React.createElement(_viewNutrientCalculator2['default'], { url: 'http://rotala.dev/json/en.json' }), document.getElementById('calculator'));

},{"../view/NutrientCalculator":6}],2:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _viewSelectCalcFor = require("../view/SelectCalcFor");

var _viewSelectCalcFor2 = _interopRequireDefault(_viewSelectCalcFor);

var InputDIYSolutionContainerDose = React.createClass({
	displayName: "InputDIYSolutionContainerDose",

	getInitialState: function getInitialState() {
		return {
			value: null
		};
	},
	hasValue: function hasValue(event) {
		this.setState({ value: true });
	},
	render: function render() {
		if (this.state.value === true) {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"div",
					{ className: "form-group" },
					React.createElement(
						"label",
						{ className: "col-sm-4 control-label", htmlFor: "solutionContainerSize" },
						this.props.labels.solution_container
					),
					React.createElement(
						"div",
						{ className: "col-sm-8" },
						React.createElement(
							"div",
							{ className: "input-group" },
							React.createElement("input", { type: "number", className: "form-control", id: "solutionContainerSize" }),
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
						{ className: "col-sm-4 control-label", htmlFor: "solutionDoseSize" },
						this.props.labels.solution_dose
					),
					React.createElement(
						"div",
						{ className: "col-sm-8" },
						React.createElement(
							"div",
							{ className: "input-group" },
							React.createElement("input", { type: "number", className: "form-control", id: "solutionDoseSize" }),
							React.createElement(
								"div",
								{ className: "input-group-addon" },
								this.props.units.milliliter
							)
						)
					)
				),
				React.createElement(_viewSelectCalcFor2["default"], { labels: this.props.labels, units: this.props.units })
			);
		} else {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"div",
					{ className: "form-group" },
					React.createElement(
						"label",
						{ className: "col-sm-4 control-label", htmlFor: "solutionContainerSize" },
						this.props.labels.solution_container
					),
					React.createElement(
						"div",
						{ className: "col-sm-8" },
						React.createElement(
							"div",
							{ className: "input-group" },
							React.createElement("input", { type: "number", className: "form-control", id: "solutionContainerSize" }),
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
						{ className: "col-sm-4 control-label", htmlFor: "solutionDoseSize" },
						this.props.labels.solution_dose
					),
					React.createElement(
						"div",
						{ className: "col-sm-8" },
						React.createElement(
							"div",
							{ className: "input-group" },
							React.createElement("input", { type: "number", className: "form-control", id: "solutionDoseSize", onChange: this.hasValue }),
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
	}
});

module.exports = InputDIYSolutionContainerDose;

},{"../view/SelectCalcFor":9}],3:[function(require,module,exports){
"use strict";

var InputDoseCalc = React.createClass({
	displayName: "InputDoseCalc",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "form-group" },
			React.createElement(
				"label",
				{ htmlFor: "doseAmount", className: "col-xs-12 col-sm-4 control-label" },
				this.props.labels.dose_calc_label
			),
			React.createElement(
				"div",
				{ className: "col-xs-6 col-sm-3" },
				React.createElement("input", { type: "number", id: "doseAmount", className: "form-control" })
			),
			React.createElement(
				"div",
				{ className: "col-xs-6 col-sm-5" },
				React.createElement(
					"label",
					{ className: "radio-inline" },
					React.createElement("input", { type: "radio", name: "RadioDoseUnit", id: "RadioDoseUnit1", defaultValue: "milliliter" }),
					" ",
					this.props.units.milliliter
				),
				React.createElement(
					"label",
					{ className: "radio-inline" },
					React.createElement("input", { type: "radio", name: "RadioDoseUnit", id: "RadioDoseUnit2", defaultValue: "tsp" }),
					" ",
					this.props.units.five_milliliter
				),
				React.createElement(
					"label",
					{ className: "radio-inline" },
					React.createElement("input", { type: "radio", name: "RadioDoseUnit", id: "RadioDoseUnit2", defaultValue: "pumps" }),
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
        { className: "col-sm-4 control-label", htmlFor: "doseTarget" },
        this.props.labels.dose_target
      ),
      React.createElement(
        "div",
        { className: "col-sm-8" },
        React.createElement(
          "div",
          { className: "input-group" },
          React.createElement("input", { type: "number", className: "form-control", id: "doseTarget" }),
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

var _viewRadioFertType = require('../view/RadioFertType');

var _viewRadioFertType2 = _interopRequireDefault(_viewRadioFertType);

var _viewInputTankSize = require('../view/InputTankSize');

var _viewInputTankSize2 = _interopRequireDefault(_viewInputTankSize);

var NutrientCalculator = React.createClass({
	displayName: 'NutrientCalculator',

	loadCommentsFromServer: function loadCommentsFromServer() {
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
			units: []
		};
	},
	componentDidMount: function componentDidMount() {
		this.loadCommentsFromServer();
	},
	render: function render() {
		return React.createElement(
			'form',
			{ className: 'form-horizontal' },
			React.createElement(_viewInputTankSize2['default'], { labels: this.state.labels, units: this.state.units }),
			React.createElement(_viewRadioFertType2['default'], { labels: this.state.labels, units: this.state.units })
		);
	}
});

module.exports = NutrientCalculator;

},{"../view/InputTankSize":5,"../view/RadioFertType":7}],7:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _viewSelectFertType = require('../view/SelectFertType');

var _viewSelectFertType2 = _interopRequireDefault(_viewSelectFertType);

var _viewRadioSolutionDry = require('../view/RadioSolutionDry');

var _viewRadioSolutionDry2 = _interopRequireDefault(_viewRadioSolutionDry);

var source = React.createClass({
	displayName: 'source',

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
	isChecked: function isChecked(event) {
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
		} else if (this.state.fertType === 'diy') {
			return React.createElement(
				'div',
				null,
				React.createElement(
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
							React.createElement('input', { type: 'radio', name: 'source', id: 'source', value: 'diy', checked: 'checked', onChange: this.isChecked }),
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
				),
				React.createElement(_viewSelectFertType2['default'], { options: this.state.options, fertType: this.state.fertType, labels: this.props.labels, units: this.props.units }),
				React.createElement(_viewRadioSolutionDry2['default'], { labels: this.props.labels, units: this.props.units })
			);
		} else if (this.state.fertType === 'premixed') {
			return React.createElement(
				'div',
				null,
				React.createElement(
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
							React.createElement('input', { type: 'radio', name: 'source', id: 'source', value: 'premixed', checked: 'checked', onChange: this.isChecked }),
							' ',
							this.props.labels.commercial
						)
					)
				),
				React.createElement(_viewSelectFertType2['default'], { options: this.state.options, fertType: this.state.fertType, labels: this.props.labels, units: this.props.units })
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

module.exports = source;

//console.log(Array.isArray(this.props.children));

},{"../view/RadioSolutionDry":8,"../view/SelectFertType":10}],8:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _viewInputDIYSolutionContainerDose = require('../view/InputDIYSolutionContainerDose');

var _viewInputDIYSolutionContainerDose2 = _interopRequireDefault(_viewInputDIYSolutionContainerDose);

var _viewSelectCalcFor = require('../view/SelectCalcFor');

var _viewSelectCalcFor2 = _interopRequireDefault(_viewSelectCalcFor);

var RadioSolutionDry = React.createClass({
	displayName: 'RadioSolutionDry',

	getInitialState: function getInitialState() {
		return {
			type: null
		};
	},
	isChecked: function isChecked(event) {
		this.setState({ type: event.target.value });
	},
	render: function render() {
		if (this.state.type === null) {
			return React.createElement(
				'div',
				null,
				React.createElement(
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
							React.createElement('input', { type: 'radio', name: 'RadioSolutionDry', id: 'RadioSolutionDry1', value: 'solution', onChange: this.isChecked }),
							' ',
							this.props.labels.solution
						),
						React.createElement(
							'label',
							{ className: 'radio-inline' },
							React.createElement('input', { type: 'radio', name: 'RadioSolutionDry', id: 'RadioSolutionDry2', value: 'dry', onChange: this.isChecked }),
							' ',
							this.props.labels.dry
						)
					)
				)
			);
		} else if (this.state.type === 'solution') {
			return React.createElement(
				'div',
				null,
				React.createElement(
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
							React.createElement('input', { type: 'radio', name: 'RadioSolutionDry', id: 'RadioSolutionDry1', value: 'solution', onChange: this.isChecked }),
							' ',
							this.props.labels.solution
						),
						React.createElement(
							'label',
							{ className: 'radio-inline' },
							React.createElement('input', { type: 'radio', name: 'RadioSolutionDry', id: 'RadioSolutionDry2', value: 'dry', onChange: this.isChecked }),
							' ',
							this.props.labels.dry
						)
					)
				),
				React.createElement(_viewInputDIYSolutionContainerDose2['default'], { labels: this.props.labels, units: this.props.units })
			);
		} else if (this.state.type === 'dry') {
			return React.createElement(
				'div',
				null,
				React.createElement(
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
							React.createElement('input', { type: 'radio', name: 'RadioSolutionDry', id: 'RadioSolutionDry1', value: 'solution', onChange: this.isChecked }),
							' ',
							this.props.labels.solution
						),
						React.createElement(
							'label',
							{ className: 'radio-inline' },
							React.createElement('input', { type: 'radio', name: 'RadioSolutionDry', id: 'RadioSolutionDry2', value: 'dry', onChange: this.isChecked }),
							' ',
							this.props.labels.dry
						)
					)
				),
				React.createElement(_viewSelectCalcFor2['default'], { fertType: this.state.fertType, labels: this.props.labels, units: this.props.units })
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

module.exports = RadioSolutionDry;

},{"../view/InputDIYSolutionContainerDose":2,"../view/SelectCalcFor":9}],9:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _viewSubmitBtn = require('../view/SubmitBtn');

var _viewSubmitBtn2 = _interopRequireDefault(_viewSubmitBtn);

var _viewSelectRounding = require('../view/SelectRounding');

var _viewSelectRounding2 = _interopRequireDefault(_viewSelectRounding);

var _viewInputDoseCalc = require('../view/InputDoseCalc');

var _viewInputDoseCalc2 = _interopRequireDefault(_viewInputDoseCalc);

var _viewInputDoseTarget = require('../view/InputDoseTarget');

var _viewInputDoseTarget2 = _interopRequireDefault(_viewInputDoseTarget);

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
							{ className: 'form-control', value: 'Thing 3', onChange: this.isSelected },
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
								{ value: 'Thing 3' },
								this.props.labels.method_ei
							),
							React.createElement(
								'option',
								{ value: 'Thing 4' },
								this.props.labels.method_ei_daily
							),
							React.createElement(
								'option',
								{ value: 'Thing 5' },
								this.props.labels.method_ei_low
							),
							React.createElement(
								'option',
								{ value: 'Thing 6' },
								this.props.labels.method_pps
							),
							React.createElement(
								'option',
								{ value: 'Thing 7' },
								this.props.labels.method_pmdd
							)
						)
					)
				),
				React.createElement(_viewSelectRounding2['default'], { labels: this.props.labels }),
				React.createElement(_viewSubmitBtn2['default'], { labels: this.props.labels })
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
								{ value: 'Thing 3' },
								this.props.labels.method_ei
							),
							React.createElement(
								'option',
								{ value: 'Thing 4' },
								this.props.labels.method_ei_daily
							),
							React.createElement(
								'option',
								{ value: 'Thing 5' },
								this.props.labels.method_ei_low
							),
							React.createElement(
								'option',
								{ value: 'Thing 6' },
								this.props.labels.method_pps
							),
							React.createElement(
								'option',
								{ value: 'Thing 7' },
								this.props.labels.method_pmdd
							)
						)
					)
				),
				React.createElement(_viewInputDoseTarget2['default'], { labels: this.props.labels, units: this.props.units }),
				React.createElement(_viewSelectRounding2['default'], { labels: this.props.labels }),
				React.createElement(_viewSubmitBtn2['default'], { labels: this.props.labels })
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
								{ value: 'Thing 3' },
								this.props.labels.method_ei
							),
							React.createElement(
								'option',
								{ value: 'Thing 4' },
								this.props.labels.method_ei_daily
							),
							React.createElement(
								'option',
								{ value: 'Thing 5' },
								this.props.labels.method_ei_low
							),
							React.createElement(
								'option',
								{ value: 'Thing 6' },
								this.props.labels.method_pps
							),
							React.createElement(
								'option',
								{ value: 'Thing 7' },
								this.props.labels.method_pmdd
							)
						)
					)
				),
				React.createElement(_viewInputDoseCalc2['default'], { labels: this.props.labels, units: this.props.units }),
				React.createElement(_viewSelectRounding2['default'], { labels: this.props.labels }),
				React.createElement(_viewSubmitBtn2['default'], { labels: this.props.labels })
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
								{ value: 'Thing 3' },
								this.props.labels.method_ei
							),
							React.createElement(
								'option',
								{ value: 'Thing 4' },
								this.props.labels.method_ei_daily
							),
							React.createElement(
								'option',
								{ value: 'Thing 5' },
								this.props.labels.method_ei_low
							),
							React.createElement(
								'option',
								{ value: 'Thing 6' },
								this.props.labels.method_pps
							),
							React.createElement(
								'option',
								{ value: 'Thing 7' },
								this.props.labels.method_pmdd
							)
						)
					)
				),
				React.createElement(_viewSelectRounding2['default'], { labels: this.props.labels }),
				React.createElement(_viewSubmitBtn2['default'], { labels: this.props.labels })
			);
		}
	}
});

module.exports = SelectCalcFor;

},{"../view/InputDoseCalc":3,"../view/InputDoseTarget":4,"../view/SelectRounding":11,"../view/SubmitBtn":12}],10:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _viewSelectCalcFor = require('../view/SelectCalcFor');

var _viewSelectCalcFor2 = _interopRequireDefault(_viewSelectCalcFor);

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
		console.log(this.props.options);
		var obj = this.props.options;
		var arr = Object.keys(obj).sort();
		console.log(arr);
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
					React.createElement(_viewSelectCalcFor2['default'], { fertType: this.state.fertType, labels: this.props.labels, units: this.props.units })
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

},{"../view/SelectCalcFor":9}],11:[function(require,module,exports){
"use strict";

var SelectRounding = React.createClass({
		displayName: "SelectRounding",

		render: function render() {
				return React.createElement(
						"div",
						{ className: "form-group" },
						React.createElement(
								"label",
								{ className: "col-sm-4 control-label" },
								this.props.labels.round_to
						),
						React.createElement(
								"div",
								{ className: "col-sm-8" },
								React.createElement(
										"select",
										{ className: "form-control" },
										React.createElement(
												"option",
												null,
												"1"
										),
										React.createElement(
												"option",
												null,
												"2"
										),
										React.createElement(
												"option",
												null,
												"3"
										),
										React.createElement(
												"option",
												null,
												"4"
										),
										React.createElement(
												"option",
												null,
												"5"
										),
										React.createElement(
												"option",
												null,
												"6"
										),
										React.createElement(
												"option",
												null,
												"7"
										),
										React.createElement(
												"option",
												null,
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
      { type: "submit", className: "btn btn-primary btn-block" },
      this.props.labels.submit_btn
    );
  }
});

module.exports = SubmitBtn;

},{}]},{},[1]);
