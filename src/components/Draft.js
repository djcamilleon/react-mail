import React from "react";

export default class Draft extends React.Component {
sendMessage ( event ) {
	event.prevent();

	browserHistory.push( "/inbox" );
}


	render() {
		const styles = this.getStyles();

		return (
			<div>
				<h1>New Message</h1>
				<form style={ styles.form }>
					<input
						placeholder="To: person@email.com"
						style={ styles.input }
						type="text"
					/>

					<input
						placeholder="cc: person@email.com"
						style={ styles.input }
						type="text"
					/>

					<input
						placeholder="bcc: person@email.com"
						style={ styles.input }
						type="text"
					/>

					<input
						placeholder="Subject"
						style={ styles.input }
						type="text"
					/>

					<textarea
						cols="50"
						rows="17"
						style={ styles.draft }
					/>

					<button onClick={ this.sendMessage } style={ styles.sendButton }>
						Send
					</button>
				</form>

			</div>
		);
	}

	getStyles() {
		return { /* */ }
	}
}
