var InputTankSize = React.createClass({
	render: function() {
		return (
			<div className="form-group">
				<label htmlFor="aquariumSize" className="col-xs-12 col-sm-4 control-label">My Aquarium Is:</label>
				<div className="col-xs-6 col-sm-3">
					<input type="number" id="aquariumSize" className="form-control"></input>
				</div>
				<div className="col-xs-6 col-sm-5">
			        <label className="radio-inline">
			          <input type="radio" name="RadioTankUnit" id="RadioTankUnit1" defaultValue="gallons" /> US gal
			        </label>
			        <label className="radio-inline">
			          <input type="radio" name="RadioTankUnit" id="RadioTankUnit2" defaultValue="litres" /> L
			        </label>
			    </div>
			</div>
		);
	},
});

module.exports = InputTankSize;