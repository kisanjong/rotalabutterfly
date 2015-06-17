var SubmitBtn = React.createClass({displayName: "SubmitBtn",
  render: function() {
    return (
      React.createElement("button", {type: "submit", className: "btn btn-primary btn-block"}, "Calculate")
    );
  }
});

var SelectRounding = React.createClass({displayName: "SelectRounding",
  render: function() {
    return (
      React.createElement("div", {className: "form-group"}, 
        React.createElement("label", {className: "col-sm-4 control-label"}, "Round to digits past decimal:"), 
	    React.createElement("div", {className: "col-sm-8"}, 
	        React.createElement("select", {className: "form-control"}, 
	          React.createElement("option", null, "1"), 
	          React.createElement("option", null, "2"), 
	          React.createElement("option", null, "3"), 
	          React.createElement("option", null, "4"), 
	          React.createElement("option", null, "5"), 
	          React.createElement("option", null, "6"), 
	          React.createElement("option", null, "7"), 
	          React.createElement("option", null, "8")
	        )
        )
      )
    );
  }
});

var InputDoseCalc = React.createClass({displayName: "InputDoseCalc",
	render: function() {
		return (
			React.createElement("div", {className: "form-group"}, 
				React.createElement("label", {htmlFor: "doseAmount", className: "col-xs-12 col-sm-4 control-label"}, "I Am Adding:"), 
				React.createElement("div", {className: "col-xs-6 col-sm-3"}, 
					React.createElement("input", {type: "number", id: "doseAmount", className: "form-control"})
				), 
				React.createElement("div", {className: "col-xs-6 col-sm-5"}, 
			        React.createElement("label", {className: "radio-inline"}, 
			          React.createElement("input", {type: "radio", name: "RadioDoseUnit", id: "RadioDoseUnit1", defaultValue: "milliliter"}), " mL"
			        ), 
			        React.createElement("label", {className: "radio-inline"}, 
			          React.createElement("input", {type: "radio", name: "RadioDoseUnit", id: "RadioDoseUnit2", defaultValue: "tsp"}), " tsp/caps"
			        ), 
			        React.createElement("label", {className: "radio-inline"}, 
			          React.createElement("input", {type: "radio", name: "RadioDoseUnit", id: "RadioDoseUnit2", defaultValue: "pumps"}), " pumps"
			        )
			    ), 
			    React.createElement("p", {className: "help-block col-xs-12 col-sm-8 col-sm-offset-4"}, "note: you can use numbers like \"1/8\", \"1.25\", \"2,50\", \"3\"")
			)
		);
	},
});

var InputDoseTarget = React.createClass({displayName: "InputDoseTarget",
  render: function() {
    return (
      	React.createElement("div", {className: "form-group"}, 
          React.createElement("label", {className: "col-sm-4 control-label", htmlFor: "doseTarget"}, "My Target Is:"), 
          React.createElement("div", {className: "col-sm-8"}, 
	          React.createElement("div", {className: "input-group"}, 
	            React.createElement("input", {type: "number", className: "form-control", id: "doseTarget"}), 
	            React.createElement("div", {className: "input-group-addon"}, "ppm")
	          )
          )
        )
    );
  }
});

// TO DO: Event Handler - Set State on rest of form based on selection 
var SelectCalcFor = React.createClass({displayName: "SelectCalcFor",
  render: function() {
    return (
      React.createElement("div", {className: "form-group"}, 
        React.createElement("label", {className: "col-sm-4 control-label"}, "I am calculating for:"), 
	    React.createElement("div", {className: "col-sm-8"}, 
	        React.createElement("select", {className: "form-control"}, 
	          React.createElement("option", null, "1"), 
	          React.createElement("option", null, "2"), 
	          React.createElement("option", null, "3"), 
	          React.createElement("option", null, "4"), 
	          React.createElement("option", null, "5")
	        )
        )
      )
    );
  }
});

var InputDIYSolutionContainerDose = React.createClass({displayName: "InputDIYSolutionContainerDose",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("div", {className: "form-group"}, 
          React.createElement("label", {className: "col-sm-4 control-label", htmlFor: "solutionContainerSize"}, "Container Size:"), 
          React.createElement("div", {className: "col-sm-8"}, 
	          React.createElement("div", {className: "input-group"}, 
	            React.createElement("input", {type: "number", className: "form-control", id: "solutionContainerSize"}), 
	            React.createElement("div", {className: "input-group-addon"}, "mL")
	          )
          )
        ), 
        React.createElement("div", {className: "form-group"}, 
          React.createElement("label", {className: "col-sm-4 control-label", htmlFor: "solutionDoseSize"}, "Dose Size:"), 
          React.createElement("div", {className: "col-sm-8"}, 
	          React.createElement("div", {className: "input-group"}, 
	            React.createElement("input", {type: "number", className: "form-control", id: "solutionDoseSize"}), 
	            React.createElement("div", {className: "input-group-addon"}, "mL")
	          )
	       )
        )
      )
    );
  }
});

