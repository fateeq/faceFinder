import React from 'react';
import Logo from './Logo';
import './Navigation.css';

const Navigation = ({onRouteChange, isSignedIn}) => {
	return (
		<nav>
			
			<Logo/>
			
			{	
				isSignedIn 
				? (
					<div className="flex">	
						<p className='f3 link hover-orange pa3 ma0 pointer' onClick={() => onRouteChange('signOut')}>Sign out</p>
					</div>
				) 
				: (
					<div className="flex">	
						<p className='f3 link hover-orange pa3 ma0 pointer' onClick={() => onRouteChange('signIn')}>Sign in</p>
						<p className='f3 link hover-orange pa3 ma0 pointer' onClick={() => onRouteChange('register')}>Register</p>
					</div>
				)	
			}

		</nav>
	);
}

export default Navigation;