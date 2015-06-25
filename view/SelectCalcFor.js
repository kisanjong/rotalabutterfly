// TO DO: Event Handler - Set State on rest of form based on selection 
var SelectCalcFor = React.createClass({
  render: function() {
  	if (this.props.step === 1) {
  		return null;
  	} else {
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
  }
});

module.exports = SelectCalcFor;