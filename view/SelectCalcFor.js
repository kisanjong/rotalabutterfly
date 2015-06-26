import SubmitBtn from '../view/SubmitBtn';
import SelectRounding from '../view/SelectRounding';
import InputDoseCalc from '../view/InputDoseCalc';
import InputDoseTarget from '../view/InputDoseTarget';
var SelectCalcFor = React.createClass({
	getInitialState: function() {
	    return {
	      value : null
	    }
	},
	isSelected: function(event) {
		this.setState({value: event.target.value});
	},
	render: function() {
	  	if (this.state.value === null) {
	  		return (
		    	<div>
			      <div className="form-group">
			        <label className="col-sm-4 control-label">I am calculating for:</label>
				    <div className="col-sm-8">
				        <select className="form-control" value="Thing 3" onChange={this.isSelected}>
				          <option value="target">Dose to reach a target</option>
				          <option value="result">Result of my dose</option>
				          <option value="Thing 3">Estimative Index</option>
				          <option value="Thing 4">EI Daily</option>
				          <option value="Thing 5">EI Low Light/Weekly</option>
				          <option value="Thing 6">Perpetual Preservation System</option>
				          <option value="Thing 7">PMDD</option>
				        </select>
			        </div>
			      </div>
			      <SelectRounding />
			      <SubmitBtn />
			    </div>
		    );
	  	} else if (this.state.value === 'target') {
	  		return (
		    	<div>
			      <div className="form-group">
			        <label className="col-sm-4 control-label">I am calculating for:</label>
				    <div className="col-sm-8">
				        <select className="form-control" onChange={this.isSelected}>
				          <option value="target">Dose to reach a target</option>
				          <option value="result">Result of my dose</option>
				          <option value="Thing 3">Estimative Index</option>
				          <option value="Thing 4">EI Daily</option>
				          <option value="Thing 5">EI Low Light/Weekly</option>
				          <option value="Thing 6">Perpetual Preservation System</option>
				          <option value="Thing 7">PMDD</option>
				        </select>
			        </div>
			      </div>
			      <InputDoseTarget />
			      <SelectRounding />
			      <SubmitBtn />
			    </div>
		    );
	  	} else if (this.state.value === 'result') {
			return (
		    	<div>
			      <div className="form-group">
			        <label className="col-sm-4 control-label">I am calculating for:</label>
				    <div className="col-sm-8">
				        <select className="form-control" onChange={this.isSelected}>
				          <option value="target">Dose to reach a target</option>
				          <option value="result">Result of my dose</option>
				          <option value="Thing 3">Estimative Index</option>
				          <option value="Thing 4">EI Daily</option>
				          <option value="Thing 5">EI Low Light/Weekly</option>
				          <option value="Thing 6">Perpetual Preservation System</option>
				          <option value="Thing 7">PMDD</option>
				        </select>
			        </div>
			      </div>
			      <InputDoseCalc />
			      <SelectRounding />
			      <SubmitBtn />
			    </div>
		    );
	  	} else {
		    return (
		    	<div>
			      <div className="form-group">
			        <label className="col-sm-4 control-label">I am calculating for:</label>
				    <div className="col-sm-8">
				        <select className="form-control" onChange={this.isSelected}>
				          <option value="target">Dose to reach a target</option>
				          <option value="result">Result of my dose</option>
				          <option value="Thing 3">Estimative Index</option>
				          <option value="Thing 4">EI Daily</option>
				          <option value="Thing 5">EI Low Light/Weekly</option>
				          <option value="Thing 6">Perpetual Preservation System</option>
				          <option value="Thing 7">PMDD</option>
				        </select>
			        </div>
			      </div>
			      <SelectRounding />
			      <SubmitBtn />
			    </div>
		    );
		}
	}
});

module.exports = SelectCalcFor;