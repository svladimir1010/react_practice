import React, { Component } from 'react'
import bigPic from './assets/images/minion.jpg'
import './assets/styles/style.scss'

 export default class TestComp2 extends Component {
	constructor() {
		super();

		this.state = {
			counter: 0
		}
	}
	
	 render() {
		 return (
			 <div onClick={ () => this.setState({ counter: ~~(Math.random() * 10) })}>
			 { this.state.counter }
			 <img src={bigPic} />
			 </div>
		 );
	 }
 }