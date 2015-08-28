var InputDoseCalc = React.createClass({
	render: function() {
		return (
			<div className="form-group">
				<label htmlFor="dose_amount" className="col-xs-12 col-sm-4 control-label">{this.props.labels.dose_calc_label}</label>
				<div className="col-xs-6 col-sm-3">
					<input type="number" step="0.01" name="dose_amount" id="dose_amount" className="form-control"></input>
				</div>
				<div className="col-xs-6 col-sm-5">
			        <label className="radio-inline">
			          <input type="radio" name="dose_units" id="dose_amount" defaultValue="milliliter" /> {this.props.units.milliliter}
			        </label>
			        <label className="radio-inline">
			          <input type="radio" name="dose_units" id="dose_amount" defaultValue="tsp" /> {this.props.units.five_milliliter}
			        </label>
			        <label className="radio-inline">
			          <input type="radio" name="dose_units" id="dose_amount" defaultValue="pumps" /> {this.props.units.pump_bottle}
			        </label>
			    </div>
			    <p className="help-block col-xs-12 col-sm-8 col-sm-offset-4">{this.props.labels.dose_calc_tooltip}</p>
			</div>
		);
	},
});

module.exports = InputDoseCalc;