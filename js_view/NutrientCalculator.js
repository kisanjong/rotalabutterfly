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
	      	// console.log("OUTPUT");
	      	// console.log(data); //for testing
	      	var resultContainer = $('#result');
	      	resultContainer.empty();
	      	
	      	// create results message
	      	var resultMessage = '<h3>Results:</h3>';
	      	if(formData['calc_for'] === 'result') {
	      		resultMessage += 'Your addition of ' + formData['dose_amount']+ ' ' + formData['dose_units'] + ' to your ' + formData['tank_vol'] + formData['tank_units'] + ' aquarium adds:';
	      	} else if (formData['calc_for'] === 'target') {
	      		resultMessage += 'To reach your target of ' + data['target_ppm']+ ' ' + data['target_element'] + ' you will need to add ' + data['dose_amount'] + data['dose_units'] + formData['compound'] + ' to your ' + formData['tank_vol'] + formData['tank_units'] + ' aquarium to yield:';
	      	} else {
				resultMessage += 'To reach your target of ' + data['target_ppm']+ ' ' + data['target_element'] + ' you will need to add ' + data['dose_amount'] + data['dose_units'] + formData['compound'] + ' to your ' + formData['tank_vol'] + formData['tank_units'] + ' aquarium to yield:';
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
	      	resultContainer.append(rawResult);
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(xhr.status, status);
	        console.log(err);
	      }.bind(this)
	    });
	    event.preventDefault();
	  },
	loadLabelsFromServer: function() {
	    $.ajax({
	      url: this.props.url,
	      dataType: 'json',
	      cache: false,
	      success: function(data) {
	        this.setState({labels: data.labels});
	        this.setState({units: data.units});
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)
	    });
	  },
	getInitialState: function() {
	    return {
	      labels : [],
	      units : [],
	      returnData: []
	    }
	  },
	componentDidMount: function() {
	    this.loadLabelsFromServer();
	  },
	render: function() {
		return (
			<form className="form-horizontal" onSubmit={this.handleSubmit}>
				<InputTankSize labels={this.state.labels} units={this.state.units} />
				<RadioFertType labels={this.state.labels} units={this.state.units} />
			</form>
			);
	},
});

module.exports = NutrientCalculator;