import InputDIYSolutionContainerDose from '../js_view/InputDIYSolutionContainerDose';
import SelectCalcFor from '../js_view/SelectCalcFor';

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
		      	<label className="col-sm-4 control-label">{this.props.labels.using}</label>
		      	<div className="col-sm-8">
			        <label className="radio-inline">
			          <input type="radio" name="method" id="method" value="solution" onChange={this.isChecked} /> {this.props.labels.solution}
			        </label>
			        <label className="radio-inline">
			          <input type="radio" name="method" id="method" value="dry" onChange={this.isChecked} /> {this.props.labels.dry}
			        </label>
		        </div>
		      </div>
		    </div>
	    );
  	} else if (this.state.type === 'solution') {
  		return (
			<div>
		      <div className="form-group">
		      	<label className="col-sm-4 control-label">{this.props.labels.using}</label>
		      	<div className="col-sm-8">
			        <label className="radio-inline">
			          <input type="radio" name="method" id="method" value="solution" onChange={this.isChecked} /> {this.props.labels.solution}
			        </label>
			        <label className="radio-inline">
			          <input type="radio" name="method" id="method" value="dry" onChange={this.isChecked} /> {this.props.labels.dry}
			        </label>
		        </div>
		      </div>
		      <InputDIYSolutionContainerDose labels={this.props.labels} units={this.props.units} />
			</div>
		);
	} else if (this.state.type === 'dry') {
		return (
		  	<div>
		      <div className="form-group">
		      	<label className="col-sm-4 control-label">{this.props.labels.using}</label>
		      	<div className="col-sm-8">
			        <label className="radio-inline">
			          <input type="radio" name="method" id="method" value="solution" onChange={this.isChecked} /> {this.props.labels.solution}
			        </label>
			        <label className="radio-inline">
			          <input type="radio" name="method" id="method" value="dry" onChange={this.isChecked} /> {this.props.labels.dry}
			        </label>
		        </div>
		      </div>
		      <SelectCalcFor fertType={this.state.fertType} labels={this.props.labels} units={this.props.units} />
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