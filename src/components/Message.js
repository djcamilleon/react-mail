import React from "react";
import { findMessaegById } from "../services/messageService";

export default class Message extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			name: ""
			, email: ""
			, content: ""
		}
	}

	componenWillMount () {
		this.getMessage.call( this, this.props.params.messageId );
	}

	componentWillUpdate ( nextProps, nextState ) {
		if ( nextProps.params.messageId !== this.props.params.messageId ) {
			this.getMessage.call ( this, nextProps.params.messageId );
		}
	}

	getMessage ( messageId ) {
		const message = findMessageById( messageId );
	
	this.setState ( {
		name: message.name,
		email: message.email,
		content: message.content
	} );
}

	render() {
		return (
			<div>
				<h1>{ /* message name */ }</h1>
				<h3>{ /* message email */ }</h3>
				<p>{ /* message content */ }</p>
			</div>
		);
	}
}
