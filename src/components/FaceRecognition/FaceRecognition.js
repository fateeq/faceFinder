import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageURL, box}) => {
	return (
		<div className="center ma">
			<div className="absolute mt2 mb4">
				<img id="inputImage" className="mw6" src={imageURL} alt="[Your image will appear here.]"/>
				<div className="bounding-box" 
					style={{
						top: box.topRow,
						bottom: box.bottomRow,
						left: box.leftCol,
						right: box.rightCol
					}}>
				</div>
			</div>
		</div>
	);
}

export default FaceRecognition;