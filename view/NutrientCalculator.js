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
				<SelectFertType />
				<RadioSolutionDry />
				<InputDIYSolutionContainerDose />
				<SelectCalcFor />
				<InputDoseTarget />
				<InputDoseCalc />
				<SelectRounding />
				<SubmitBtn />
			</form>
			);
	},
});

module.exports = NutrientCalculator;