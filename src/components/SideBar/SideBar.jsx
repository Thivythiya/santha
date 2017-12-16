import React, {Component} from 'react';
import './SideBarStyle';
export default class SideBar extends Component{
	constructor(){
		super()
	}
	render(){
		return <div className="sidebar-div">
			<p>This is the side bar</p>
		</div>
	}
}