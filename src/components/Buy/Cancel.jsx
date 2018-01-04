import React from 'react';
import './buyStyle.scss';

export default class Cancel extends React.Component{
	constructor(){
		super()
	}
	render(){
		return( 
			<div>
				<p className="cancel-product">You cancelled the order successfully.......
					<i className="fa fa-frown-o" aria-hidden="true"></i>
				</p>
			</div>	
			)
	}
}