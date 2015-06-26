import SelectCalcFor from '../view/SelectCalcFor';
var SelectFertType = React.createClass({
	getInitialState: function() {
	    return {
	      selected : null
	    }
	  },
	isSelected: function(event) {
		this.setState({selected: true});
	},
	render: function() {
		if (this.props.fertType === 'DIY') {
			return (
				<div>
			      <div className="form-group">
			        <label className="col-sm-4 control-label">{this.props.labels.dose_with}</label>
				    <div className="col-sm-8">
				        <select className="form-control" onChange={this.isSelected} >
				          <option>DIY 1</option>
				          <option>DIY 2</option>
				          <option>DIY 3</option>
				          <option>DIY 4</option>
				          <option>DIY 5</option>
				        </select>
			        </div>
			      </div>
			    </div>
		    );	
		} else if (this.props.fertType === 'Premixed') {
			if (this.state.selected === true) {
				return (
					<div>
				      <div className="form-group">
				        <label className="col-sm-4 control-label">{this.props.labels.dose_with}</label>
					    <div className="col-sm-8">
					        <select className="form-control" onChange={this.isSelected}>
					          <option>Premixed 1</option>
					          <option>Premixed 2</option>
					          <option>Premixed 3</option>
					          <option>Premixed 4</option>
					          <option>Premixed 5</option>
					        </select>
				        </div>
				      </div>
				      <SelectCalcFor fertType={this.state.fertType} labels={this.props.labels} units={this.props.units} />
				    </div>
			    );
			} else {
				return (
					<div>
				      <div className="form-group">
				        <label className="col-sm-4 control-label">{this.props.labels.dose_with}</label>
					    <div className="col-sm-8">
					        <select className="form-control" onChange={this.isSelected}>
					          <option>Premixed 1</option>
					          <option>Premixed 2</option>
					          <option>Premixed 3</option>
					          <option>Premixed 4</option>
					          <option>Premixed 5</option>
					        </select>
				        </div>
				      </div>
				    </div>
			    );
			}
		} else {
	    	return (
    			<div className="alert alert-danger">Something Done Broke!</div>
    		);
	    }
	}
});

module.exports = SelectFertType;