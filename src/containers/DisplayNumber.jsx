import DisplayNumber from "../components/DisplayNumber"
import {connect} from 'react-redux';

//Redux의 State를 React의 Props로 연결해준다.
function mapStateToProps(state){
	return{
		number:state.number
	}
}
export default connect(mapStateToProps)(DisplayNumber);

/* import React, {Component} from 'react';
import store from '../store';

export default class extends Component{
	state = {number:store.getState().number}
	constructor(props){
		super(props);
		store.subscribe(function(){
			this.setState({number:store.getState().number});
		}.bind(this));
	}
	render(){
		return <DisplayNumber number={this.state.number} unit={this.props.unit}></DisplayNumber>
	}
} 이 만큼의 코드를 react-redux로 변경 */