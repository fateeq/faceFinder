import React from 'react';
import './Register.css';

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			Password: '',
			name: ''
		}
	}

	onNameChange = (event) => {
		this.setState({name: event.target.value})
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value})
	}
	
	onSubmitRegister = () => {
		fetch('https://face-finder-server.herokuapp.com/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password,
				name: this.state.name
			})
		})
		.then(response => response.json())
		.then(user => {
			if (user.id) {
				this.props.loadUser(user);
				this.props.onRouteChange('home');
			}
		})
		.catch(console.log)
	}

	render() {
		return (
			<div className="outer" id="Register">
				<div className="middle">
					<article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
						<main className="pa4 black-80">
						  <div className="measure ">
						    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
						      <legend className="f3 fw6 ph0 mh0">Register</legend>
						      <div className="mt3">
						        <label className="db fw6 lh-copy f6" htmlFor="name">Full Name</label>
						        <input 
						        	onChange={this.onNameChange}
						        	className="pa2 input-reset ba bg-transparent w-100" 
						        	type="text" 
						        	name="name"  
						        	id="name"
						        	placeholder="Enter full name"
						        />
						      </div>
						      <div className="mt3">
						        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
						        <input 
						        	onChange={this.onEmailChange}
						        	className="pa2 input-reset ba bg-transparent w-100" 
						        	type="email" 
						        	name="email-address"  
						        	id="email-address"
						        	placeholder="Enter email address"
						        />
						      </div>
						      <div className="mv3">
						        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
						        <input 
						        	onChange={this.onPasswordChange}
						        	className="pa2 input-reset ba bg-transparent w-100" 
						        	type="password" 
						        	name="password"  
						        	id="password"
						        	placeholder="Create new password"
						        />
						      </div>
						    </fieldset>
						    <div className="">
						      <input 
						      	className="b ph3 pv2 input-reset ba b--black bg-transparent hover-bg-black hover-white pointer f6 dib" 
						      	type="submit" 
						      	value="Register"
						      	onClick={this.onSubmitRegister}
						      />
						    </div>
						  </div>
						</main>
					</article>
				</div>
			</div>
		);
	}
}

export default Register;