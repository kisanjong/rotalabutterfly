(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

var _viewSelectCalcFor = require('../view/SelectCalcFor');

var _viewSelectCalcFor2 = _interopRequireDefault(_viewSelectCalcFor);

var _viewInputDIYSolutionContainerDose = require('../view/InputDIYSolutionContainerDose');

var _viewInputDIYSolutionContainerDose2 = _interopRequireDefault(_viewInputDIYSolutionContainerDose);

var _viewRadioSolutionDry = require('../view/RadioSolutionDry');

var _viewRadioSolutionDry2 = _interopRequireDefault(_viewRadioSolutionDry);

var _viewSelectFertType = require('../view/SelectFertType');

var _viewSelectFertType2 = _interopRequireDefault(_viewSelectFertType);

var _viewRadioFertType = require('../view/RadioFertType');

var _viewRadioFertType2 = _interopRequireDefault(_viewRadioFertType);

var _viewInputTankSize = require('../view/InputTankSize');

var _viewInputTankSize2 = _interopRequireDefault(_viewInputTankSize);

var _viewNutrientCalculator = require('../view/NutrientCalculator');

var _viewNutrientCalculator2 = _interopRequireDefault(_viewNutrientCalculator);

React.render(React.createElement(_viewNutrientCalculator2['default'], { url: 'http://rotala.dev/json/en.json' }), document.getElementById('calculator'));

},{"../view/InputDIYSolutionContainerDose":2,"../view/InputDoseCalc":3,"../view/InputDoseTarget":4,"../view/InputTankSize":5,"../view/NutrientCalculator":6,"../view/RadioFertType":7,"../view/RadioSolutionDry":8,"../view/SelectCalcFor":9,"../view/SelectFertType":10,"../view/SelectRounding":11,"../view/SubmitBtn":12}],2:[function(require,module,exports){
"use strict";

var InputDIYSolutionContainerDose = React.createClass({
	displayName: "InputDIYSolutionContainerDose",

	render: function render() {
		if (this.props.step === 1) {
			return null;
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
							React.createElement("input", { type: "number", className: "form-control", id: "solutionDoseSize" }),
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

},{}],3:[function(require,module,exports){
"use strict";

var InputDoseCalc = React.createClass({
	displayName: "InputDoseCalc",

	render: function render() {
		if (this.props.step === 1) {
			return null;
		} else {
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
"use strict";

var NutrientCalculator = React.createClass({
	displayName: "NutrientCalculator",

	getInitialState: function getInitialState() {
		return {
			step: 1
		};
	},

	render: function render() {
		return React.createElement(
			"form",
			{ className: "form-horizontal" },
			React.createElement(InputTankSize, null),
			React.createElement(RadioFertType, null),
			React.createElement(SelectFertType, null),
			React.createElement(RadioSolutionDry, null),
			React.createElement(InputDIYSolutionContainerDose, null),
			React.createElement(SelectCalcFor, null),
			React.createElement(InputDoseTarget, null),
			React.createElement(InputDoseCalc, null),
			React.createElement(SelectRounding, null),
			React.createElement(SubmitBtn, null)
		);
	}
});

module.exports = NutrientCalculator;

},{}],7:[function(require,module,exports){
// TO DO: Event Handler - Set State on rest of form based on selection
"use strict";

var RadioFertType = React.createClass({
	displayName: "RadioFertType",

	isChecked: function isChecked(event) {
		this.props.changeStep();
	},
	render: function render() {
		return React.createElement(
			"div",
			{ className: "form-group" },
			React.createElement(
				"label",
				{ className: "col-sm-4 control-label" },
				"My Fertilizers Are:"
			),
			React.createElement(
				"div",
				{ className: "col-sm-8" },
				React.createElement(
					"label",
					{ className: "radio-inline" },
					React.createElement("input", { type: "radio", name: "RadioFertType", id: "RadioFertType1", value: "2", onChange: this.isChecked }),
					" DIY"
				),
				React.createElement(
					"label",
					{ className: "radio-inline" },
					React.createElement("input", { type: "radio", name: "RadioFertType", id: "RadioFertType2", value: "3", onChange: this.isChecked }),
					" Premixed"
				)
			)
		);
	}
});

module.exports = RadioFertType;

},{}],8:[function(require,module,exports){
"use strict";

var RadioSolutionDry = React.createClass({
	displayName: "RadioSolutionDry",

	render: function render() {
		if (this.props.step === 2) {
			return React.createElement(
				"div",
				{ className: "form-group" },
				React.createElement(
					"label",
					{ className: "col-sm-4 control-label" },
					"Using:"
				),
				React.createElement(
					"div",
					{ className: "col-sm-8" },
					React.createElement(
						"label",
						{ className: "radio-inline" },
						React.createElement("input", { type: "radio", name: "RadioSolutionDry", id: "RadioSolutionDry1", defaultValue: "Solution" }),
						" A Solution"
					),
					React.createElement(
						"label",
						{ className: "radio-inline" },
						React.createElement("input", { type: "radio", name: "RadioSolutionDry", id: "RadioSolutionDry2", defaultValue: "Dry" }),
						" Dry Dosing"
					)
				)
			);
		} else {
			return null;
		}
	}
});

module.exports = RadioSolutionDry;

},{}],9:[function(require,module,exports){
// TO DO: Event Handler - Set State on rest of form based on selection
"use strict";

var SelectCalcFor = React.createClass({
	displayName: "SelectCalcFor",

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
					"I am calculating for:"
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
						)
					)
				)
			);
		}
	}
});

module.exports = SelectCalcFor;

},{}],10:[function(require,module,exports){
// TO DO: Populate Options - State based dependent on RadioFertType
"use strict";

var SelectFertType = React.createClass({
	displayName: "SelectFertType",

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
					"I am dosing with:"
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
						)
					)
				)
			);
		}
	}
});

module.exports = SelectFertType;

},{}],11:[function(require,module,exports){
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
