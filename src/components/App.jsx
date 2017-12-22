import React from 'react';
import './reset';
import './appStyle';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import ProductsPage from './ProductsPage/ProductsPage';

let productsList = [
		{id:1, name: "Tymtix_Products - Sensairy-1", price: "₹10,000", image: "images/sensairy.jpeg", date: "12 Oct 2017", category: 'sensairy'},
		{id:2, name: "Javascript", price: "₹800", image: "images/javascript.jpg", date: "11 Jul 2017", category: 'books'},
		{id:3, name: "Sensairy-2", price: "₹1,500", image: "images/maxresdefault.jpg", date: "15 Sep 2017", category: 'sensairy'},
		{id:4, name: "Sensairy-3", price: "₹17,500", image: "images/Tyre.png", date: "12 Dec 2016", category: 'sensairy'},
		{id:5, name: "Sensairy-4", price: "₹15,400", image: "images/sensairy-1.jpg", date: "19 Jan 2017", category: 'sensairy'},
		{id:6, name: "Sensairy-5", price: "₹11,500", image: "images/sensairy-tymtix.jpg", date: "19 Jul 2017",category: 'sensairy'},
		{id:7, name: "Sensairy-purple", price: "₹22,999", image: "images/sensairy-purple.jpg", date: "01 Aug 2017",category: 'sensairy'},
		{id:8, name: "Sensairy-7", price: "₹9,799", image: "images/sensairy2.jpg", date: "10 May 2017",category: 'sensairy'},	
		{id:9, name: "Sensairy-8", price: "₹56,990", image: "images/sensairy3.jpg", date: "13 Nov 2017",category: 'sensairy'},
		{id:10, name: "Coffee maker", price: "₹3,990", image: "images/coffee-maker.jpeg", date: "01 Dec 2016", category: 'home appliances'},
		{id:11, name: "Cooling glass", price: "₹990", image: "images/cooling-glass.jpeg", date: "29 Nov 2017", category: 'home appliances'},
		{id:12, name: "fastrack watch", price: "₹1,999", image: "images/fastrack-watch.jpeg", date: "14 Dec 2017", category: 'home appliances'},
		{id:13, name: "index powerbank", price: "₹2,999", image: "images/index-powerbank.jpeg", date: "19 Jan 2017", category: 'home appliances'},
		{id:14, name: "Iron Box", price: "₹1,690", image: "images/ironbox.jpeg", date: "20 Feb 2017", category: 'home appliances'},
		{id:15, name: "Juicers", price: "₹890", image: "images/juicers.jpeg",date: "22 Aug 2017", category: 'home appliances'},
		{id:16, name: "Kettles", price: "₹1,790", image: "images/kettles.jpeg",date: "23 Nov 2016", category: 'home appliances'},
		{id:17, name: "LG TV", price: "₹57,990", image: "images/lg-tv.jpeg", date: "17 Nov 2016", category: 'home appliances'},
		{id:18, name: "Microwave oven", price: "₹36,990", image: "images/microwave-oven.jpeg", date: "17 Mar 2017", category: 'home appliances'},
		{id:19, name: "Refrigerator", price: "₹13,999", image: "images/refrigirator.jpeg", date: "13 Apr 2017",category: 'home appliances'},
		{id:20, name: "Django", price: "₹400", image: "images/django.jpeg", date: "12 Mar 2015", category: 'books'},
		{id:21, name: "Wordpress plugin", price: "₹700", image: "images/wordpress-plug-in.jpeg", date: "8 Jun 2015",category: 'books' },
		{id:22, name: "php", price: "₹200", image: "images/php.jpg", date: "09 Feb 2017",category: 'books' },
		{id:23, name: "CSS", price: "₹900", image: "images/css.jpg", date: "07 Apr 2016",category: 'books' },
		{id:24, name: "C,C++,Java", price: "₹800", image: "images/cplus-java.jpg", date: "10 Dec 2015",category: 'books' },
		{id:25, name: "C++", price: "₹380", image: "images/cplus.jpg", date: "01 Feb 2016",category: 'books' },
		{id:26, name: "Mathematics", price: "₹399", image: "images/mathematics.jpg", date: "03 Jun 2016",category: 'books' },
		{id:27, name: "Responsive Web design", price: "₹483", image: "images/responsive-webdesign.png", date: "08 Jan 2016",category: 'books' },
		{id:28, name: "Web Technology", price: "₹690", image: "images/web-technologies.jpeg", date: "14 Nov 2016",category: 'books' }
	];

