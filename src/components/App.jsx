import React from 'react';
import './reset';
import './appStyle';
import Header from './Header/Header';
import HomePage from './HomePage';
import Cart from './CartInfo/Cart';
import Buy from './Buy/Buy';
import Cancel from './Buy/Cancel';
import {Route, Link } from 'react-router-dom';
import appData from "../appData";
import helper from './helper';

class APP extends React.Component{
	constructor(){
		super()
		this.state = {
			changeValue: 1,
			filterVal: '',
			filterValCat: [],
			filterValPrice: [],
			cartItems:[],
			searchItem: '',
			finalProductsList:helper.sortByOption(appData.productsList ,'date')
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
					changeValue: 1,
					filterVal: '',
					filterValPrice: [],
					finalProductsList: helper.sortByOption(appData.productsList ,'date')
				}
			});
  		}else{
  			let {finalProductsList} = this.state;
  			let filterVal = '';
  			//filterVal.push(section)
  			filterVal = section;
  			finalProductsList = appData.productsList.filter(helper.sectionFilter(filterVal))

  			this.setState({
  				filterVal: filterVal,
  				finalProductsList:finalProductsList
  			});
  		}	
  	}
  	change(event){
  		let {changeValue, finalProductsList} = this.state;
  		changeValue = parseInt(event.target.value)
  		console.log('changeValue',changeValue);
  		if(changeValue == 1){
  			finalProductsList = helper.sortByOption(finalProductsList,'date')
  		}else if(changeValue == 2){
  			finalProductsList = helper.sortByPriceLow(finalProductsList,'price')
  		}else{
  			finalProductsList = helper.sortByPriceHigh(finalProductsList,'price')
  		}
		this.setState({
			changeValue: changeValue,
			finalProductsList:finalProductsList
		})

	}
	onCheckedFilter(e){
		let {filterValCat=[],filterVal} = this.state;
		let finalProductsList = appData.productsList;
		console.log("filterValCat",filterValCat);
		if(e.target.checked){
			filterValCat.push(e.target.value);
			if(filterValCat.length > 0){
				finalProductsList = finalProductsList.filter(helper.categoryFilter(filterValCat));
			}
		}else{
			filterValCat.splice(filterValCat.indexOf(e.target.value),1)
			finalProductsList = finalProductsList.filter(helper.sectionFilter(filterVal));
		}
		
		this.setState({
			filterValCat:filterValCat,
			finalProductsList: finalProductsList
		});

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
		let searchItem = e.target.value;
		this.setState((prevState,props) => {
			let {finalProductsList} = prevState;
			finalProductsList = appData.productsList.filter(helper.searchingFor(searchItem));
			return {searchItem: searchItem,finalProductsList:finalProductsList}
		});
	}
	render(){
		let {cartItems,changeValue,filterVal,filterValCat=[], filterValPrice = [],searchItem,products, finalProductsList=[]} = this.state;		
		return (
			<div id="root-app">
				<Header cartItems = {cartItems} onClickChange={this.onClickChange}  handleSearch={this.handleSearch} input={searchItem}/> 
				<Route exact path="/" render={() => finalProductsList.length !== 0 ? <HomePage onCheckedFilter={this.onCheckedFilter.bind(this)} onCheckedFilterPrice = {this.onCheckedFilterPrice.bind(this)} filterVal={filterVal} sectionCategoryList={appData.sectionCategoryList} priceList={appData.pricesList} productsList = {finalProductsList} handleClick = {this.handleClick} change={this.change}/> : <p className='no-item'>No items found!</p>} />	
				<Route path='/cart_details' render={() =>cartItems.length !== 0 ? <Cart cartItems={cartItems}/> : <p className='no-item'>Your cart is empty</p> }/>
				<Route path='/buy' component={Buy}/>
				<Route path='/cancel' component={Cancel}/>
			</div>
		)
	}
}
export default APP;