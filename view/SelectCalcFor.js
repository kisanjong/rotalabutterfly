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
			        <label className="col-sm-4 control-label">{this.props.labels.method_label}</label>
				    <div className="col-sm-8">
				        <select className="form-control" value="Thing 3" onChange={this.isSelected}>
				          <option value="target">{this.props.labels.method_target}</option>
				          <option value="result">{this.props.labels.method_dose}</option>
				          <option value="Thing 3">{this.props.labels.method_ei}</option>
				          <option value="Thing 4">{this.props.labels.method_ei_daily}</option>
				          <option value="Thing 5">{this.props.labels.method_ei_low}</option>
				          <option value="Thing 6">{this.props.labels.method_pps}</option>
				          <option value="Thing 7">{this.props.labels.method_pmdd}</option>
				        </select>
			        </div>
			      </div>
			      <SelectRounding labels={this.props.labels} />
			      <SubmitBtn labels={this.props.labels} />
			    </div>
		    );
	  	} else if (this.state.value === 'target') {
	  		return (
		    	<div>
			      <div className="form-group">
			        <label className="col-sm-4 control-label">{this.props.labels.method_label}</label>
				    <div className="col-sm-8">
				        <select className="form-control" onChange={this.isSelected}>
				          <option value="target">{this.props.labels.method_target}</option>
				          <option value="result">{this.props.labels.method_dose}</option>
				          <option value="Thing 3">{this.props.labels.method_ei}</option>
				          <option value="Thing 4">{this.props.labels.method_ei_daily}</option>
				          <option value="Thing 5">{this.props.labels.method_ei_low}</option>
				          <option value="Thing 6">{this.props.labels.method_pps}</option>
				          <option value="Thing 7">{this.props.labels.method_pmdd}</option>
				        </select>
			        </div>
			      </div>
			      <InputDoseTarget labels={this.props.labels} units={this.props.units} />
			      <SelectRounding labels={this.props.labels} />
			      <SubmitBtn labels={this.props.labels} />
			    </div>
		    );
	  	} else if (this.state.value === 'result') {
			return (
		    	<div>
			      <div className="form-group">
			        <label className="col-sm-4 control-label">{this.props.labels.method_label}</label>
				    <div className="col-sm-8">
				        <select className="form-control" onChange={this.isSelected}>
				          <option value="target">{this.props.labels.method_target}</option>
				          <option value="result">{this.props.labels.method_dose}</option>
				          <option value="Thing 3">{this.props.labels.method_ei}</option>
				          <option value="Thing 4">{this.props.labels.method_ei_daily}</option>
				          <option value="Thing 5">{this.props.labels.method_ei_low}</option>
				          <option value="Thing 6">{this.props.labels.method_pps}</option>
				          <option value="Thing 7">{this.props.labels.method_pmdd}</option>
				        </select>
			        </div>
			      </div>
			      <InputDoseCalc labels={this.props.labels} units={this.props.units} />
			      <SelectRounding labels={this.props.labels} />
			      <SubmitBtn labels={this.props.labels} />
			    </div>
		    );
	  	} else {
		    return (
		    	<div>
			      <div className="form-group">
			        <label className="col-sm-4 control-label">{this.props.labels.method_label}</label>
				    <div className="col-sm-8">
				        <select className="form-control" onChange={this.isSelected}>
				          <option value="target">{this.props.labels.method_target}</option>
				          <option value="result">{this.props.labels.method_dose}</option>
				          <option value="Thing 3">{this.props.labels.method_ei}</option>
				          <option value="Thing 4">{this.props.labels.method_ei_daily}</option>
				          <option value="Thing 5">{this.props.labels.method_ei_low}</option>
				          <option value="Thing 6">{this.props.labels.method_pps}</option>
				          <option value="Thing 7">{this.props.labels.method_pmdd}</option>
				        </select>
			        </div>
			      </div>
			      <SelectRounding labels={this.props.labels} />
			      <SubmitBtn labels={this.props.labels} />
			    </div>
		    );
		}
	}
});

module.exports = SelectCalcFor;