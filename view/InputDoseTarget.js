var InputDoseTarget = React.createClass({
  render: function() {
  	if (this.props.step === 1) {
  		return null;
  	} else {
	    return (
	      	<div className="form-group">
	          <label className="col-sm-4 control-label" htmlFor="doseTarget">My Target Is:</label>
	          <div className="col-sm-8">
		          <div className="input-group">
		            <input type="number" className="form-control" id="doseTarget" />
		            <div className="input-group-addon">ppm</div>
		          </div>
	          </div>
	        </div>
	    );
	}
  }
});

module.exports = InputDoseTarget;