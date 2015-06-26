import SelectCalcFor from '../view/SelectCalcFor';
var InputDIYSolutionContainerDose = React.createClass({
	getInitialState: function() {
	    return {
	      value : null
	    }
	  },
	hasValue: function(event) {
		this.setState({value: true});
	},
	render: function() {
		if (this.state.value === true) {
			return (
		      <div>
		        <div className="form-group">
		          <label className="col-sm-4 control-label" htmlFor="solutionContainerSize">{this.props.labels.solution_container}</label>
		          <div className="col-sm-8">
			          <div className="input-group">
			            <input type="number" className="form-control" id="solutionContainerSize" />
			            <div className="input-group-addon">{this.props.units.milliliter}</div>
			          </div>
		          </div>
		        </div>
		        <div className="form-group">
		          <label className="col-sm-4 control-label" htmlFor="solutionDoseSize">{this.props.labels.solution_dose}</label>
		          <div className="col-sm-8">
			          <div className="input-group">
			            <input type="number" className="form-control" id="solutionDoseSize" />
			            <div className="input-group-addon">{this.props.units.milliliter}</div>
			          </div>
			       </div>
		        </div>
		        <SelectCalcFor labels={this.props.labels} units={this.props.units} />
		      </div>
		    );
		} else {
		    return (
		      <div>
		        <div className="form-group">
		          <label className="col-sm-4 control-label" htmlFor="solutionContainerSize">{this.props.labels.solution_container}</label>
		          <div className="col-sm-8">
			          <div className="input-group">
			            <input type="number" className="form-control" id="solutionContainerSize" />
			            <div className="input-group-addon">{this.props.units.milliliter}</div>
			          </div>
		          </div>
		        </div>
		        <div className="form-group">
		          <label className="col-sm-4 control-label" htmlFor="solutionDoseSize">{this.props.labels.solution_dose}</label>
		          <div className="col-sm-8">
			          <div className="input-group">
			            <input type="number" className="form-control" id="solutionDoseSize" onChange={this.hasValue}/>
			            <div className="input-group-addon">{this.props.units.milliliter}</div>
			          </div>
			       </div>
		        </div>
		      </div>
		    );
		}
	}
});

module.exports = InputDIYSolutionContainerDose;