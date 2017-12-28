import React from 'react';
import SideBar from './SideBar/SideBar';
import ProductsPage from './ProductsPage/ProductsPage';
import './appStyle';

export default class HomePage extends React.Component{
	constructor(){
		super()
	}
	render(){
		let {onCheckedFilter,onCheckedFilterPrice,priceList,category,productsList,handleClick,change} = this.props;
		return(
			<div className="container">
				<SideBar onCheckedFilter={onCheckedFilter} onCheckedFilterPrice={onCheckedFilterPrice} priceList={priceList} category={category}/>

				<ProductsPage  productsList={productsList} handleClick={handleClick} change={change}/>
			</div>
		)
	}
}