import RadioFertType from '../js_view/RadioFertType';
import InputTankSize from '../js_view/InputTankSize';

var NutrientCalculator = React.createClass({
	handleSubmit: function(event) {
	    var formData = {
            'tank_vol' : $('input[name=tank_vol]').val(),
            'tank_units' : $('input[name=tank_units]:checked').val(),
            'source' : $('input[name=source]:checked').val(),
            'compound' : $('#compound').val(),
            'premix' : $('#premix').val(),
            'method' : $('input[name=method]:checked').val(),
            'sol_volume' : $('input[name=sol_volume]').val(),
            'sol_dose' : $('input[name=sol_dose]').val(),
            'calc_for' : $('#calc_for').val(),
            'target_amount' : $('input[name=target_amount]').val(),
            'dose_amount' : $('input[name=dose_amount]').val(),
            'dose_units' : $('input[name=dose_units]:checked').val(),
            'round_to' : $('#round_to').val()
        };
        //console.log("INPUT");
        //console.log(formData); //for testing
	    $.ajax({
	      type: 'POST',
	      url: 'php/main.php',
	      data: formData,
	      dataType: 'json',
	      success: function(data) {
	      	//console.log("OUTPUT");
	      	//console.log(data); //for testing
	      	var resultContainer = $('#result');
	      	var outputString = '';
	      	var outputOne = '';
	      	var outputTwo = '';
	      	var outputThree = '';
	      	var outputFour = '';
	      	var resultMessage = '';
	      	resultContainer.empty();
	      	
	      	// create results message
	      	resultMessage = '<h3>Results:</h3>';
	      	if(formData['calc_for'] === 'result') {

	      		outputString = this.props.output.dose; 
	      		outputOne = '<strong>' + formData['dose_amount']+ ' ' + formData['dose_units'] + '</strong>';
	      		outputTwo = formData['tank_vol'] + formData['tank_units'];
		      	outputString = outputString.replace(/\$1/g,outputOne).replace(/\$2/g,outputTwo);
		      	resultMessage = outputString;
	      		
	      	} else if (formData['calc_for'] === 'target') {

	      		outputString = this.props.output.target;
	      		
	      			outputOne = '<strong>' + data['target_ppm']+ 'ppm ' + data['target_element'] + '</strong>';
	      		if (formData['compound'] !== undefined) {
	      			outputTwo = '<strong>' + data['dose_amount'] + ' ' + data['dose_units'] + '</strong> ' + formData['compound'];
	      		} else {
	      			outputTwo = '<strong>' + data['dose_amount'] + ' ' + data['dose_units'] + '</strong> ' + formData['premix']; 
	      		}
	      			outputThree = formData['tank_vol'] + formData['tank_units']; 
	      		
	      		outputString = outputString.replace(/\$1/g,outputOne).replace(/\$2/g,outputTwo).replace(/\$3/g,outputThree);
		      	resultMessage = outputString;
	      	
	      	} else {

	      		outputString = this.props.output.target;
	      		
	      			outputOne = '<strong>' + data['target_ppm']+ 'ppm ' + data['target_element'] + '</strong>';
	      		if (formData['compound'] !== undefined) {
	      			outputTwo = '<strong>' + data['dose_amount'] + ' ' + data['dose_units'] + '</strong> ' + formData['compound'];
	      		} else {
	      			outputTwo = '<strong>' + data['dose_amount'] + ' ' + data['dose_units'] + '</strong> ' + formData['premix']; 
	      		}
	      			outputThree = formData['tank_vol'] + formData['tank_units']; 
	      		outputString = outputString.replace(/\$1/g,outputOne).replace(/\$2/g,outputTwo).replace(/\$3/g,outputThree);
		      	resultMessage = outputString;
	      	
	      	}
	      	
	      	// create results table
	      	var resultTable = '<table class="table"><thead><tr><th>Element</th><th>ppm/degree</th></tr></thead><tbody>';
	      	for ( var key in data) {
	      		switch (key) {
				  case 'success':
				  case 'dose_amount':
				  case 'dose_units':
				  case 'target_element':
				  case 'target_ppm':
			      case 'dose_element':
			        break;
				  default:
				  	resultTable += '<tr><td>'+ key +'</td><td>' + data[key] + '</td></tr>';
				    break;
				}
	      	}
	      	resultTable += '</tbody></table>';

	      	// create addtl info message
	      	var resultInfo = '';
	      	if (formData['calc_for'] !== 'result' && formData['calc_for'] !== 'target') {	
	      		switch (formData['calc_for']) {
	      			case 'ei':
		      			resultInfo = this.props.methods.ei;
		      			break;
	      			case 'ei_daily':
	      				resultInfo = this.props.methods.ei_daily;
	      				break;
      				case 'ei_low':
      					resultInfo = this.props.methods.ei_low;
      					break;
  					case 'pps':
  						resultInfo = this.props.methods.pps;
						break;
					case 'pmdd':
						resultInfo = this.props.methods.pmdd;
						break;
					case 'ada':
						resultInfo = this.props.methods.ada;
						break;
					default:
						break;
	      		}
	      	}

	      	// dump raw JSON results
	      	var rawResult = '<h3>Raw Results <small>(for testing):</small></h3><dl class="dl-horizontal">';
	      	for ( var key in data) {
	      		if (data.hasOwnProperty(key) && key !== 'success') {
	      			rawResult += '<dt>' + key + '</dt><dd>' + data[key] + '</dd>';
	      		}
	      	}
	      	rawResult += '</dl>';

	      	// output results
	      	resultContainer.append(resultMessage);
	      	resultContainer.append(resultTable);
	      	resultContainer.append(resultInfo);
	      	resultContainer.append(rawResult);
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(xhr.status, status);
	        console.log(err);
	      }.bind(this)
	    });
	    event.preventDefault();
	  },
	getInitialState: function() {
	    return {
	      returnData: []
	    }
	  },
	render: function() {
		return (
			<div className="well">
				<form className="form-horizontal" onSubmit={this.handleSubmit}>
					<legend>Your Information:</legend>
					<InputTankSize labels={this.props.labels} units={this.props.units} />
					<RadioFertType labels={this.props.labels} units={this.props.units} />
				</form>
			</div>
			);
	},
});

module.exports = NutrientCalculator;