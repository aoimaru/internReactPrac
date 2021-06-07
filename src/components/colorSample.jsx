import React from "react";

const ColorSample = (props) => {
	console.log(props);
  	const { color, children } = props; 
  	const contentStyle = {
    	color: color,
    	fontSize: "18px"
  	};
  	return (
  		<p style={contentStyle}>{children}</p>
  	);
};

export default ColorSample;