class APP extends React.Component{
	constructor(){
		super()
		this.state = {
			count: 0,
			value: 'new',
			filterVal: null,
			isChecked: null,
			filterValPrice: null,
			isCheckedPrice: null,
		}
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
	onCheckedFilter(e){
		this.setState({filterVal: e.target.value,isChecked: e.target.checked})
		console.log("event triggered",e.target.value, e.target.checked);  
	}
	onCheckedFilterPrice(e){
		this.setState({filterValPrice: e.target.value,isCheckedPrice: e.target.checked})
		console.log("event triggered",e.target.value, e.target.checked);  
	}
	render(){
		let countValue = this.state.count;
		/*Sort*/
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

		/*Filter by categories*/

		let filterValue = this.state.filterVal;
		let check = this.state.isChecked;
		console.log(filterValue);
		console.log(check);
		
		function sensairyCategory(item){
			return item.category === 'sensairy';
		}
		function homeCategory(item){
			return item.category === 'home appliances';
		}
		function bookCategory(item){
			return item.category === 'books';
		}
		let category1 = productsList.filter(sensairyCategory);
			console.log('sensairy',category1);
		let category2 = productsList.filter(homeCategory);
			console.log('Home appliances',category2);
		let category3 = productsList.filter(bookCategory);
			console.log('Books',category3);	
	
		/*Filter by price*/

		let filterValuePrice = this.state.filterValPrice;
		let checkPrice = this.state.isCheckedPrice;
		

		function lessthan1000(rupees){
			let productPrice = rupees.price.replace(/[^\d.]/g, '')
			return productPrice>=100 && productPrice<=1000;
		}
		function btwn1000to5000(rupees){
			let productPrice = rupees.price.replace(/[^\d.]/g, '')
			return productPrice>1000 && productPrice<=5000;
		}
		function btwn5000to10000(rupees){
			let productPrice = rupees.price.replace(/[^\d.]/g, '')
			return productPrice>5000 && productPrice<=10000;
		}
		function btwn10000to20000(rupees){
			let productPrice = rupees.price.replace(/[^\d.]/g, '')
			return productPrice>10000 && productPrice<=20000;
		}
		function above20000(rupees){
			let productPrice = rupees.price.replace(/[^\d.]/g, '')
			return productPrice>20000;
		}	
		let result= productsList.filter(lessthan1000);
		console.log('less than 1000',result);
		let result1 = productsList.filter(btwn1000to5000);
		console.log('Between 1000 to 5000',result1);
		let result2 = productsList.filter(btwn5000to10000);
		console.log('Between 5000 to 10000',result2);
		let result3 = productsList.filter(btwn10000to20000);
		console.log('Between 10000 to 20000',result3);
		let result4 = productsList.filter(above20000);
		console.log('Above 20000',result4);
		return (	
		<div id="root-app">
			<Header countValue = {countValue}/>
			<div className="container">
				<SideBar onCheckedFilter={this.onCheckedFilter.bind(this)} onCheckedFilterPrice = {this.onCheckedFilterPrice.bind(this)}/>
				 	{(() => {
					 	switch (this.state.filterVal) {
				          case "sensairy":   
				          	return  <ProductsPage productsList = {category1} handleClick = 	{this.handleClick} change={this.change} />;
				          case "home appliances": 
				          	return  <ProductsPage productsList = {category2} handleClick = {this.handleClick} change={this.change} />;
				          case "books": 
				          	return <ProductsPage productsList = {category3} handleClick = {this.handleClick} change={this.change} />;
				          default:      
				          	return <ProductsPage productsList = {productsList} handleClick = {this.handleClick} change={this.change} />;
	       				}
				 	})()}

				 	
      			
			</div>	
		</div>
	)
	}
}
export default APP;