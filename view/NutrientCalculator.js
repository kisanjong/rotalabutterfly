import RadioFertType from '../view/RadioFertType';
import InputTankSize from '../view/InputTankSize';

var NutrientCalculator = React.createClass({
	loadCommentsFromServer: function() {
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
	      units : []
	    }
	  },
	componentDidMount: function() {
	    this.loadCommentsFromServer();
	  },
	render: function() {
		return (
			<form className="form-horizontal">
				<InputTankSize input={this.state.labels} units={this.state.units} />
				<RadioFertType />
			</form>
			);
	},
});

module.exports = NutrientCalculator;