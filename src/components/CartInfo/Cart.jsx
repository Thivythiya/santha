import React from 'react';
import './cartStyle';

let quantity = [1,2,3,4,5,6,7,8,9,10]

class CartDetails extends React.Component{
	constructor(props){
		super(props);
		this.addQtyDetails = this.addQtyDetails.bind(this);
	}

	addQtyDetails(e){
		let {item,itemQtyDetails} = this.props;
		this.props.addQty(item,e);
	}

	render(){
		let {item,itemQtyDetails} = this.props;
		const getPrice = () => {
			if(itemQtyDetails[item.id]){
				return itemQtyDetails[item.id] * item.price;
			}else{
				return item.price;
			}
		}
		return (
				<tr className='table-col'>
					<td></td>
					<td>{item.id}</td>
					<td className='table-col-name'>{item.name}</td>
					<td>₹{item.price}</td>
					<td>
						<select onChange={this.addQtyDetails}>
							{
								quantity.map((qty,i) => {
									return <option value={qty} key={i}>{qty}</option>
								})
							}
						</select>
					</td>
					<td>₹{getPrice()}</td>
				</tr>
			)

	}
}

class Cart extends React.Component{
	constructor(){
		super()
		this.state = {
			itemQtyDetails : {}
		}
		this.addQty = this.addQty.bind(this);
	}
	addQty(item,e){
		let {itemQtyDetails} = this.state;
		itemQtyDetails[item.id] = parseInt(e.target.value);
		this.setState({itemQtyDetails: itemQtyDetails})
		console.log('itemQtyDetails',itemQtyDetails);
	}
	render(){
		let {cartItems} = this.props;
		let {itemQtyDetails} = this.state;
		console.log("props",this.props);
		const totalPrice = () => {
			let total = 0;
			for(var x in cartItems){
				let id = cartItems[x]['id']
				if(itemQtyDetails[id]){
					total = total + (itemQtyDetails[id] * cartItems[x]['price'])
				}
				else{
					total = total + cartItems[x]['price']
				}
			}
			return total;
		}
		return (
			<div className="cart-items">
				<div>
					<h2>Cart</h2>
					<div className='table-container'>
						<table>
							<thead>
								<tr>
									<th>Sl.No</th>
									<th>Product Id</th>
									<th>Product Name</th>
									<th>Price</th>
									<th>Qty</th>
									<th>Total</th>
								</tr>
							</thead>
							<tbody>
								{
								cartItems.map((item,i) => {
									return <CartDetails item={item} key={i} addQty= {this.addQty} itemQtyDetails={itemQtyDetails}/>
								})
								}
								<tr>
									<td colSpan="5">Grand Total</td>
									<td>₹{totalPrice()}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		)
	}
	
}


export default Cart;