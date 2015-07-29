import LangSelect from '../js_view/LangSelect';
import NutrientCalculator from '../js_view/NutrientCalculator';

var Container = React.createClass({
	handleSelection: function() {
		var newURL = "json/" + event.target.value + ".json";
		this.setState({url: newURL}, function() {
			this.loadLabelsFromServer();
		});
	},
	loadLabelsFromServer: function() {
		$.ajax({
	      url: this.state.url,
	      dataType: 'json',
	      cache: false,
	      success: function(data) {
	      	this.setState({labels: data.labels});
	        this.setState({units: data.units});
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(this.state.url, status, err.toString());
	      }.bind(this)
	    });
	  },
	getInitialState: function() {
	    return {
	      labels : [],
	      units : [],
	      url : "json/en.json"
	    }
	  },
	componentDidMount: function() {
	    this.loadLabelsFromServer();
	  },
	render: function() {
		return (
			<div>
				<LangSelect onSelection={this.handleSelection} />
				<NutrientCalculator labels={this.state.labels} units={this.state.units} />
			</div>
			);
	},
});

React.render(
	<Container />,
  	document.getElementById('calculator')
);