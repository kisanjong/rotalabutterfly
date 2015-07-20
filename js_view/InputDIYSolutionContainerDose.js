import SelectCalcFor from '../js_view/SelectCalcFor';

var InputDIYSolutionContainerDose = React.createClass({
	hasValue: function(event) {
		this.props.onValueEntered(event);
	},
	render: function() {
		return (
			<div>
				<div className="form-group">
		          <label className="col-sm-4 control-label" htmlFor="sol_volume">{this.props.labels.solution_container}</label>
		          <div className="col-sm-8">
			          <div className="input-group">
			            <input type="number" className="form-control" id="sol_volume" name="sol_volume" />
			            <div className="input-group-addon">{this.props.units.milliliter}</div>
			          </div>
		          </div>
		        </div>
		        <div className="form-group">
		          <label className="col-sm-4 control-label" htmlFor="sol_dose">{this.props.labels.solution_dose}</label>
		          <div className="col-sm-8">
			          <div className="input-group">
			            <input type="number" className="form-control" id="sol_dose" name="sol_dose" onChange={this.hasValue} />
			            <div className="input-group-addon">{this.props.units.milliliter}</div>
			          </div>
			       </div>
		        </div>
		    </div>
		);
	}
});

var InputDIYSolutionContainerDoseContainer = React.createClass({
	getInitialState: function() {
	    return {
	      value : null
	    }
	  },
	handleValue: function(event) {
		this.setState({value: true});
	},
	render: function() {
		if (this.state.value === true) {
			return (
		      <div>
		        <InputDIYSolutionContainerDose labels={this.props.labels} units={this.props.units} onValueEntered={this.handleValue} />
		        <SelectCalcFor labels={this.props.labels} units={this.props.units} />
		      </div>
		    );
		} else {
		    return (
		      <div>
		        <InputDIYSolutionContainerDose labels={this.props.labels} units={this.props.units} onValueEntered={this.handleValue} />
		      </div>
		    );
		}
	}
});

module.exports = InputDIYSolutionContainerDoseContainer;