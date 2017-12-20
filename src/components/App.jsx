import React from 'react';
import './reset';
import './appStyle';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import ProductsPage from './ProductsPage/ProductsPage';

let productsList = [
		{id:1, name: "Tymtix_Products - Sensairy-1", price: "₹10,000", image: "images/sensairy.jpeg", date: "12 Oct 2017"},
		{id:2, name: "Javascript", price: "₹800", image: "images/javascript.jpg", date: "11 Jul 2017"},
		{id:3, name: "Sensairy-2", price: "₹1,500", image: "images/maxresdefault.jpg", date: "15 Sep 2017"},
		{id:4, name: "Sensairy-3", price: "₹17,500", image: "images/Tyre.png", date: "12 Dec 2016"},
		{id:5, name: "Sensairy-4", price: "₹15,400", image: "images/sensairy-1.jpg", date: "19 Jan 2017"},
		{id:6, name: "Sensairy-5", price: "₹11,500", image: "images/sensairy-tymtix.jpg", date: "19 Jul 2017"},
		{id:7, name: "Sensairy-purple", price: "₹22,999", image: "images/sensairy-purple.jpg", date: "01 Aug 2017"},
		{id:8, name: "Sensairy-7", price: "₹9,799", image: "images/sensairy2.jpg", date: "10 May 2017"},	
		{id:9, name: "Sensairy-8", price: "₹56,990", image: "images/sensairy3.jpg", date: "13 Nov 2017"},
		{id:10, name: "Coffee maker", price: "₹3,990", image: "images/coffee-maker.jpeg", date: "01 Dec 2016"},
		{id:11, name: "Cooling glass", price: "₹990", image: "images/cooling-glass.jpeg", date: "29 Nov 2017"},
		{id:12, name: "fastrack watch", price: "₹1,999", image: "images/fastrack-watch.jpeg", date: "14 Dec 2017"},
		{id:13, name: "index powerbank", price: "₹2,999", image: "images/index-powerbank.jpeg", date: "19 Jan 2017"},
		{id:14, name: "Iron Box", price: "₹1,690", image: "images/ironbox.jpeg", date: "20 Feb 2017"},
		{id:15, name: "Juicers", price: "₹890", image: "images/juicers.jpeg",date: "22 Aug 2017"},
		{id:16, name: "Kettles", price: "₹1,790", image: "images/kettles.jpeg",date: "23 Nov 2016"},
		{id:17, name: "LG TV", price: "₹57,990", image: "images/lg-tv.jpeg", date: "17 Nov 2016"},
		{id:18, name: "Microwave oven", price: "₹36,990", image: "images/microwave-oven.jpeg", date: "17 Mar 2017"},
		{id:19, name: "Refrigerator", price: "₹13,999", image: "images/refrigirator.jpeg", date: "13 Apr 2017"}
	];

let count = 1;

class APP extends React.Component{
	constructor(){
		super()
		this.state = {
			count: 0,
			value: 'new'
		}
		console.log("constructor count", count++);
		this.handleClick = this.handleClick.bind(this);
		this.change = this.change.bind(this);
	}
	handleClick() {
	    this.setState(prevState => ({
	      count: prevState.count + 1
	    }));
  	}
  	change(event){
		this.setState({value: event.target.value})
	}  	
	render(){
		let countValue = this.state.count;
		let changeValue = this.state.value;
		console.log("changeValue",changeValue)
		function compareDesc(a,b){
			const dateA = new Date(a.date);
			const dateB = new Date(b.date);
			let comparison = 0;
			if (dateA > dateB) {
			    comparison = 1;
			} else if (dateA < dateB) {
			    comparison = -1;
			}
			  return comparison * -1; 
		}

		function lowToHigh(a,b){
			const priceA = parseFloat(a.price.replace(/[^\d.]/g, ''));;
			const priceB = parseFloat(b.price.replace(/[^\d.]/g, ''));
			let comparison = 0;
			if (priceA > priceB) {
			    comparison = 1;
			} else if (priceA < priceB) {
			    comparison = -1;
			}
			  return comparison; 
		}

		function highToLow(a,b){
			const priceA = parseFloat(a.price.replace(/[^\d.]/g, ''));;
			const priceB = parseFloat(b.price.replace(/[^\d.]/g, ''));
			let comparison = 0;
			if (priceA > priceB) {
			    comparison = 1;
			} else if (priceA < priceB) {
			    comparison = -1;
			}
			  return comparison * -1; 
		}
		if(changeValue == 'new'){
			productsList.sort(compareDesc);
			console.log("Array after sorting by date",productsList);
		}else if(changeValue == "low to high"){
			productsList.sort(lowToHigh);
			console.log("Low to high",productsList);
		}else{
			productsList.sort(highToLow);
			console.log("High to low",productsList);
		}
		return (	
		<div id="root-app">
			<Header countValue = {countValue}/>
		
			<div className="container">
				<SideBar />
				<ProductsPage productsList = {productsList} handleClick = {this.handleClick} change={this.change}/>

			</div>
			

			
		</div>
	)
	}
}
export default APP;