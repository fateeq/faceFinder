import React from 'react';
import Tilt from 'react-tilt';
import mindmap from './mindmap.png';

const Logo = () => {
	return (
		<div className="pa2">
			<Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 40, width: 40 }} >
			 <div className="Tilt-inner">
			 	<img src={mindmap} alt="AI icon"/>
			 </div>
			</Tilt>
		</div>
	);
}

export default Logo;