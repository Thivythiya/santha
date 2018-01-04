import React from 'react';
import './reset';
import './appStyle';
import Header from './Header/Header';
import HomePage from './HomePage';
import Cart from './CartInfo/Cart';
import Buy from './Buy/Buy';
import Cancel from './Buy/Cancel';
import {Route, Link } from 'react-router-dom';
let productsList = [
		{id:1, name: "Tymtix_Products - Sensairy-1", price: 10000, image: "images/sensairy.jpeg", date: "12 Oct 2017", category: 'sensairy', section: 'Others'},
		{id:2, name: "Javascript", price: 800, image: "images/javascript.jpg", date: "11 Jul 2017", category: 'books',section: 'Others'},
		{id:3, name: "Sensairy-2", price: 1500, image: "images/maxresdefault.jpg", date: "15 Sep 2017", category: 'sensairy',section: 'Others'},
		{id:4, name: "Sensairy-3", price: 17500, image: "images/Tyre.png", date: "12 Dec 2016", category: 'sensairy',section: 'Others'},
		{id:5, name: "Sensairy-4", price: 15400, image: "images/sensairy-1.jpg", date: "19 Jan 2017", category: 'sensairy',section: 'Others'},
		{id:6, name: "Sensairy-5", price: 11500, image: "images/sensairy-tymtix.jpg", date: "19 Jul 2017",category: 'sensairy',section: 'Others'},
		{id:7, name: "Sensairy-purple", price: 22999, image: "images/sensairy-purple.jpg", date: "01 Aug 2017",category: 'sensairy',section: 'Others'},
		{id:8, name: "Sensairy-7", price: 9799, image: "images/sensairy2.jpg", date: "10 May 2017",category: 'sensairy',section: 'Others'},	
		{id:9, name: "Sensairy-8", price: 56990, image: "images/sensairy3.jpg", date: "13 Nov 2017",category: 'sensairy',section: 'Others'},
		{id:10, name: "Coffee maker", price: 3990, image: "images/coffee-maker.jpeg", date: "01 Dec 2016", category: 'home appliances',section: 'Others'},
		{id:11, name: "Cooling glass", price: 990, image: "images/cooling-glass.jpeg", date: "29 Nov 2017", category: 'home appliances',section: 'Others'},
		{id:12, name: "fastrack watch", price: 1999, image: "images/fastrack-watch.jpeg", date: "14 Dec 2017", category: 'home appliances',section: 'Others'},
		{id:13, name: "index powerbank", price: 2999, image: "images/index-powerbank.jpeg", date: "19 Jan 2017", category: 'home appliances',section: 'Others'},
		{id:14, name: "Iron Box", price: 1690, image: "images/ironbox.jpeg", date: "20 Feb 2017", category: 'home appliances',section: 'Others'},
		{id:15, name: "Juicers", price: 890, image: "images/juicers.jpeg",date: "22 Aug 2017", category: 'home appliances',section: 'Others'},
		{id:16, name: "Kettles", price: 1790, image: "images/kettles.jpeg",date: "23 Nov 2016", category: 'home appliances',section: 'Others'},
		{id:17, name: "LG TV", price: 57990, image: "images/lg-tv.jpeg", date: "17 Nov 2016", category: 'home appliances',section: 'Others'},
		{id:18, name: "Microwave oven", price: 36990, image: "images/microwave-oven.jpeg", date: "17 Mar 2017", category: 'home appliances',section: 'Others'},
		{id:19, name: "Refrigerator", price: 13999, image: "images/refrigirator.jpeg", date: "13 Apr 2017",category: 'home appliances',section: 'Others'},
		{id:20, name: "Django", price: 400, image: "images/django.jpeg", date: "12 Mar 2015", category: 'books',section: 'Others'},
		{id:21, name: "Wordpress plugin", price: 700, image: "images/wordpress-plug-in.jpeg", date: "8 Jun 2015",category: 'books',section: 'Others' },
		{id:22, name: "php", price: 200, image: "images/php.jpg", date: "09 Feb 2017",category: 'books',section: 'Others' },
		{id:23, name: "CSS", price: 900, image: "images/css.jpg", date: "07 Apr 2016",category: 'books',section: 'Others' },
		{id:24, name: "C,C++,Java", price: 800, image: "images/cplus-java.jpg", date: "10 Dec 2015",category: 'books',section: 'Others' },
		{id:25, name: "C++", price: 380, image: "images/cplus.jpg", date: "01 Feb 2016",category: 'books',section: 'Others' },
		{id:26, name: "Mathematics", price: 399, image: "images/mathematics.jpg", date: "03 Jun 2016",category: 'books',section: 'Others' },
		{id:27, name: "Responsive Web design", price: 483, image: "images/responsive-webdesign.png", date: "08 Jan 2016",category: 'books', section: 'Others' },
		{id:28, name: "Web Technology", price: 690, image: "images/web-technologies.jpeg", date: "14 Nov 2016",category: 'books',section: 'Others' },
		{id:29, name: "T-shirt", price: 300, image: "images/Men-1.jpg", date: "19 Oct 2017",category: 'T-shirt', section: 'Men' },
		{id:30, name: "White casual T-shirt", price: 1200, image: "images/Men-2.jpg", date: "01 Jan 2018", category: 'T-shirt', section: 'Men' },
		{id:31, name: "Campus sutra Jacket", price: 1699, image: "images/Men-3.jpg", date: "01 May 2016", category: 'jacket', section: 'Men' },
		{id:32, name: "Jacket", price: 2500, image: "images/Men-4.jpg", date: "05 Jul 2015", category: 'jacket', section: 'Men'},
		{id:33, name: "Printed slim fit formal shirt", price: 1079, image: "images/formal-1.jpg", date: "29 Nov 2015", category: 'formal shirt', section: 'Men'},
		{id:34, name: "Printed slim fit formal shirt", price: 696, image: "images/formal-2.jpg", date: "15 Jun 2017", category: 'formal shirt', section: 'Men'},
		{id:35, name: "Regular fit-INVICTUS", price: 1399, image: "images/formal-3.jpg", date: "13 Sep 2017", category: 'formal shirt', section: 'Men'},
		{id:36, name: "Slim fit-INVICTUS", price: 849, image: "images/formal-4.jpg", date: "18 Oct 2017", category: 'formal shirt', section: 'Men'},
		{id:37, name: "Roadster", price: 839, image: "images/casual-1.jpg", date: "17 Mar 2016", category: 'casual shirt', section: 'Men'},
		{id:38, name: "Anti microbial-Ether", price: 879, image: "images/casual-2.jpg", date: "05 Jul 2016", category: 'casual shirt', section: 'Men'},
		{id:39, name: "Chiffon saree", price: 1500, image: "images/Women-1.jpg", date: "29 Jun 2016",category: 'saree', section: 'Women'},
		{id:40, name: "Blue with sandal saree", price: 600, image: "images/Women-2.jpg", date: "31 Jul 2015",category: 'saree', section: 'Women'},
		{id:41, name: "Pink silk saree", price: 500, image: "images/Women-3.jpg", date: "25 Jan 2015", category: 'saree', section: 'Women'},
		{id:42, name: "Lycra saree", price: 4500, image: "images/Women-4.jpg", date: "04 Oct 2017",category: 'saree', section: 'Women'},
		{id:43, name: "La firangi", price: 799, image: "images/kurta-1.jpg", date: "12 Aug 2015",category: 'kurta', section: 'Women'},
		{id:44, name: "Shree", price: 584, image: "images/kurta-2.jpg", date: "06 Sep 2016",category: 'kurta', section: 'Women'},
		{id:45, name: "Lux Lyra", price: 479, image: "images/leggins-1.jpg", date: "19 Apr 2016",category: 'leggins', section: 'Women'},
		{id:46, name: "Dollar Missy", price: 779, image: "images/leggins-2.jpg", date: "16 May 2017",category: 'leggins', section: 'Women'},
		{id:47, name: "Moda Rapido-Printed top", price: 479, image: "images/tops-1.jpg", date: "08 Nov 2017",category: 'tops', section: 'Women'},
		{id:48, name: "Embroided top", price: 899, image: "images/tops-2.jpg", date: "28 Feb 2017",category: 'tops', section: 'Women'},
		{id:49, name: "Mini Klub", price: 500, image: "images/mini-klub.jpg", date: "28 Jun 2017",category: 'dress', section: 'Kids'},
		{id:50, name: "Beebay", price: 399, image: "images/beebay.jpg", date: "29 Mar 2017", category: 'dress', section: 'Kids'},
		{id:51, name: "Girls printed Yk", price: 1195, image: "images/girls-printed-yk.jpg", date: "02 Jan 2018",category: 'dress', section: 'Kids'},
		{id:52, name: "Peppermint", price: 345, image: "images/peppermint.jpg", date: "16 Aug 2016",category: 'dress', section: 'Kids'},
		{id:53, name: "Mothercare clothes", price: 726, image: "images/mothercare-clothes.jpg", date: "20 Mar 2016", category: 'dress', section: 'Kids'},
		{id:54, name: "Skybags", price: 949, image: "images/bag-1.jpg", date: "17 Nov 2016", category: 'bag', section: 'Kids'},
		{id:55, name: "Anekaant", price: 1199, image: "images/bag-2.jpg", date: "17 Feb 2017", category: 'bag', section: 'Kids'},
		{id:56, name: "Kids Analogue watch", price: 402, image: "images/watch-1.jpg", date: "12 Mar 2016", category: 'watch', section: 'Kids'},
		{id:57, name: "Girls Digital Watch", price: 736, image: "images/watch-2.jpg", date: "01 Apr 2017", category: 'watch', section: 'Kids'},
		{id:58, name: "Puma", price: 1224, image: "images/shoes-1.jpg", date: "23 Jan 2016", category: 'shoe', section: 'Kids'},
		{id:59, name: "Adidas Originals", price: 2999, image: "images/shoes-2.jpg", date: "01 Aug 2017", category: 'shoe', section: 'Kids'}
	];

