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
        console.log("INPUT");
        console.log(formData); //for testing
	    $.ajax({
	      type: 'POST',
	      url: 'php/main.php',
	      data: formData,
	      dataType: 'json',
	      success: function(data) {
	      	console.log("OUTPUT");
	      	console.log(data); //for testing
	      	var resultContainer = $('#result');
	      	resultContainer.empty();
	      	
	      	// create results message
	      	var resultMessage = '<h3>Results:</h3>';
	      	if(formData['calc_for'] === 'result') {
	      	
	      		resultMessage += 'Your addition of <strong>' + formData['dose_amount']+ ' ' + formData['dose_units'] + '</strong> to your ' + formData['tank_vol'] + formData['tank_units'] + ' aquarium adds:';
	      	
	      	} else if (formData['calc_for'] === 'target') {
	      	
	      		resultMessage += 'To reach your target of <strong>' + data['target_ppm']+ ' ' + data['target_element'] + '</strong> you will need to add <strong>' + data['dose_amount'] + ' ' + data['dose_units'] + '</strong> '; 
	      		if (formData['compound'] !== undefined) {
	      			resultMessage += formData['compound'];
	      		} else {
	      			resultMessage += formData['premix']; 
	      		}
      			resultMessage += ' to your ' + formData['tank_vol'] + formData['tank_units'] + ' aquarium to yield:';
	      	
	      	} else {
			
				resultMessage += 'To reach your target of <strong>' + data['target_ppm']+ ' ' + data['target_element'] + '</strong> you will need to add <strong>' + data['dose_amount'] + ' ' + data['dose_units'] + '</strong> '; 
				if (formData['compound'] !== undefined) {
	      			resultMessage += formData['compound'];
	      		} else {
	      			resultMessage += formData['premix']; 
	      		} 
				resultMessage += ' to your ' + formData['tank_vol'] + formData['tank_units'] + ' aquarium to yield:';
	      	
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
		      			resultInfo = "Dose these levels 2-4 times a week for EI.  Classic EI depends on good CO2, good circulation, and regular water changes.  Light past moderation is not so important.";
		      			break;
	      			case 'ei_daily':
	      				resultInfo = "This is traditional EI reduced to daily dosing levels.";
	      				break;
      				case 'ei_low':
      					resultInfo = "This is EI scaled for once a week dosing under low light. The EI ranges below are over time for most tanks.";
      					break;
  					case 'pps':
  						resultInfo = "We have calculated for a PPS-Pro daily dose.  The recommended range below is for a stabilized mature tank.";
						break;
					case 'pmdd':
						resultInfo = "PMDD does not dose %1. But maybe you should.";
						break;
					case 'ada':
						resultInfo = "The ADA fertilization system includes nutrient-rich substrate, while their liquid fertilizers supplement the water column until the substrate is depleted. The ADA elemental analysis is courtesy of Plantbrain/Tom Barr and is available at <a href='http://barrreport.com' target='_blank'>The Barr Report</a>";
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