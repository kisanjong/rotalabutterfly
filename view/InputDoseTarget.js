var InputDoseTarget = React.createClass({
  render: function() {  	
    return (
      	<div className="form-group">
          <label className="col-sm-4 control-label" htmlFor="doseTarget">{this.props.labels.dose_target}</label>
          <div className="col-sm-8">
	          <div className="input-group">
	            <input type="number" className="form-control" id="doseTarget" />
	            <div className="input-group-addon">{this.props.units.ppm}</div>
	          </div>
          </div>
        </div>
    );
  }
});

module.exports = InputDoseTarget;