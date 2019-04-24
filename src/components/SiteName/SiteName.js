import React from 'react';
import './SiteName.css';
import detective from './detective-large.png';

const SiteName = () => {
	return(

		<div className="mt5 mb4">
			<img className="pr3" src={detective} alt="brain"/>
			<p className="siteTitle light-blue ma0">Face &nbsp; Finder</p>
			<p className='f3 light-blue'>
				My team will detect a face in your image.
			</p>
		</div>
	);
}
export default SiteName;