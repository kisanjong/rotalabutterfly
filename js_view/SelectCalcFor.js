import SubmitBtn from '../js_view/SubmitBtn';
import SelectRounding from '../js_view/SelectRounding';
import InputDoseCalc from '../js_view/InputDoseCalc';
import InputDoseTarget from '../js_view/InputDoseTarget';

var SelectCalcFor = React.createClass({
	isSelected: function(event) {
		this.props.onSelection(event);
	},
	render: function() {
		return (
			<div className="form-group">
		        <label className="col-sm-4 control-label">{this.props.labels.method_label}</label>
			    <div className="col-sm-8">
			        <select className="form-control" defaultValue="ei" onChange={this.isSelected}>
			          <option value="target">{this.props.labels.method_target}</option>
			          <option value="result">{this.props.labels.method_dose}</option>
			          <option value="ei">{this.props.labels.method_ei}</option>
			          <option value="ei_daily">{this.props.labels.method_ei_daily}</option>
			          <option value="ei_low">{this.props.labels.method_ei_low}</option>
			          <option value="pps">{this.props.labels.method_pps}</option>
			          <option value="pmdd">{this.props.labels.method_pmdd}</option>
			        </select>
		        </div>
		    </div>
		);
	}
});

var SelectCalcForContainer = React.createClass({
	getInitialState: function() {
	    return {
	      value : null
	    }
	},
	handleSelection: function(event) {
		this.setState({value: event.target.value});
	},
	render: function() {
	  	if (this.state.value === null) {
	  		return (
		    	<div>
			      <SelectCalcFor labels={this.props.labels} onSelection={this.handleSelection} />
			      <SelectRounding labels={this.props.labels} />
			      <SubmitBtn labels={this.props.labels} />
			    </div>
		    );
	  	} else if (this.state.value === 'target') {
	  		return (
		    	<div>
			      <SelectCalcFor labels={this.props.labels} onSelection={this.handleSelection} />
			      <InputDoseTarget labels={this.props.labels} units={this.props.units} />
			      <SelectRounding labels={this.props.labels} />
			      <SubmitBtn labels={this.props.labels} />
			    </div>
		    );
	  	} else if (this.state.value === 'result') {
			return (
		    	<div>
			      <SelectCalcFor labels={this.props.labels} onSelection={this.handleSelection} />
			      <InputDoseCalc labels={this.props.labels} units={this.props.units} />
			      <SelectRounding labels={this.props.labels} />
			      <SubmitBtn labels={this.props.labels} />
			    </div>
		    );
	  	} else {
		    return (
		    	<div>
			      <SelectCalcFor labels={this.props.labels} onSelection={this.handleSelection} />
			      <SelectRounding labels={this.props.labels} />
			      <SubmitBtn labels={this.props.labels} />
			    </div>
		    );
		}
	}
});

module.exports = SelectCalcForContainer;