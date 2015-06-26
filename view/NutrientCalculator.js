import RadioFertType from '../view/RadioFertType';
import InputTankSize from '../view/InputTankSize';

var NutrientCalculator = React.createClass({

	getInitialState: function() {
	    return {
	      step : 1
	    }
	  },

	render: function() {
		return (
			<form className="form-horizontal">
				<InputTankSize />
				<RadioFertType />
				
				
				
			</form>
			);
	},
});

module.exports = NutrientCalculator;