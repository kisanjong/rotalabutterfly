var InputDoseCalc = React.createClass({
	render: function() {
		return (
			<div className="form-group">
				<label htmlFor="doseAmount" className="col-xs-12 col-sm-4 control-label">{this.props.labels.dose_calc_label}</label>
				<div className="col-xs-6 col-sm-3">
					<input type="number" id="doseAmount" className="form-control"></input>
				</div>
				<div className="col-xs-6 col-sm-5">
			        <label className="radio-inline">
			          <input type="radio" name="RadioDoseUnit" id="RadioDoseUnit1" defaultValue="milliliter" /> {this.props.units.milliliter}
			        </label>
			        <label className="radio-inline">
			          <input type="radio" name="RadioDoseUnit" id="RadioDoseUnit2" defaultValue="tsp" /> {this.props.units.five_milliliter}
			        </label>
			        <label className="radio-inline">
			          <input type="radio" name="RadioDoseUnit" id="RadioDoseUnit2" defaultValue="pumps" /> {this.props.units.pump_bottle}
			        </label>
			    </div>
			    <p className="help-block col-xs-12 col-sm-8 col-sm-offset-4">{this.props.labels.dose_calc_tooltip}</p>
			</div>
		);
	},
});

module.exports = InputDoseCalc;