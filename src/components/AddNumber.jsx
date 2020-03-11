import React, {Component} from 'react';

export default class AddNumber extends Component{
	render(){
		return(
			<div>
				<hi>Add Number</hi>
				<input type="button" value="+"></input>
				<input type="text" value="0"></input>
			</div>
		)
	}
}