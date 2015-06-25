import SubmitBtn from '../view/SubmitBtn';
import SelectRounding from '../view/SelectRounding';
import InputDoseCalc from '../view/InputDoseCalc';
import InputDoseTarget from '../view/InputDoseTarget';
import SelectCalcFor from '../view/SelectCalcFor';
import InputDIYSolutionContainerDose from '../view/InputDIYSolutionContainerDose';
import RadioSolutionDry from '../view/RadioSolutionDry';
import SelectFertType from '../view/SelectFertType';
import RadioFertType from '../view/RadioFertType';
import InputTankSize from '../view/InputTankSize';
import NutrientCalculator from '../view/NutrientCalculator';

React.render(
	<NutrientCalculator url="http://rotala.dev/json/en.json" />,
  	document.getElementById('calculator')
);