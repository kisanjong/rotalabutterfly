var InputTankSize = React.createClass({
	render: function() {
		return (
			<div className="form-group">
				<label htmlFor="aquariumSize" className="col-xs-12 col-sm-4 control-label">{this.props.labels.aquarium}</label>
				<div className="col-xs-6 col-sm-3">
					<input type="number" id="aquariumSize" className="form-control"></input>
				</div>
				<div className="col-xs-6 col-sm-5">
			        <label className="radio-inline">
			          <input type="radio" name="RadioTankUnit" id="RadioTankUnit1" defaultValue="gallons" /> {this.props.units.us_gal}
			        </label>
			        <label className="radio-inline">
			          <input type="radio" name="RadioTankUnit" id="RadioTankUnit2" defaultValue="litres" /> {this.props.units.Liter}
			        </label>
			    </div>
			</div>
		);
	},
});

module.exports = InputTankSize;