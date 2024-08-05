import React from 'react'

class Count extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clicks: 0
		};		
		
	}
	increment = () => {
		this.setState({
			clicks: this.state.clicks + 1
		});
	}
	decrement = () => {
		this.setState({
			clicks: this.state.clicks - 1
		});
	}
	render() {
		return (
			<div className="container">
				<h1>Simple Counter</h1>
				<button onClick={this.increment}>+</button>
				<p>{this.state.clicks}</p>
				<button onClick={this.decrement}>-</button>
			</div>
		);
	}
}
export default Count;

// import React from "react";
// class Count extends React.Component {
// 	inc =()=>{
// 		this.setState({value:this.state.value+1})
// 	}

// 	dec =()=>{
// 		this.setState({
// 			value:this.state.value-1
// 		})
// 	}
// 	state = { value:0 } 
// 	render() { 
// 		return (
// 			<div>
// 				<div>
// 					<button onClick={this.inc}>+</button>{this.state.value} <button onClick={this.dec}>-</button>
// 				</div>
// 			</div>
// 		);
// 	}
// }
 
// export default Count ;