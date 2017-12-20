import React from 'react';
import './reset';
import './appStyle';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import ProductsPage from './ProductsPage/ProductsPage';

let productsList = [
		{"id":1, name: "Tymtix_Products - Sensairy-1", price: "₹10,000", image: "images/sensairy.jpeg", date: "12/10/2017"},
		{"id":2, name: "Javascript", price: "₹800", image: "images/javascript.jpg", date: "11/07/2017"},
		{"id":3, name: "Sensairy-2", price: "₹1,500", image: "images/maxresdefault.jpg", date: "15/09/2017"},
		{"id":4, name: "Sensairy-3", price: "₹17,500", image: "images/Tyre.png", date: "12/12/2016"},
		{"id":5, name: "Sensairy-4", price: "₹15,400", image: "images/sensairy-1.jpg", date: "19/01/2017"},
		{id:6, name: "Sensairy-5", price: "₹11,500", image: "images/sensairy-tymtix.jpg", date: "19/07/2017"},
		{id:7, name: "Sensairy-6", price: "₹22,999", image: "images/sensairy-purple.jpg", date: "01/08/2017"},
		{id:8, name: "Sensairy-7", price: "₹9,799", image: "images/sensairy2.jpg", date: "10/05/2017"},	
		{id:9, name: "Sensairy-8", price: "₹56,990", image: "images/sensairy3.jpg", date: "13/11/2017"},
		{id:10, name: "Coffee maker", price: "₹3,990", image: "images/coffee-maker.jpeg", date: "01/12/2016"},
		{id:11, name: "Cooling glass", price: "₹990", image: "images/cooling-glass.jpeg", date: "29/11/2017"},
		{id:12, name: "fastrack watch", price: "₹1,999", image: "images/fastrack-watch.jpeg", date: "14/12/2017"},
		{id:13, name: "index powerbank", price: "₹2,999", image: "images/index-powerbank.jpeg", date: "19/01/2017"},
		{id:14, name: "Iron Box", price: "₹1,690", image: "images/ironbox.jpeg", date: "20/01/2017"},
		{id:15, name: "Juicers", price: "₹890", image: "images/juicers.jpeg",date: "22/08/2017"},
		{id:16, name: "Kettles", price: "₹1,790", image: "images/kettles.jpeg",date: "23/11/2016"},
		{id:17, name: "LG TV", price: "₹57,990", image: "images/lg-tv.jpeg", date: "17/11/2016"},
		{id:18, name: "Microwave oven", price: "₹36,990", image: "images/microwave-oven.jpeg", date: "17/12/2017"},
		{id:19, name: "Refrigerator", price: "₹13,999", image: "images/refrigirator.jpeg", date: "13/04/2017"}
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