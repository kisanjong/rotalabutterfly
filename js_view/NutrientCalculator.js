import RadioFertType from '../js_view/RadioFertType';
import InputTankSize from '../js_view/InputTankSize';

var NutrientCalculator = React.createClass({
	handleSubmit: function(formData) {
	    console.log(formData);
	    return;
	    // $.ajax({
	    //   url: 'http://rotala.dev/json/test.json',
	    //   dataType: 'json',
	    //   type: 'POST',
	    //   data: formData,
	    //   success: function(data) {
	    //     this.setState({returnData: data});
	    //   }.bind(this),
	    //   error: function(xhr, status, err) {
	    //     console.error(this.props.url, status, err.toString());
	    //   }.bind(this)
	    // });
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