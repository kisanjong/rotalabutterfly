(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _js_viewLangSelect = require('../js_view/LangSelect');

var _js_viewLangSelect2 = _interopRequireDefault(_js_viewLangSelect);

var _js_viewNutrientCalculator = require('../js_view/NutrientCalculator');

var _js_viewNutrientCalculator2 = _interopRequireDefault(_js_viewNutrientCalculator);

var Container = React.createClass({
	displayName: 'Container',

	handleSelection: function handleSelection() {
		var newURL = "json/" + event.target.value + ".json";
		this.setState({ url: newURL }, function () {
			this.loadLabelsFromServer();
		});
	},
	loadLabelsFromServer: function loadLabelsFromServer() {
		$.ajax({
			url: this.state.url,
			dataType: 'json',
			cache: false,
			success: (function (data) {
				this.setState({ labels: data.labels });
				this.setState({ units: data.units });
				this.setState({ output: data.output });
				this.setState({ methods: data.methods_text });
			}).bind(this),
			error: (function (xhr, status, err) {
				console.error(this.state.url, status, err.toString());
			}).bind(this)
		});
	},
	getInitialState: function getInitialState() {
		return {
			labels: [],
			units: [],
			output: [],
			methods: [],
			url: "json/en.json"
		};
	},
	componentDidMount: function componentDidMount() {
		this.loadLabelsFromServer();
	},
	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(_js_viewLangSelect2['default'], { onSelection: this.handleSelection }),
			React.createElement(_js_viewNutrientCalculator2['default'], { labels: this.state.labels, units: this.state.units, output: this.state.output, methods: this.state.methods })
		);
	}
});

React.render(React.createElement(Container, null), document.getElementById('calculator'));

},{"../js_view/LangSelect":6,"../js_view/NutrientCalculator":7}],2:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _js_viewSelectCalcFor = require('../js_view/SelectCalcFor');

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
						React.createElement("input", { type: "number", step: "0.01", className: "form-control", id: "sol_volume", name: "sol_volume" }),
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
						React.createElement("input", { type: "number", step: "0.01", className: "form-control", id: "sol_dose", name: "sol_dose", onChange: this.hasValue }),
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

},{"../js_view/SelectCalcFor":10}],3:[function(require,module,exports){
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
				React.createElement("input", { type: "number", step: "0.01", name: "dose_amount", id: "dose_amount", className: "form-control" })
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
          React.createElement("input", { type: "number", step: "0.01", className: "form-control", name: "target_amount", id: "target_amount" }),
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
				React.createElement("input", { type: "number", step: "0.01", name: "tank_vol", id: "tank_vol", className: "form-control" })
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
"use strict";

var LangSelect = React.createClass({
	displayName: "LangSelect",

	isSelected: function isSelected(event) {
		this.props.onSelection(event);
	},
	getInitialState: function getInitialState() {
		return {
			lang: 'en'
		};
	},
	render: function render() {
		return React.createElement(
			"form",
			{ className: "form-horizontal" },
			React.createElement(
				"div",
				{ className: "form-group" },
				React.createElement(
					"label",
					{ htmlFor: "lang", className: "col-xs-12 col-sm-4 control-label" },
					"Current Language:"
				),
				React.createElement(
					"div",
					{ className: "col-xs-12 col-sm-8" },
					React.createElement(
						"select",
						{ defaultValue: "en", name: "lang", className: "form-control", onChange: this.isSelected },
						React.createElement(
							"option",
							{ value: "cs" },
							"Czech"
						),
						React.createElement(
							"option",
							{ value: "de" },
							"Deutsch"
						),
						React.createElement(
							"option",
							{ value: "en" },
							"English"
						),
						React.createElement(
							"option",
							{ value: "es" },
							"Español"
						),
						React.createElement(
							"option",
							{ value: "it" },
							"Italiano"
						),
						React.createElement(
							"option",
							{ value: "jp" },
							"日本語"
						),
						React.createElement(
							"option",
							{ value: "lt" },
							"Lietuvių kalba"
						),
						React.createElement(
							"option",
							{ value: "nl" },
							"Nederlands"
						),
						React.createElement(
							"option",
							{ value: "pl" },
							"Polski"
						),
						React.createElement(
							"option",
							{ value: "ptbr" },
							"Português do Brasil"
						),
						React.createElement(
							"option",
							{ value: "ro" },
							"Română"
						)
					)
				)
			)
		);
	}
});

module.exports = LangSelect;

},{}],7:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _js_viewRadioFertType = require('../js_view/RadioFertType');

var _js_viewRadioFertType2 = _interopRequireDefault(_js_viewRadioFertType);

var _js_viewInputTankSize = require('../js_view/InputTankSize');

var _js_viewInputTankSize2 = _interopRequireDefault(_js_viewInputTankSize);

