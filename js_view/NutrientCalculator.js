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
        // console.log("INPUT");
        // console.log(formData); //for testing
	    $.ajax({
	      type: 'POST',
	      url: 'php/main.php',
	      data: formData,
	      dataType: 'json',
	      success: function(data) {
	      	// console.log("OUTPUT");
	      	// console.log(data); //for testing
	      	var resultContainer = $('#result');
	      	var result = '<dl class="dl-horizontal">';

	      	for ( var key in data) {
	      		if (data.hasOwnProperty(key) && key !== 'success') {
	      			result += '<dt>' + key + '</dt><dd>' + data[key] + '</dd>';
	      		}
	      	}
	      	result += '</dl>';
	      	resultContainer.append(result);
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