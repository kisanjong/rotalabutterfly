// TO DO: Event Handler - Set State on rest of form based on selection 
var RadioFertType = React.createClass({
	getInitialState: function() {
	    return {
	      fertType : null
	    }
	  },
	isChecked: function(event) {
		
	},
	render: function() {
		switch(this.state.step) {
	      case null :
	        return <div className="form-group">
				      	<label className="col-sm-4 control-label">My Fertilizers Are:</label>
				      	<div className="col-sm-8">
					        <label className="radio-inline">
					          <input type="radio" name="RadioFertType" id="RadioFertType1" value="2" onChange={this.isChecked} /> DIY
					        </label>
					        <label className="radio-inline">
					          <input type="radio" name="RadioFertType" id="RadioFertType2" value="3" onChange={this.isChecked} /> Premixed
					        </label>
				        </div>
				    </div>
	      case 2:
	        return <div className="form-group">
				      	<label className="col-sm-4 control-label">My Fertilizers Are:</label>
				      	<div className="col-sm-8">
					        <label className="radio-inline">
					          <input type="radio" name="RadioFertType" id="RadioFertType1" value="2" onChange={this.isChecked} /> DIY
					        </label>
					        <label className="radio-inline">
					          <input type="radio" name="RadioFertType" id="RadioFertType2" value="3" onChange={this.isChecked} /> Premixed
					        </label>
				        </div>
				    </div>
	      case 3:
	        return <div className="form-group">
				      	<label className="col-sm-4 control-label">My Fertilizers Are:</label>
				      	<div className="col-sm-8">
					        <label className="radio-inline">
					          <input type="radio" name="RadioFertType" id="RadioFertType1" value="2" onChange={this.isChecked} /> DIY
					        </label>
					        <label className="radio-inline">
					          <input type="radio" name="RadioFertType" id="RadioFertType2" value="3" onChange={this.isChecked} /> Premixed
					        </label>
				        </div>
				    </div>
	    }
	}
});

module.exports = RadioFertType;