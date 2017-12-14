import React from 'react'; 
let books ={
	
}
class Santha extends React.Component{
	constructor(){
		super()
		this.state = {
			bookName: "Javascript",
			author: "John Doe",
			price: 30
			}
	}
	render(){
		return 	<div>
					<h2>{this.props.appName}</h2>
					<ul>{this.state.category}
						<li>{this.state.bookName}</li>
						<li>{this.state.author}</li>
						<li>{this.state.price}</li>
					</ul>
				</div>
	}
}
export default Santha;