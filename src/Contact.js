import React, { Component } from "react";
import './Contact.css';


class Contact extends Component {
  render() {
    return (
		<section className="hero is-fullheight">
		<div className="hero-body">
			<div className="container has-text-centered">
				<div className="columns is-8 is-variable ">
					<div className="column is-two-thirds has-text-left">
						<h1 className="title is-1">Contact Us</h1>
						<p className="is-size-4">HOWDY</p>
						<div className="social-media">
							<a href="https://facebook.com" title='facebook'target="_blank" className="button is-light is-large"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
							<a href="https://instagram.com" title='instagram' target="_blank" className="button is-light is-large"><i className="fa fa-instagram" aria-hidden="true"></i></a>
							<a href="https://twitter.com" title='twitter' target="_blank" className="button is-light is-large"><i className="fa fa-twitter" aria-hidden="true"></i></a>
						</div>
					</div>
					<div className="column is-one-third has-text-left">
						<div className="field">
							<label className="label">Name</label>
							<div title='NameInput' className="control">
								<input  className="input is-medium" type="text"/>
							</div>
						</div>
						<div className="field">
							<label className="label">Email</label>
							<div title='EmailInput' className="control">
								<input className="input is-medium" type="text"/>
							</div>
						</div>
						<div className="field">
							<label className="label">Message</label>
							<div className="control">
								<textarea className="textarea is-medium"></textarea>
							</div>
						</div>
						<div className="control">
							<button type="submit" title='but1' className="button is-link is-fullwidth has-text-weight-medium is-medium">Send Message</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    );
  }
}

export default Contact;
