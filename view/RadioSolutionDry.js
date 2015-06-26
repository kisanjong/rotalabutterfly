import InputDIYSolutionContainerDose from '../view/InputDIYSolutionContainerDose';
import SelectCalcFor from '../view/SelectCalcFor';

var RadioSolutionDry = React.createClass({
	getInitialState: function() {
	    return {
	      type : null
	    }
	  },
	isChecked: function(event) {
		this.setState({type: event.target.value});
	},
  render: function() {
  	if (this.state.type === null ) {
	  	return (
		  	<div>
		      <div className="form-group">
		      	<label className="col-sm-4 control-label">Using:</label>
		      	<div className="col-sm-8">
			        <label className="radio-inline">
			          <input type="radio" name="RadioSolutionDry" id="RadioSolutionDry1" value="solution" onChange={this.isChecked} /> A Solution
			        </label>
			        <label className="radio-inline">
			          <input type="radio" name="RadioSolutionDry" id="RadioSolutionDry2" value="dry" onChange={this.isChecked} /> Dry Dosing
			        </label>
		        </div>
		      </div>
		    </div>
	    );
  	} else if (this.state.type === 'solution') {
  		return (
			<div>
		      <div className="form-group">
		      	<label className="col-sm-4 control-label">Using:</label>
		      	<div className="col-sm-8">
			        <label className="radio-inline">
			          <input type="radio" name="RadioSolutionDry" id="RadioSolutionDry1" value="solution" onChange={this.isChecked} /> A Solution
			        </label>
			        <label className="radio-inline">
			          <input type="radio" name="RadioSolutionDry" id="RadioSolutionDry2" value="dry" onChange={this.isChecked} /> Dry Dosing
			        </label>
		        </div>
		      </div>
		      <InputDIYSolutionContainerDose />
			</div>
		);
	} else if (this.state.type === 'dry') {
		return (
		  	<div>
		      <div className="form-group">
		      	<label className="col-sm-4 control-label">Using:</label>
		      	<div className="col-sm-8">
			        <label className="radio-inline">
			          <input type="radio" name="RadioSolutionDry" id="RadioSolutionDry1" value="solution" onChange={this.isChecked} /> A Solution
			        </label>
			        <label className="radio-inline">
			          <input type="radio" name="RadioSolutionDry" id="RadioSolutionDry2" value="dry" onChange={this.isChecked} /> Dry Dosing
			        </label>
		        </div>
		      </div>
		      <SelectCalcFor />
		    </div>
	    );
	} else {
  		return (
			<div className="alert alert-danger">Something Done Broke!</div>
		);
  	}

  }
});

module.exports = RadioSolutionDry;