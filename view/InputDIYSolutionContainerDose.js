var InputDIYSolutionContainerDose = React.createClass({
	render: function() {
	  	if (this.props.step === 1) {
	  		return null;
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
			            <input type="number" className="form-control" id="solutionDoseSize" />
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