var RadioSolutionDry = React.createClass({displayName: "RadioSolutionDry",
  render: function() {
    return (
      React.createElement("div", {className: "form-group"}, 
      	React.createElement("label", {className: "col-sm-4 control-label"}, "Using:"), 
      	React.createElement("div", {className: "col-sm-8"}, 
	        React.createElement("label", {className: "radio-inline"}, 
	          React.createElement("input", {type: "radio", name: "RadioSolutionDry", id: "RadioSolutionDry1", defaultValue: "Solution"}), " A Solution"
	        ), 
	        React.createElement("label", {className: "radio-inline"}, 
	          React.createElement("input", {type: "radio", name: "RadioSolutionDry", id: "RadioSolutionDry2", defaultValue: "Dry"}), " Dry Dosing"
	        )
        )
      )
    );
  }
});

// TO DO: Populate Options - State based dependent on RadioFertType
var SelectFertType = React.createClass({displayName: "SelectFertType",
  render: function() {
    return (
      React.createElement("div", {className: "form-group"}, 
        React.createElement("label", {className: "col-sm-4 control-label"}, "I am dosing with:"), 
	    React.createElement("div", {className: "col-sm-8"}, 
	        React.createElement("select", {className: "form-control"}, 
	          React.createElement("option", null, "1"), 
	          React.createElement("option", null, "2"), 
	          React.createElement("option", null, "3"), 
	          React.createElement("option", null, "4"), 
	          React.createElement("option", null, "5")
	        )
        )
      )
    );
  }
});

// TO DO: Event Handler - Set State on rest of form based on selection 
var RadioFertType = React.createClass({displayName: "RadioFertType",
  render: function() {
    return (
      React.createElement("div", {className: "form-group"}, 
      	React.createElement("label", {className: "col-sm-4 control-label"}, "My Fertilizers Are:"), 
      	React.createElement("div", {className: "col-sm-8"}, 
	        React.createElement("label", {className: "radio-inline"}, 
	          React.createElement("input", {type: "radio", name: "RadioFertType", id: "RadioFertType1", defaultValue: "DIY"}), " DIY"
	        ), 
	        React.createElement("label", {className: "radio-inline"}, 
	          React.createElement("input", {type: "radio", name: "RadioFertType", id: "RadioFertType2", defaultValue: "Premixed"}), " Premixed"
	        )
        )
      )
    );
  }
});

var InputTankSize = React.createClass({displayName: "InputTankSize",
	render: function() {
		return (
			React.createElement("div", {className: "form-group"}, 
				React.createElement("label", {htmlFor: "aquariumSize", className: "col-xs-12 col-sm-4 control-label"}, "My Aquarium Is:"), 
				React.createElement("div", {className: "col-xs-6 col-sm-3"}, 
					React.createElement("input", {type: "number", id: "aquariumSize", className: "form-control"})
				), 
				React.createElement("div", {className: "col-xs-6 col-sm-5"}, 
			        React.createElement("label", {className: "radio-inline"}, 
			          React.createElement("input", {type: "radio", name: "RadioTankUnit", id: "RadioTankUnit1", defaultValue: "gallons"}), " US gal"
			        ), 
			        React.createElement("label", {className: "radio-inline"}, 
			          React.createElement("input", {type: "radio", name: "RadioTankUnit", id: "RadioTankUnit2", defaultValue: "litres"}), " L"
			        )
			    )
			)
		);
	},
});

var NutrientCalculator = React.createClass({displayName: "NutrientCalculator",
	loadDataFromServer: function() {
	    $.ajax({
	      url: this.props.url,
	      dataType: 'json',
	      cache: false,
	      success: function(data) {
	        this.setState({data: data});
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)
	    });
	  },
	getInitialState: function() {
    	return {data: []};
  	},
  	componentDidMount: function() {
	    this.loadDataFromServer();
	  },
	render: function() {
		return (
			React.createElement("form", {className: "form-horizontal"}, 
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
			)
		);
	},
});

React.render(
	React.createElement(NutrientCalculator, {url: "en.json"}),
  	document.getElementById('calculator')
);