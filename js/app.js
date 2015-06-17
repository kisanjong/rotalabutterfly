var SubmitBtn = React.createClass({
  render: function() {
    return (
      <button type="submit" className="btn btn-primary btn-block">Calculate</button>
    );
  }
});

var SelectRounding = React.createClass({
  render: function() {
    return (
      <div className="form-group">
        <label className="col-sm-4 control-label">Round to digits past decimal:</label>
	    <div className="col-sm-8">
	        <select className="form-control">
	          <option>1</option>
	          <option>2</option>
	          <option>3</option>
	          <option>4</option>
	          <option>5</option>
	          <option>6</option>
	          <option>7</option>
	          <option>8</option>
	        </select>
        </div>
      </div>
    );
  }
});

var InputDoseCalc = React.createClass({
	render: function() {
		return (
			<div className="form-group">
				<label htmlFor="doseAmount" className="col-xs-12 col-sm-4 control-label">I Am Adding:</label>
				<div className="col-xs-6 col-sm-3">
					<input type="number" id="doseAmount" className="form-control"></input>
				</div>
				<div className="col-xs-6 col-sm-5">
			        <label className="radio-inline">
			          <input type="radio" name="RadioDoseUnit" id="RadioDoseUnit1" defaultValue="milliliter" /> mL
			        </label>
			        <label className="radio-inline">
			          <input type="radio" name="RadioDoseUnit" id="RadioDoseUnit2" defaultValue="tsp" /> tsp/caps
			        </label>
			        <label className="radio-inline">
			          <input type="radio" name="RadioDoseUnit" id="RadioDoseUnit2" defaultValue="pumps" /> pumps
			        </label>
			    </div>
			    <p className="help-block col-xs-12 col-sm-8 col-sm-offset-4">note: you can use numbers like "1/8", "1.25", "2,50", "3"</p>
			</div>
		);
	},
});

var InputDoseTarget = React.createClass({
  render: function() {
    return (
      	<div className="form-group">
          <label className="col-sm-4 control-label" htmlFor="doseTarget">My Target Is:</label>
          <div className="col-sm-8">
	          <div className="input-group">
	            <input type="number" className="form-control" id="doseTarget" />
	            <div className="input-group-addon">ppm</div>
	          </div>
          </div>
        </div>
    );
  }
});

// TO DO: Event Handler - Set State on rest of form based on selection 
var SelectCalcFor = React.createClass({
  render: function() {
    return (
      <div className="form-group">
        <label className="col-sm-4 control-label">I am calculating for:</label>
	    <div className="col-sm-8">
	        <select className="form-control">
	          <option>1</option>
	          <option>2</option>
	          <option>3</option>
	          <option>4</option>
	          <option>5</option>
	        </select>
        </div>
      </div>
    );
  }
});

var InputDIYSolutionContainerDose = React.createClass({
  render: function() {
    return (
      <div>
        <div className="form-group">
          <label className="col-sm-4 control-label" htmlFor="solutionContainerSize">Container Size:</label>
          <div className="col-sm-8">
	          <div className="input-group">
	            <input type="number" className="form-control" id="solutionContainerSize" />
	            <div className="input-group-addon">mL</div>
	          </div>
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-4 control-label" htmlFor="solutionDoseSize">Dose Size:</label>
          <div className="col-sm-8">
	          <div className="input-group">
	            <input type="number" className="form-control" id="solutionDoseSize" />
	            <div className="input-group-addon">mL</div>
	          </div>
	       </div>
        </div>
      </div>
    );
  }
});

var RadioSolutionDry = React.createClass({
  render: function() {
    return (
      <div className="form-group">
      	<label className="col-sm-4 control-label">Using:</label>
      	<div className="col-sm-8">
	        <label className="radio-inline">
	          <input type="radio" name="RadioSolutionDry" id="RadioSolutionDry1" defaultValue="Solution" /> A Solution
	        </label>
	        <label className="radio-inline">
	          <input type="radio" name="RadioSolutionDry" id="RadioSolutionDry2" defaultValue="Dry" /> Dry Dosing
	        </label>
        </div>
      </div>
    );
  }
});

// TO DO: Populate Options - State based dependent on RadioFertType
var SelectFertType = React.createClass({
  render: function() {
    return (
      <div className="form-group">
        <label className="col-sm-4 control-label">I am dosing with:</label>
	    <div className="col-sm-8">
	        <select className="form-control">
	          <option>1</option>
	          <option>2</option>
	          <option>3</option>
	          <option>4</option>
	          <option>5</option>
	        </select>
        </div>
      </div>
    );
  }
});

// TO DO: Event Handler - Set State on rest of form based on selection 
var RadioFertType = React.createClass({
  render: function() {
    return (
      <div className="form-group">
      	<label className="col-sm-4 control-label">My Fertilizers Are:</label>
      	<div className="col-sm-8">
	        <label className="radio-inline">
	          <input type="radio" name="RadioFertType" id="RadioFertType1" defaultValue="DIY" /> DIY
	        </label>
	        <label className="radio-inline">
	          <input type="radio" name="RadioFertType" id="RadioFertType2" defaultValue="Premixed" /> Premixed
	        </label>
        </div>
      </div>
    );
  }
});

var InputTankSize = React.createClass({
	render: function() {
		return (
			<div className="form-group">
				<label htmlFor="aquariumSize" className="col-xs-12 col-sm-4 control-label">My Aquarium Is:</label>
				<div className="col-xs-6 col-sm-3">
					<input type="number" id="aquariumSize" className="form-control"></input>
				</div>
				<div className="col-xs-6 col-sm-5">
			        <label className="radio-inline">
			          <input type="radio" name="RadioTankUnit" id="RadioTankUnit1" defaultValue="gallons" /> US gal
			        </label>
			        <label className="radio-inline">
			          <input type="radio" name="RadioTankUnit" id="RadioTankUnit2" defaultValue="litres" /> L
			        </label>
			    </div>
			</div>
		);
	},
});

var NutrientCalculator = React.createClass({
	loadDataFromServer: function() {
	    $.ajax({
	      url: this.props.url,
	      dataType: 'json',
	      cache: false,
	      success: function(data) {
	        this.setState({data: data});
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)
	    });
	  },
	getInitialState: function() {
    	return {data: []};
  	},
  	componentDidMount: function() {
	    this.loadDataFromServer();
	  },
	render: function() {
		return (
			<form className="form-horizontal">
				<InputTankSize />
				<RadioFertType />
				<SelectFertType />
				<RadioSolutionDry />
				<InputDIYSolutionContainerDose />
				<SelectCalcFor />
				<InputDoseTarget />
				<InputDoseCalc />
				<SelectRounding />
				<SubmitBtn />
			</form>
		);
	},
});

React.render(
	<NutrientCalculator url="en.json" />,
  	document.getElementById('calculator')
);