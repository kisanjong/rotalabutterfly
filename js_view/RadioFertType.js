import SelectFertType from '../js_view/SelectFertType';
import RadioSolutionDry from '../js_view/RadioSolutionDry';

var RadioDIYPremixed = React.createClass({
	isChecked: function(event) {
		this.props.onTypeSelected(event);
	},
	render: function() {
	    return (
	        <div className="form-group">
		      	<label className="col-sm-4 control-label" htmlFor="source">{this.props.labels.type_of}</label>
		      	<div className="col-sm-8">
			        <label className="radio-inline">
			          <input type="radio" name="source" id="source" value="diy" onChange={this.isChecked} /> {this.props.labels.diy}
			        </label>
			        <label className="radio-inline">
			          <input type="radio" name="source" id="source" value="premixed" onChange={this.isChecked} /> {this.props.labels.commercial}
			        </label>
		        </div>
		    </div>
	    );
	}
});

var Source = React.createClass({
	loadOptionsFromServer: function() {
		var url = '';
		if (this.state.fertType === 'diy') {
			url = 'http://rotala.dev/json/compounds.json';
		} else if (this.state.fertType === 'premixed') {
			url = 'http://rotala.dev/json/commercial-products.json';
		}
	    $.ajax({
	      url: url,
	      dataType: 'json',
	      cache: false,
	      success: function(data) {
	        this.setState({options: data});
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)
	    });
	  },
	handleSelection: function(event) {
		this.setState({fertType: event.target.value}, function(){
			this.loadOptionsFromServer();
		});
	},
	getInitialState: function() {
	    return {
	      fertType : null,
	      options: []
	    }
	  },
	componentDidMount: function() {
		//console.log(Array.isArray(this.props.children));
	},
	render: function() {
		if (this.state.fertType === null) {
	      	return ( 
	      		<div>
	        		<RadioDIYPremixed labels={this.props.labels} units={this.props.units} onTypeSelected={this.handleSelection} />
				</div>
			);
	    } else if (this.state.fertType === 'diy') {
	      	return (
	      		<div>
		        	<RadioDIYPremixed labels={this.props.labels} units={this.props.units} onTypeSelected={this.handleSelection}/>
				    <SelectFertType options={this.state.options} fertType={this.state.fertType} labels={this.props.labels} units={this.props.units} />
				    <RadioSolutionDry labels={this.props.labels} units={this.props.units} />
				</div>
	        );
	    } else if (this.state.fertType === 'premixed') {
	        return (
	        	<div>
		        	<RadioDIYPremixed labels={this.props.labels} units={this.props.units} onTypeSelected={this.handleSelection}/>
				    <SelectFertType options={this.state.options} fertType={this.state.fertType} labels={this.props.labels} units={this.props.units} />
				</div>
			);
	    } else {
	    	return (
	    			<div className="alert alert-danger">Something Done Broke!</div>
	    		);
	    }
	}
});

module.exports = Source;