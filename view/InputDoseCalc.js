var InputDoseCalc = React.createClass({
	render: function() {
	if (this.props.step === 1) {
  			return null;
	  	} else {
			return (
				<div className="form-group">
					<label htmlFor="doseAmount" className="col-xs-12 col-sm-4 control-label">I Am Adding:</label>
					<div className="col-xs-6 col-sm-3">
						<input type="number" id="doseAmount" className="form-control"></input>
					</div>
					<div className="col-xs-6 col-sm-5">
				        <label className="radio-inline">
				          <input type="radio" name="RadioDoseUnit" id="RadioDoseUnit1" defaultValue="milliliter" /> mL
				        </label>
				        <label className="radio-inline">
				          <input type="radio" name="RadioDoseUnit" id="RadioDoseUnit2" defaultValue="tsp" /> tsp/caps
				        </label>
				        <label className="radio-inline">
				          <input type="radio" name="RadioDoseUnit" id="RadioDoseUnit2" defaultValue="pumps" /> pumps
				        </label>
				    </div>
				    <p className="help-block col-xs-12 col-sm-8 col-sm-offset-4">note: you can use numbers like "1/8", "1.25", "2,50", "3"</p>
				</div>
			);
		}
	},
});

module.exports = InputDoseCalc;