var NutrientCalculator = React.createClass({
	displayName: 'NutrientCalculator',

	handleSubmit: function handleSubmit(event) {
		var formData = {
			'tank_vol': $('input[name=tank_vol]').val(),
			'tank_units': $('input[name=tank_units]:checked').val(),
			'source': $('input[name=source]:checked').val(),
			'compound': $('#compound').val(),
			'premix': $('#premix').val(),
			'method': $('input[name=method]:checked').val(),
			'sol_volume': $('input[name=sol_volume]').val(),
			'sol_dose': $('input[name=sol_dose]').val(),
			'calc_for': $('#calc_for').val(),
			'target_amount': $('input[name=target_amount]').val(),
			'dose_amount': $('input[name=dose_amount]').val(),
			'dose_units': $('input[name=dose_units]:checked').val(),
			'round_to': $('#round_to').val()
		};
		//console.log("INPUT");
		//console.log(formData); //for testing
		$.ajax({
			type: 'POST',
			url: 'php/main.php',
			data: formData,
			dataType: 'json',
			success: (function (data) {
				//console.log("OUTPUT");
				//console.log(data); //for testing
				var resultContainer = $('#result');
				var outputString = '';
				var outputOne = '';
				var outputTwo = '';
				var outputThree = '';
				var outputFour = '';
				var resultMessage = '';
				resultContainer.empty();

				// create results message
				resultMessage = '<h3>Results:</h3>';
				if (formData['calc_for'] === 'result') {

					outputString = this.props.output.dose;
					outputOne = '<strong>' + formData['dose_amount'] + ' ' + formData['dose_units'] + '</strong>';
					outputTwo = formData['tank_vol'] + formData['tank_units'];
					outputString = outputString.replace(/\$1/g, outputOne).replace(/\$2/g, outputTwo);
					resultMessage = outputString;
				} else if (formData['calc_for'] === 'target') {

					outputString = this.props.output.target;

					outputOne = '<strong>' + data['target_ppm'] + 'ppm ' + data['target_element'] + '</strong>';
					if (formData['compound'] !== undefined) {
						outputTwo = '<strong>' + data['dose_amount'] + ' ' + data['dose_units'] + '</strong> ' + formData['compound'];
					} else {
						outputTwo = '<strong>' + data['dose_amount'] + ' ' + data['dose_units'] + '</strong> ' + formData['premix'];
					}
					outputThree = formData['tank_vol'] + formData['tank_units'];

					outputString = outputString.replace(/\$1/g, outputOne).replace(/\$2/g, outputTwo).replace(/\$3/g, outputThree);
					resultMessage = outputString;
				} else {

					outputString = this.props.output.target;

					outputOne = '<strong>' + data['target_ppm'] + 'ppm ' + data['target_element'] + '</strong>';
					if (formData['compound'] !== undefined) {
						outputTwo = '<strong>' + data['dose_amount'] + ' ' + data['dose_units'] + '</strong> ' + formData['compound'];
					} else {
						outputTwo = '<strong>' + data['dose_amount'] + ' ' + data['dose_units'] + '</strong> ' + formData['premix'];
					}
					outputThree = formData['tank_vol'] + formData['tank_units'];
					outputString = outputString.replace(/\$1/g, outputOne).replace(/\$2/g, outputTwo).replace(/\$3/g, outputThree);
					resultMessage = outputString;
				}

				// create results table
				var resultTable = '<table class="table"><thead><tr><th>Element</th><th>ppm/degree</th></tr></thead><tbody>';
				for (var key in data) {
					switch (key) {
						case 'success':
						case 'dose_amount':
						case 'dose_units':
						case 'target_element':
						case 'target_ppm':
						case 'dose_element':
							break;
						default:
							resultTable += '<tr><td>' + key + '</td><td>' + data[key] + '</td></tr>';
							break;
					}
				}
				resultTable += '</tbody></table>';

				// create addtl info message
				var resultInfo = '';
				if (formData['calc_for'] !== 'result' && formData['calc_for'] !== 'target') {
					switch (formData['calc_for']) {
						case 'ei':
							resultInfo = this.props.methods.ei;
							break;
						case 'ei_daily':
							resultInfo = this.props.methods.ei_daily;
							break;
						case 'ei_low':
							resultInfo = this.props.methods.ei_low;
							break;
						case 'pps':
							resultInfo = this.props.methods.pps;
							break;
						case 'pmdd':
							resultInfo = this.props.methods.pmdd;
							break;
						case 'ada':
							resultInfo = this.props.methods.ada;
							break;
						default:
							break;
					}
				}

				// dump raw JSON results
				var rawResult = '<h3>Raw Results <small>(for testing):</small></h3><dl class="dl-horizontal">';
				for (var key in data) {
					if (data.hasOwnProperty(key) && key !== 'success') {
						rawResult += '<dt>' + key + '</dt><dd>' + data[key] + '</dd>';
					}
				}
				rawResult += '</dl>';

				// output results
				resultContainer.append(resultMessage);
				resultContainer.append(resultTable);
				resultContainer.append(resultInfo);
				resultContainer.append(rawResult);
			}).bind(this),
			error: (function (xhr, status, err) {
				console.error(xhr.status, status);
				console.log(err);
			}).bind(this)
		});
		event.preventDefault();
	},
	getInitialState: function getInitialState() {
		return {
			returnData: []
		};
	},
	render: function render() {
		return React.createElement(
			'div',
			{ className: 'well' },
			React.createElement(
				'form',
				{ className: 'form-horizontal', onSubmit: this.handleSubmit },
				React.createElement(
					'legend',
					null,
					'Your Information:'
				),
				React.createElement(_js_viewInputTankSize2['default'], { labels: this.props.labels, units: this.props.units }),
				React.createElement(_js_viewRadioFertType2['default'], { labels: this.props.labels, units: this.props.units })
			)
		);
	}
});

