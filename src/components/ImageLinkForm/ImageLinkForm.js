import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return(
		<div className="mb2 mt2">
			<p className="courierNew white f3 mt4 mb3">
				To begin, enter your image's url below. The image must contain one face only.
			</p>
			<div className="pa4 shadow-5 dib center leaverou">		
				<input className="f4 pa2 bn" type='text' onChange={onInputChange}/>
				<button className="f4 pa2 grow link white bn bg-gold" onClick={onButtonSubmit}>Detect</button>
			</div>
		</div>
	);
}
export default ImageLinkForm;