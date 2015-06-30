var SubmitBtn = React.createClass({
  render: function() {
    return (
      <button type="submit" value="Post" className="btn btn-primary btn-block">{this.props.labels.submit_btn}</button>
    );
  }
});

module.exports = SubmitBtn;