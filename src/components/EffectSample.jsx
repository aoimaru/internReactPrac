import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
// import ColorSample from "./ColorSample";


const EffectSample = () => {
	const [count, setCount] = useState(0);
	const [flag, setFlag] = useState(true);

	const setEffectCount = () => {
		if (count < 20){
			console.log(count);
			setCount(count+1);
		}else{
			setCount(0);
		}
 	};

 	const setEffectFlag = () => {
 		if (flag%2===0){
 			setFlag(true);
 		}else{
 			setFlag(false);
 		}

 	};

 	// useEffect(
 	// 	() => {
 	// 		setEffectFlag();
 	// 	},
 	// 	[ flag ]
 	// 	);

 	return (
 		<div>
 			<h1>{count}</h1>
 			<h1>{flag%2===0 ? "偶数": "奇数"}</h1>
 			<Button
 				size="small"
				variant="contained"
				color="primary"
				style={{ margin: "5px", fontSize: "20px", padding: "0" }}
				onClick = {setEffectCount}
 			>
 			counter
 			</Button>
 		</div>
 		);



};

export default EffectSample;