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
						"Container Size:"
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
								"mL"
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
						"Dose Size:"
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
								"mL"
							)
						)
					)
				),
				React.createElement(_viewSelectCalcFor2["default"], null)
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
						"Container Size:"
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
								"mL"
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
						"Dose Size:"
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
								"mL"
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
				"I Am Adding:"
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
					" mL"
				),
				React.createElement(
					"label",
					{ className: "radio-inline" },
					React.createElement("input", { type: "radio", name: "RadioDoseUnit", id: "RadioDoseUnit2", defaultValue: "tsp" }),
					" tsp/caps"
				),
				React.createElement(
					"label",
					{ className: "radio-inline" },
					React.createElement("input", { type: "radio", name: "RadioDoseUnit", id: "RadioDoseUnit2", defaultValue: "pumps" }),
					" pumps"
				)
			),
			React.createElement(
				"p",
				{ className: "help-block col-xs-12 col-sm-8 col-sm-offset-4" },
				"note: you can use numbers like \"1/8\", \"1.25\", \"2,50\", \"3\""
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
		if (this.props.step === 1) {
			return null;
		} else {
			return React.createElement(
				"div",
				{ className: "form-group" },
				React.createElement(
					"label",
					{ className: "col-sm-4 control-label", htmlFor: "doseTarget" },
					"My Target Is:"
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
							"ppm"
						)
					)
				)
			);
		}
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
				{ htmlFor: "aquariumSize", className: "col-xs-12 col-sm-4 control-label" },
				"My Aquarium Is:"
			),
			React.createElement(
				"div",
				{ className: "col-xs-6 col-sm-3" },
				React.createElement("input", { type: "number", id: "aquariumSize", className: "form-control" })
			),
			React.createElement(
				"div",
				{ className: "col-xs-6 col-sm-5" },
				React.createElement(
					"label",
					{ className: "radio-inline" },
					React.createElement("input", { type: "radio", name: "RadioTankUnit", id: "RadioTankUnit1", defaultValue: "gallons" }),
					" US gal"
				),
				React.createElement(
					"label",
					{ className: "radio-inline" },
					React.createElement("input", { type: "radio", name: "RadioTankUnit", id: "RadioTankUnit2", defaultValue: "litres" }),
					" L"
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

	getInitialState: function getInitialState() {
		return {
			step: 1
		};
	},

	render: function render() {
		return React.createElement(
			'form',
			{ className: 'form-horizontal' },
			React.createElement(_viewInputTankSize2['default'], null),
			React.createElement(_viewRadioFertType2['default'], null)
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

var RadioFertType = React.createClass({
	displayName: 'RadioFertType',

	getInitialState: function getInitialState() {
		return {
			fertType: null
		};
	},
	isChecked: function isChecked(event) {
		this.setState({ fertType: event.target.value });
	},
	render: function render() {
		if (this.state.fertType === null) {
			return React.createElement(
				'div',
				{ className: 'form-group' },
				React.createElement(
					'label',
					{ className: 'col-sm-4 control-label' },
					'My Fertilizers Are:'
				),
				React.createElement(
					'div',
					{ className: 'col-sm-8' },
					React.createElement(
						'label',
						{ className: 'radio-inline' },
						React.createElement('input', { type: 'radio', name: 'RadioFertType', id: 'RadioFertType1', value: 'DIY', onChange: this.isChecked }),
						' DIY'
					),
					React.createElement(
						'label',
						{ className: 'radio-inline' },
						React.createElement('input', { type: 'radio', name: 'RadioFertType', id: 'RadioFertType2', value: 'Premixed', onChange: this.isChecked }),
						' Premixed'
					)
				)
			);
		} else if (this.state.fertType === 'DIY') {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					{ className: 'form-group' },
					React.createElement(
						'label',
						{ className: 'col-sm-4 control-label' },
						'My Fertilizers Are:'
					),
					React.createElement(
						'div',
						{ className: 'col-sm-8' },
						React.createElement(
							'label',
							{ className: 'radio-inline' },
							React.createElement('input', { type: 'radio', name: 'RadioFertType', id: 'RadioFertType1', value: 'DIY', checked: 'checked', onChange: this.isChecked }),
							' DIY'
						),
						React.createElement(
							'label',
							{ className: 'radio-inline' },
							React.createElement('input', { type: 'radio', name: 'RadioFertType', id: 'RadioFertType2', value: 'Premixed', onChange: this.isChecked }),
							' Premixed'
						)
					)
				),
				React.createElement(_viewSelectFertType2['default'], { fertType: this.state.fertType }),
				React.createElement(_viewRadioSolutionDry2['default'], null)
			);
		} else if (this.state.fertType === 'Premixed') {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					{ className: 'form-group' },
					React.createElement(
						'label',
						{ className: 'col-sm-4 control-label' },
						'My Fertilizers Are:'
					),
					React.createElement(
						'div',
						{ className: 'col-sm-8' },
						React.createElement(
							'label',
							{ className: 'radio-inline' },
							React.createElement('input', { type: 'radio', name: 'RadioFertType', id: 'RadioFertType1', value: 'DIY', onChange: this.isChecked }),
							' DIY'
						),
						React.createElement(
							'label',
							{ className: 'radio-inline' },
							React.createElement('input', { type: 'radio', name: 'RadioFertType', id: 'RadioFertType2', value: 'Premixed', checked: 'checked', onChange: this.isChecked }),
							' Premixed'
						)
					)
				),
				React.createElement(_viewSelectFertType2['default'], { fertType: this.state.fertType })
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

module.exports = RadioFertType;

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
						'Using:'
					),
					React.createElement(
						'div',
						{ className: 'col-sm-8' },
						React.createElement(
							'label',
							{ className: 'radio-inline' },
							React.createElement('input', { type: 'radio', name: 'RadioSolutionDry', id: 'RadioSolutionDry1', value: 'solution', onChange: this.isChecked }),
							' A Solution'
						),
						React.createElement(
							'label',
							{ className: 'radio-inline' },
							React.createElement('input', { type: 'radio', name: 'RadioSolutionDry', id: 'RadioSolutionDry2', value: 'dry', onChange: this.isChecked }),
							' Dry Dosing'
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
						'Using:'
					),
					React.createElement(
						'div',
						{ className: 'col-sm-8' },
						React.createElement(
							'label',
							{ className: 'radio-inline' },
							React.createElement('input', { type: 'radio', name: 'RadioSolutionDry', id: 'RadioSolutionDry1', value: 'solution', onChange: this.isChecked }),
							' A Solution'
						),
						React.createElement(
							'label',
							{ className: 'radio-inline' },
							React.createElement('input', { type: 'radio', name: 'RadioSolutionDry', id: 'RadioSolutionDry2', value: 'dry', onChange: this.isChecked }),
							' Dry Dosing'
						)
					)
				),
				React.createElement(_viewInputDIYSolutionContainerDose2['default'], null)
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
						'Using:'
					),
					React.createElement(
						'div',
						{ className: 'col-sm-8' },
						React.createElement(
							'label',
							{ className: 'radio-inline' },
							React.createElement('input', { type: 'radio', name: 'RadioSolutionDry', id: 'RadioSolutionDry1', value: 'solution', onChange: this.isChecked }),
							' A Solution'
						),
						React.createElement(
							'label',
							{ className: 'radio-inline' },
							React.createElement('input', { type: 'radio', name: 'RadioSolutionDry', id: 'RadioSolutionDry2', value: 'dry', onChange: this.isChecked }),
							' Dry Dosing'
						)
					)
				),
				React.createElement(_viewSelectCalcFor2['default'], null)
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
						'I am calculating for:'
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
								'Dose to reach a target'
							),
							React.createElement(
								'option',
								{ value: 'result' },
								'Result of my dose'
							),
							React.createElement(
								'option',
								{ value: 'Thing 3' },
								'Estimative Index'
							),
							React.createElement(
								'option',
								{ value: 'Thing 4' },
								'EI Daily'
							),
							React.createElement(
								'option',
								{ value: 'Thing 5' },
								'EI Low Light/Weekly'
							),
							React.createElement(
								'option',
								{ value: 'Thing 6' },
								'Perpetual Preservation System'
							),
							React.createElement(
								'option',
								{ value: 'Thing 7' },
								'PMDD'
							)
						)
					)
				),
				React.createElement(_viewSelectRounding2['default'], null),
				React.createElement(_viewSubmitBtn2['default'], null)
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
						'I am calculating for:'
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
								'Dose to reach a target'
							),
							React.createElement(
								'option',
								{ value: 'result' },
								'Result of my dose'
							),
							React.createElement(
								'option',
								{ value: 'Thing 3' },
								'Estimative Index'
							),
							React.createElement(
								'option',
								{ value: 'Thing 4' },
								'EI Daily'
							),
							React.createElement(
								'option',
								{ value: 'Thing 5' },
								'EI Low Light/Weekly'
							),
							React.createElement(
								'option',
								{ value: 'Thing 6' },
								'Perpetual Preservation System'
							),
							React.createElement(
								'option',
								{ value: 'Thing 7' },
								'PMDD'
							)
						)
					)
				),
				React.createElement(_viewInputDoseTarget2['default'], null),
				React.createElement(_viewSelectRounding2['default'], null),
				React.createElement(_viewSubmitBtn2['default'], null)
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
						'I am calculating for:'
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
								'Dose to reach a target'
							),
							React.createElement(
								'option',
								{ value: 'result' },
								'Result of my dose'
							),
							React.createElement(
								'option',
								{ value: 'Thing 3' },
								'Estimative Index'
							),
							React.createElement(
								'option',
								{ value: 'Thing 4' },
								'EI Daily'
							),
							React.createElement(
								'option',
								{ value: 'Thing 5' },
								'EI Low Light/Weekly'
							),
							React.createElement(
								'option',
								{ value: 'Thing 6' },
								'Perpetual Preservation System'
							),
							React.createElement(
								'option',
								{ value: 'Thing 7' },
								'PMDD'
							)
						)
					)
				),
				React.createElement(_viewInputDoseCalc2['default'], null),
				React.createElement(_viewSelectRounding2['default'], null),
				React.createElement(_viewSubmitBtn2['default'], null)
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
						'I am calculating for:'
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
								'Dose to reach a target'
							),
							React.createElement(
								'option',
								{ value: 'result' },
								'Result of my dose'
							),
							React.createElement(
								'option',
								{ value: 'Thing 3' },
								'Estimative Index'
							),
							React.createElement(
								'option',
								{ value: 'Thing 4' },
								'EI Daily'
							),
							React.createElement(
								'option',
								{ value: 'Thing 5' },
								'EI Low Light/Weekly'
							),
							React.createElement(
								'option',
								{ value: 'Thing 6' },
								'Perpetual Preservation System'
							),
							React.createElement(
								'option',
								{ value: 'Thing 7' },
								'PMDD'
							)
						)
					)
				),
				React.createElement(_viewSelectRounding2['default'], null),
				React.createElement(_viewSubmitBtn2['default'], null)
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

	getInitialState: function getInitialState() {
		return {
			selected: null
		};
	},
	isSelected: function isSelected(event) {
		this.setState({ selected: true });
	},
	render: function render() {
		if (this.props.fertType === 'DIY') {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					{ className: 'form-group' },
					React.createElement(
						'label',
						{ className: 'col-sm-4 control-label' },
						'I am dosing with:'
					),
					React.createElement(
						'div',
						{ className: 'col-sm-8' },
						React.createElement(
							'select',
							{ className: 'form-control', onChange: this.isSelected },
							React.createElement(
								'option',
								null,
								'DIY 1'
							),
							React.createElement(
								'option',
								null,
								'DIY 2'
							),
							React.createElement(
								'option',
								null,
								'DIY 3'
							),
							React.createElement(
								'option',
								null,
								'DIY 4'
							),
							React.createElement(
								'option',
								null,
								'DIY 5'
							)
						)
					)
				)
			);
		} else if (this.props.fertType === 'Premixed') {
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
							'I am dosing with:'
						),
						React.createElement(
							'div',
							{ className: 'col-sm-8' },
							React.createElement(
								'select',
								{ className: 'form-control', onChange: this.isSelected },
								React.createElement(
									'option',
									null,
									'Premixed 1'
								),
								React.createElement(
									'option',
									null,
									'Premixed 2'
								),
								React.createElement(
									'option',
									null,
									'Premixed 3'
								),
								React.createElement(
									'option',
									null,
									'Premixed 4'
								),
								React.createElement(
									'option',
									null,
									'Premixed 5'
								)
							)
						)
					),
					React.createElement(_viewSelectCalcFor2['default'], null)
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
							'I am dosing with:'
						),
						React.createElement(
							'div',
							{ className: 'col-sm-8' },
							React.createElement(
								'select',
								{ className: 'form-control', onChange: this.isSelected },
								React.createElement(
									'option',
									null,
									'Premixed 1'
								),
								React.createElement(
									'option',
									null,
									'Premixed 2'
								),
								React.createElement(
									'option',
									null,
									'Premixed 3'
								),
								React.createElement(
									'option',
									null,
									'Premixed 4'
								),
								React.createElement(
									'option',
									null,
									'Premixed 5'
								)
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

},{"../view/SelectCalcFor":9}],11:[function(require,module,exports){
"use strict";

var SelectRounding = React.createClass({
	displayName: "SelectRounding",

	render: function render() {
		if (this.props.step === 1) {
			return null;
		} else {
			return React.createElement(
				"div",
				{ className: "form-group" },
				React.createElement(
					"label",
					{ className: "col-sm-4 control-label" },
					"Round to digits past decimal:"
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
	}
});

module.exports = SelectRounding;

},{}],12:[function(require,module,exports){
"use strict";

var SubmitBtn = React.createClass({
  displayName: "SubmitBtn",

  render: function render() {
    if (this.props.step === 1) {
      return null;
    } else {
      return React.createElement(
        "button",
        { type: "submit", className: "btn btn-primary btn-block" },
        "Calculate"
      );
    }
  }
});

module.exports = SubmitBtn;

},{}]},{},[1]);
