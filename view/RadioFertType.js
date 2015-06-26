import SelectFertType from '../view/SelectFertType';
import RadioSolutionDry from '../view/RadioSolutionDry';

var RadioFertType = React.createClass({
	getInitialState: function() {
	    return {
	      fertType : null
	    }
	  },
	isChecked: function(event) {
		this.setState({fertType: event.target.value});
	},
	render: function() {
		if (this.state.fertType === null) {
	      	return ( 
        		<div className="form-group">
			      	<label className="col-sm-4 control-label">{this.props.labels.type_of}</label>
			      	<div className="col-sm-8">
				        <label className="radio-inline">
				          <input type="radio" name="RadioFertType" id="RadioFertType1" value="DIY" onChange={this.isChecked} /> {this.props.labels.diy}
				        </label>
				        <label className="radio-inline">
				          <input type="radio" name="RadioFertType" id="RadioFertType2" value="Premixed" onChange={this.isChecked} /> {this.props.labels.commercial}
				        </label>
			        </div>
			    </div>
			);
	    } else if (this.state.fertType === 'DIY') {
	      	return (
	      		<div>
		        	<div className="form-group">
				      	<label className="col-sm-4 control-label">My Fertilizers Are:</label>
				      	<div className="col-sm-8">
					        <label className="radio-inline">
					          <input type="radio" name="RadioFertType" id="RadioFertType1" value="DIY" checked="checked" onChange={this.isChecked} /> {this.props.labels.diy}
					        </label>
					        <label className="radio-inline">
					          <input type="radio" name="RadioFertType" id="RadioFertType2" value="Premixed" onChange={this.isChecked} /> {this.props.labels.commercial}
					        </label>
				        </div>
				    </div>
				    <SelectFertType fertType={this.state.fertType} labels={this.props.labels} units={this.props.units} />
				    <RadioSolutionDry labels={this.props.labels} units={this.props.units} />
				</div>
	        );
	    } else if (this.state.fertType === 'Premixed') {
	        return (
	        	<div>
		        	<div className="form-group">
				      	<label className="col-sm-4 control-label">My Fertilizers Are:</label>
				      	<div className="col-sm-8">
					        <label className="radio-inline">
					          <input type="radio" name="RadioFertType" id="RadioFertType1" value="DIY" onChange={this.isChecked} /> {this.props.labels.diy}
					        </label>
					        <label className="radio-inline">
					          <input type="radio" name="RadioFertType" id="RadioFertType2" value="Premixed" checked="checked" onChange={this.isChecked} /> {this.props.labels.commercial}
					        </label>
				        </div>
				    </div>
				    <SelectFertType fertType={this.state.fertType} labels={this.props.labels} units={this.props.units} />
				</div>
			);
	    } else {
	    	return (
	    			<div className="alert alert-danger">Something Done Broke!</div>
	    		);
	    }
	}
});

module.exports = RadioFertType;