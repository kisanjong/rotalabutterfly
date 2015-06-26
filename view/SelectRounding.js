var SelectRounding = React.createClass({
  render: function() {  	
    return (
      <div className="form-group">
        <label className="col-sm-4 control-label">{this.props.labels.round_to}</label>
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

module.exports = SelectRounding;