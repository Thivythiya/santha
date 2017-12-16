import React from 'react';
import './reset';
import './appStyle';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import ProductsPage from './ProductsPage/ProductsPage';

let productsList = [
		{"id":1, name: "Tymtix_Products - Sensairy", price: "₹10,000", image: "images/sensairy.jpeg"},
		{"id":2, name: "Cloth - Jeans, T-shirt", price: "₹800", image: "images/javascript.jpg"},
		{"id":3, name: "Watch - Titan, fastrack", price: "₹1,500", image: "images/javascript.jpg"},
		{"id":4, name: "Television - LG 80cm (32) HD LED", price: "₹17,500", image: "images/javascript.jpg"},
		{"id":5, name: "Refrigerator - Samsung 212 L Direct Cool Single Door Refrigerator", price: "₹15,400", image: "images/javascript.jpg"},
		{id:6, name: "Tablet - Honor MediaPad T3 16 GB 8 inch with Wi-Fi+4G ", price: "₹11,500", image: "images/javascript.jpg"},
		{id:7, name: "Air conditioner - Mitashi 1 Ton 5 Star Split AC ", price: "₹22,999", image: "images/javascript.jpg"},
		{id:8, name: "Microwave Oven - Morphy Richards 25 L Convection", price: "₹9,799", image: "images/javascript.jpg"},	
		{id:9, name: "Laptop - Apple MacBook Air Core i5 5th Gen", price: "₹56,990", image: "images"}
	];



let APP = (props) => {
	return (
		<div>
			<h2>{props.appname}</h2>
			<Header />
			<SideBar />
			<ProductsPage productsList = {productsList}/>
		</div>
	)
}
export default APP;