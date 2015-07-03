var SubmitBtn = React.createClass({
  render: function() {
    return (
      <button type="submit" className="btn btn-primary btn-block">{this.props.labels.submit_btn}</button>
    );
  }
});

module.exports = SubmitBtn;