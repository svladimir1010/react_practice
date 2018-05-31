import React, { Component } from 'react'

 export default class TestComp2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		}
	}
	

	 render() {
		 return (
			 <div onClick={ () => this.setState({ counter: ~~(Math.random() * 10) } )}>
			 { this.state.counter }
			 </div>
		 );
	 }
 }