import React from 'react';
import './santhaStyle';

let productsList = [
	{id:2, name: "Mobile - Moto E4 plus", price: "₹10,000"},
	{id:3, name: "Cloth - Jeans, T-shirt", price: "₹800"},
	{id:4, name: "Watch - Titan, fastrack", price: "₹1,500"},
	{id:5, name: "Television - LG 80cm (32) HD LED", price: "₹17,500"},
	{id:6, name: "Refrigerator - Samsung 212 L Direct Cool Single Door Refrigerator", price: "₹15,400"},
	{id:7, name: "Tablet - Honor MediaPad T3 16 GB 8 inch with Wi-Fi+4G ", price: "₹11,500"},
	{id:8, name: "Air conditioner - Mitashi 1 Ton 5 Star Split AC ", price: "₹22,999"},
	{id:9, name: "Microwave Oven - Morphy Richards 25 L Convection", price: "₹9,799"},
	{id:10, name: "Laptop - Apple MacBook Air Core i5 5th Gen", price: "₹56,990"}
	];
class Products extends React.Component{
	constructor(){
		super()
	}
	render(){
		return(
			<div className = "product_style">
				{
					productsList.map((item, i) => {
						return <div className="each_product" key={i}>
						<ul key={i}>
							<li>{item.name}</li>
							<li>{item.price}</li>
						</ul>
						</div>
					})			
			}
		</div>	
		)		
	}
}
class App extends React.Component{
	constructor(){
		super()
		this.state = {
			id:1,
			name: "Book - Javascript: John Doe",
			price: "₹300"
			}
	}
	render(){
		return 	<div>
					<h2>{this.props.appName}</h2>
					<div className = "each_product">
						<ul>{this.state.category}
							<li>{}</li>
							<li>{this.state.name}</li>
							<li>{this.state.price}</li>
						</ul>
					</div>	
					<Products />
				</div>
	}
}
export default App;