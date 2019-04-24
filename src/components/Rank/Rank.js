import React from 'react';
import './Rank.css';

const Rank = ({name, entries}) => {
	return (
		<div className="courierNew white f3">
			<span style={{textTransform:"capitalize"}}>{`Welcome, ${name}.`}</span>
			<span>&nbsp;{`You've used our services ${entries} times.`}</span>
		</div>
	);
}

export default Rank;