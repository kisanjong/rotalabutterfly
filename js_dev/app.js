import NutrientCalculator from '../js_view/NutrientCalculator';

React.render(
	<NutrientCalculator url="http://rotala.dev/json/en.json" />,
  	document.getElementById('calculator')
);