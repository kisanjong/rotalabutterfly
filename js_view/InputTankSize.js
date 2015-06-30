var InputTankSize = React.createClass({
	render: function() {
		return (
			<div className="form-group">
				<label htmlFor="tank_vol" className="col-xs-12 col-sm-4 control-label">{this.props.labels.aquarium}</label>
				<div className="col-xs-6 col-sm-3">
					<input type="number" name="tank_vol" id="tank_vol" className="form-control"></input>
				</div>
				<div className="col-xs-6 col-sm-5">
			        <label className="radio-inline">
			          <input type="radio" name="tank_units" id="tank_units" defaultValue="gal" /> {this.props.units.us_gal}
			        </label>
			        <label className="radio-inline">
			          <input type="radio" name="tank_units" id="tank_units" defaultValue="L" /> {this.props.units.Liter}
			        </label>
			    </div>
			</div>
		);
	},
});

module.exports = InputTankSize;