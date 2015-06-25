var RadioSolutionDry = React.createClass({
  render: function() {
  	if (this.props.step === 2) {
  		return (
	      <div className="form-group">
	      	<label className="col-sm-4 control-label">Using:</label>
	      	<div className="col-sm-8">
		        <label className="radio-inline">
		          <input type="radio" name="RadioSolutionDry" id="RadioSolutionDry1" defaultValue="Solution" /> A Solution
		        </label>
		        <label className="radio-inline">
		          <input type="radio" name="RadioSolutionDry" id="RadioSolutionDry2" defaultValue="Dry" /> Dry Dosing
		        </label>
	        </div>
	      </div>
	    );
  	} else  {
	    return null;
	}
  }
});

module.exports = RadioSolutionDry;