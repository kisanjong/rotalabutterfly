var SubmitBtn = React.createClass({
  render: function() {
  	if (this.props.step === 1) {
  		return null;
  	} else {
	    return (
	      <button type="submit" className="btn btn-primary btn-block">Calculate</button>
	    );
	}
  }
});

module.exports = SubmitBtn;