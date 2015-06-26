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
		          <label className="col-sm-4 control-label" htmlFor="solutionContainerSize">Container Size:</label>
		          <div className="col-sm-8">
			          <div className="input-group">
			            <input type="number" className="form-control" id="solutionContainerSize" />
			            <div className="input-group-addon">mL</div>
			          </div>
		          </div>
		        </div>
		        <div className="form-group">
		          <label className="col-sm-4 control-label" htmlFor="solutionDoseSize">Dose Size:</label>
		          <div className="col-sm-8">
			          <div className="input-group">
			            <input type="number" className="form-control" id="solutionDoseSize" />
			            <div className="input-group-addon">mL</div>
			          </div>
			       </div>
		        </div>
		        <SelectCalcFor />
		      </div>
		    );
		} else {
		    return (
		      <div>
		        <div className="form-group">
		          <label className="col-sm-4 control-label" htmlFor="solutionContainerSize">Container Size:</label>
		          <div className="col-sm-8">
			          <div className="input-group">
			            <input type="number" className="form-control" id="solutionContainerSize" />
			            <div className="input-group-addon">mL</div>
			          </div>
		          </div>
		        </div>
		        <div className="form-group">
		          <label className="col-sm-4 control-label" htmlFor="solutionDoseSize">Dose Size:</label>
		          <div className="col-sm-8">
			          <div className="input-group">
			            <input type="number" className="form-control" id="solutionDoseSize" onChange={this.hasValue}/>
			            <div className="input-group-addon">mL</div>
			          </div>
			       </div>
		        </div>
		      </div>
		    );
		}
	}
});

module.exports = InputDIYSolutionContainerDose;