let pricesList = [
	{
		range_num:"1",
		min:100,
		max:1000,
	},{
		range_num:"2",
		min:1000,
		max:5000,
	},{
		range_num:"3",
		min:5000,
		max:10000,
	},
	{
		range_num:"4",
		min:10000,
		max:20000,
	}
];
let sectionCategoryList = {
	Men:['formal shirt', 'casual shirt', 'T-shirt', 'jacket'],
	Women:['saree','kurta','leggins','tops'],
	Kids:['bag','watch','dress','shoe'],
	Others:['sensairy','books','home appliances'],
	categoryList: ['sensairy','books','home appliances', 'formal shirt', 'casual shirt', 'T-shirt', 'jacket','saree','kurta','leggins','tops','bag','watch','dress','shoe']
}

class APP extends React.Component{
	constructor(){
		super()
		this.state = {
			changeValue: 'new',
			filterVal: [],
			filterValCat: [],
			filterValPrice: [],
			cartItems:[],
			searchItem: '',
			products: productsList
		}
		this.handleClick = this.handleClick.bind(this);
		this.change = this.change.bind(this);
		this.onClickChange = this.onClickChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}
	handleClick(product) {	
		let {cartItems = []} = this.state;
		console.log('product',product);
		if(cartItems.length == 0){
			cartItems.push(product);
			this.setState({cartItems:cartItems})	
		}else{
			let isExist = false;
			for(var y in cartItems){
				isExist = (product.id === cartItems[y].id) ? true : isExist;
			}
			(!isExist) ? (cartItems.push(product),this.setState({cartItems: cartItems})) : window.alert('You already added this item to the cart');
		}
  	}
  	onClickChange(section){
  		console.log("section", section);
  		if(!section){
  			this.setState((prev,props) => {
	  			return {
					count: 0,
					value: 'new',
					filterVal: [],
					filterValPrice: [],
				}
			});
  		}else{
  			let filterVal = [];
  			filterVal.push(section)
  			this.setState({filterVal: filterVal});
  		}	
  	}
  	change(event){
		this.setState({changeValue: event.target.value})
	}
	onCheckedFilter(e){
		let {filterValCat=[]} = this.state;
		console.log("filterValCat",filterValCat);
		if(e.target.checked){
			filterValCat.push(e.target.value);	
		}else{
			filterValCat.splice(filterValCat.indexOf(e.target.value),1)
		}
		this.setState({filterValCat:filterValCat});
	}
	onCheckedFilterPrice(e){
		let {filterValPrice = []} = this.state;
		if(e.target.checked){
			filterValPrice.push(e.target.value);
		}else{
			filterValPrice.splice(filterValPrice.indexOf(e.target.value),1)
		}
		this.setState({filterValPrice:filterValPrice})  
	}
	handleSearch(e){
		this.setState({searchItem: e.target.value});
	}
	render(){
		let {cartItems,changeValue,filterVal,filterValCat=[], filterValPrice = [],searchItem,products} = this.state;
		console.log('filterVl',filterVal)
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
			const priceA = parseFloat(a.price);;
			const priceB = parseFloat(b.price);
			let comparison = 0;
			if (priceA > priceB) {
			    comparison = 1;
			} else if (priceA < priceB) {
			    comparison = -1;
			}
			  return comparison; 
		}
		function highToLow(a,b){
			const priceA = parseFloat(a.price);;
			const priceB = parseFloat(b.price);
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
		const otherCatFil= (filterVal) => {
			return function(x){
				return x.section.includes(filterVal);
			}
		}
		let finalProductsList = productsList.filter(otherCatFil(filterVal));

		
		finalProductsList = (filterVal.length == 0) ? productsList : finalProductsList;		
		let isWithinRange = (price) => {			
			console.log("price", price);
			//filterValPrice.indexOf(item['range_num']) >= 0
			let isInRange = false;
			pricesList.map((item) => {
				console.log("item", item['min'], "max", item['max']);
				if(parseInt(price) >= item['min'] && parseInt(price) <= item['max'] && filterValPrice.includes(item['range_num'])){
					isInRange = true;
				}
			});
			return isInRange;
		};
		if(filterValPrice.length > 0){
			finalProductsList = finalProductsList.filter(item => {
				return isWithinRange(item['price'])
			});
		}
		const searchingFor= (seachItem) => {
			return function(x){
				return x.name.toLowerCase().includes(searchItem.toLowerCase()) || x.id.toString().includes(searchItem) || x.category.toLowerCase().includes(searchItem.toLowerCase()) || !searchItem;
			}
		}
		finalProductsList = finalProductsList.filter(searchingFor(searchItem));
		if(filterValCat.length > 0){
			finalProductsList = finalProductsList.filter(item => {
				return filterValCat.indexOf(item['category']) >= 0;
			})
		}
		return (
			<div id="root-app">
					<Header cartItems = {cartItems} onClickChange={this.onClickChange}  handleSearch={this.handleSearch} input={searchItem}/> 

					<Route exact path="/" render={() => finalProductsList.length !== 0 ? <HomePage onCheckedFilter={this.onCheckedFilter.bind(this)} onCheckedFilterPrice = {this.onCheckedFilterPrice.bind(this)} filterVal={filterVal} sectionCategoryList={sectionCategoryList} priceList={pricesList} productsList = {finalProductsList} handleClick = {this.handleClick} change={this.change}/> : <p className='no-item'>No items found!</p>} />	

					<Route path='/cart_details' render={() =>cartItems.length !== 0 ? <Cart cartItems={cartItems}/> : <p className='no-item'>Your cart is empty</p> }/>

					<Route path='/buy' component={Buy}/>
					<Route path='/cancel' component={Cancel}/>
			</div>
		)
	}
}
export default APP;