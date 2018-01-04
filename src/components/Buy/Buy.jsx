import React from 'react';
import './buyStyle.scss';

export default class Buy extends React.Component{
	constructor(){
		super()
	}
	render(){
		return(
			<div>
				<p className='buy-product'>You bought the product successfully.......
					<i className="fa fa-smile-o" aria-hidden="true"></i>
				</p>
			</div>	
		)
	}
}