var LangSelect = React.createClass({
	isSelected: function(event) {
		this.props.onSelection(event);
	},
	getInitialState: function() {
		return {
			lang: 'en'
		}
	},
	render: function() {
		return (
			<form className="form-horizontal">			
				<div className="form-group">
					<label htmlFor="lang" className="col-xs-12 col-sm-4 control-label">Current Language:</label>
					<div className="col-xs-12 col-sm-8">
						<select defaultValue="en" name="lang" className="form-control" onChange={this.isSelected}>
						  <option value="cs">Czech</option>
						  <option value="de">Deutsch</option>
						  <option value="en">English</option>
						  <option value="es">Español</option>
						  <option value="it">Italiano</option>
						  <option value="jp">日本語</option>
						  <option value="lt">Lietuvių kalba</option>
						  <option value="nl">Nederlands</option>
						  <option value="pl">Polski</option>
						  <option value="ptbr">Português do Brasil</option>
						  <option value="ro">Română</option>
						</select>
					</div>
				</div>
			</form>
			);
	},
});

module.exports = LangSelect;