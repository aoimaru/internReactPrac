import React from "react";
import { useState } from "react";
import { Button } from "@material-ui/core";

const CounterSample = () => {
	const [count, setCount] = useState(0);

	const countUp = () => {
		if (count < 20){
			setCount(count+1);
		}else{
			setCount(0);
		}
		
	};

	const countDown = () => {
		if (count > 1){
			setCount(count-1);
		}else{
			setCount(0);
		}
		
	};

	const countReset = () => {
		setCount(0);
	};

	return (
		<div>
			<h1>{count}</h1>
			<Button
				size="small"
				variant="contained"
				color="secondary"
				style={{ margin: "5px", fontSize: "20px", padding: "0" }}
				onClick={countUp}
			>
				+ 
			</Button>
			<Button
				size="small"
				variant="contained"
				color="primary"
				style={{ margin: "5px", fontSize: "20px", padding: "0" }}
				onClick={countDown}
			>
				- 
			</Button>
			<Button
				size="small"
				variant="contained"
				style={{ margin: "5px", fontSize: "20px", padding: "0" }}
				onClick={countReset}
			>
				Reset
			</Button>
		</div>
		);

};
export default CounterSample;





