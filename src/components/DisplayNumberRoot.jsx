import React, {Component} from 'react';
import DisplayNumber from "./DisplayNumber";

export default class DisplayNumberRoot extends Component{
	render(){
		return(
			<div>
				<hi>Display Number Root</hi>
				<DisplayNumber></DisplayNumber>
			</div>
		)
	}
}