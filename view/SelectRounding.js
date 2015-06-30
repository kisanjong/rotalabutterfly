var SelectRounding = React.createClass({
  render: function() {  	
    return (
      <div className="form-group">
        <label className="col-sm-4 control-label" htmlFor="round_to">{this.props.labels.round_to}</label>
	    <div className="col-sm-8">
	        <select className="form-control" id="round_to" name="round_to">
	          <option value="0">0</option>
	          <option value="1">1</option>
	          <option value="2">2</option>
	          <option value="3">3</option>
	          <option value="4">4</option>
	          <option value="5">5</option>
	          <option value="6">6</option>
	          <option value="7">7</option>
	          <option value="8">8</option>
	        </select>
        </div>
      </div>
    );
  }
});

module.exports = SelectRounding;