module.exports = NutrientCalculator;

},{"../js_view/InputTankSize":5,"../js_view/RadioFertType":8}],8:[function(require,module,exports){
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
			url = 'json/compounds.json';
		} else if (this.state.fertType === 'premixed') {
			url = 'json/commercial-products.json';
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
	componentDidMount: function componentDidMount() {
		//console.log(Array.isArray(this.props.children));
	},
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

},{"../js_view/RadioSolutionDry":9,"../js_view/SelectFertType":11}],9:[function(require,module,exports){
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

},{"../js_view/InputDIYSolutionContainerDose":2,"../js_view/SelectCalcFor":10}],10:[function(require,module,exports){
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

	isSelected: function isSelected(event) {
		this.props.onSelection(event);
	},
	render: function render() {
		return React.createElement(
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
					{ className: 'form-control', defaultValue: 'ei', id: 'calc_for', name: 'calc_for', onChange: this.isSelected },
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
		);
	}
});

var SelectCalcForContainer = React.createClass({
	displayName: 'SelectCalcForContainer',

	getInitialState: function getInitialState() {
		return {
			value: null
		};
	},
	handleSelection: function handleSelection(event) {
		this.setState({ value: event.target.value });
	},
	render: function render() {
		if (this.state.value === null) {
			return React.createElement(
				'div',
				null,
				React.createElement(SelectCalcFor, { labels: this.props.labels, onSelection: this.handleSelection }),
				React.createElement(_js_viewSelectRounding2['default'], { labels: this.props.labels }),
				React.createElement(_js_viewSubmitBtn2['default'], { labels: this.props.labels })
			);
		} else if (this.state.value === 'target') {
			return React.createElement(
				'div',
				null,
				React.createElement(SelectCalcFor, { labels: this.props.labels, onSelection: this.handleSelection }),
				React.createElement(_js_viewInputDoseTarget2['default'], { labels: this.props.labels, units: this.props.units }),
				React.createElement(_js_viewSelectRounding2['default'], { labels: this.props.labels }),
				React.createElement(_js_viewSubmitBtn2['default'], { labels: this.props.labels })
			);
		} else if (this.state.value === 'result') {
			return React.createElement(
				'div',
				null,
				React.createElement(SelectCalcFor, { labels: this.props.labels, onSelection: this.handleSelection }),
				React.createElement(_js_viewInputDoseCalc2['default'], { labels: this.props.labels, units: this.props.units }),
				React.createElement(_js_viewSelectRounding2['default'], { labels: this.props.labels }),
				React.createElement(_js_viewSubmitBtn2['default'], { labels: this.props.labels })
			);
		} else {
			return React.createElement(
				'div',
				null,
				React.createElement(SelectCalcFor, { labels: this.props.labels, onSelection: this.handleSelection }),
				React.createElement(_js_viewSelectRounding2['default'], { labels: this.props.labels }),
				React.createElement(_js_viewSubmitBtn2['default'], { labels: this.props.labels })
			);
		}
	}
});

module.exports = SelectCalcForContainer;

},{"../js_view/InputDoseCalc":3,"../js_view/InputDoseTarget":4,"../js_view/SelectRounding":12,"../js_view/SubmitBtn":13}],11:[function(require,module,exports){
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
	componentDidMount: function componentDidMount() {
		//console.log(Array.isArray(this.props.children));
	},
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
							{ className: 'form-control', id: 'compound', name: 'compound', onChange: this.isSelected },
							React.createElement(
								'option',
								{ value: 'null' },
								'Select Your Compound'
							),
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
								{ className: 'form-control', id: 'premix', name: 'premix', onChange: this.isSelected },
								React.createElement(
									'option',
									{ value: 'null' },
									'Select Your Product'
								),
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
								{ className: 'form-control', id: 'premix', name: 'premix', onChange: this.isSelected },
								React.createElement(
									'option',
									{ value: 'null' },
									'Select Your Product'
								),
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

},{"../js_view/SelectCalcFor":10}],12:[function(require,module,exports){
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
										{ className: "form-control", defaultValue: "2", id: "round_to", name: "round_to" },
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

},{}],13:[function(require,module,exports){
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
