import React from 'react';
import './reset';
import './appStyle';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import ProductsPage from './ProductsPage/ProductsPage';

let productsList = [
		{"id":1, name: "Tymtix_Products - Sensairy-1", price: "₹10,000", image: "images/sensairy.jpeg"},
		{"id":2, name: "Javascript", price: "₹800", image: "images/javascript.jpg"},
		{"id":3, name: "Tymtix_Products - Sensairy-2", price: "₹1,500", image: "images/maxresdefault.jpg"},
		{"id":4, name: "Tymtix_Products - Sensairy-3", price: "₹17,500", image: "images/Tyre.png"},
		{"id":5, name: "Tymtix_Products - Sensairy-4", price: "₹15,400", image: "images/sensairy-1.jpg"},
		{id:6, name: "Tymtix_Products - Sensairy-5", price: "₹11,500", image: "images/sensairy-tymtix.jpg"},
		{id:7, name: "Tymtix_Products - Sensairy-6", price: "₹22,999", image: "images/sensairy.jpeg"},
		{id:8, name: "Tymtix_Products - Sensairy-7", price: "₹9,799", image: "images/sensairy2.jpg"},	
		{id:9, name: "Tymtix_Products - Sensairy-8", price: "₹56,990", image: "images/sensairy3.jpg"}
	];

let count = 1;

class APP extends React.Component{
	constructor(){
		super()
		this.state = {
			count: 0
		}
		console.log("constructor count", count++);
		this.handleClick = this.handleClick.bind(this);
	}

	componentWillMount(){

		console.log("CPWM count", count++);
	}

	componentDidMount(){
		console.log("CPDM count", count++);
	}

	handleClick() {
	    this.setState(prevState => ({
	      count: prevState.count + 1
	    }));
  	}


  	componentWillReceiveProps(){
  		console.log("on revicve props - APP");
  	}

	shouldComponentUpdate(){
		console.log("Should CMUP - APP");
		return true;
	}

	componentWillUpdate(){
		console.log("CMWUP - APP");
	}

	componentDidUpdate(){
		console.log("CMDUP - APP");
	}

	render(){
		console.log("render count", count++);
		let countValue = this.state.count;
		return (	
		<div id="root-app">
			<Header countValue = {countValue}/>
		
			<div className="container">
				<SideBar />
				<ProductsPage productsList = {productsList} handleClick = {this.handleClick}/>

			</div>
			

			
		</div>
	)
	}
}
export default APP;