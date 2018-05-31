import React, { Component } from 'react'
import TestComponent2 from './TestComponent2'
import smallPic from './assets/images/ball.jpg'

export default class TestComp extends Component {
	render() {
		return (
			<div>
				FAYER?!!?
				 <img src={smallPic} />
				<TestComponent2 />
				
			</div>
		);
	}
}