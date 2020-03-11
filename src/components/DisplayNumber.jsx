import React, {Component} from 'react';

export default class DisplayNumber extends Component{
	render(){
		return(
			<div>
				<hi>Display Number</hi>
				<input type="button" value="+"></input>
				<input type="text" value="0"></input>
			</div>
		)
	}
}