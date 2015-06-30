import SelectCalcFor from '../js_view/SelectCalcFor';
var SelectFertType = React.createClass({
	isSelected: function(event) {
		this.setState({selected: true});
	},
	getInitialState: function() {
	    return {
	      selected : null
	    }
	  },
	componentDidMount: function() {
		//console.log(Array.isArray(this.props.children));
	},
	render: function() {
		
		var obj = this.props.options;
		var arr = Object.keys(obj).sort();
		
		var selectOptions = arr.map(function(option, index) {
	      return (
	        <option value={option} key={index}>
	          {option}
	        </option>
	      );
	    });

		if (this.props.fertType === 'diy') {
			return (
				<div>
			      <div className="form-group">
			        <label className="col-sm-4 control-label">{this.props.labels.dose_with}</label>
				    <div className="col-sm-8">
				        <select className="form-control" onChange={this.isSelected} >
				          { selectOptions }
				        </select>
			        </div>
			      </div>
			    </div>
		    );	
		} else if (this.props.fertType === 'premixed') {
			if (this.state.selected === true) {
				return (
					<div>
				      <div className="form-group">
				        <label className="col-sm-4 control-label">{this.props.labels.dose_with}</label>
					    <div className="col-sm-8">
					        <select className="form-control" onChange={this.isSelected}>
					          { selectOptions }
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
					          { selectOptions }
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