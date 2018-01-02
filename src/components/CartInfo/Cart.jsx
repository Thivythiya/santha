import React from 'react';
import './cartStyle';

let quantity = [1,2,3,4,5,6,7,8,9,10]

class CartDetails extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			itmQty: 1
		}
		this.itemQuantity = this.itemQuantity.bind(this);
	}

	itemQuantity(e){
		let {itmQty} = this.state;
		this.setState({itmQty: e.target.value});
	}

	render(){
		
		let {item,keyVal} = this.props;
		let {itmQty} = this.state;	
		console.log("item", item);
		return (
				<tr className='table-col'>
					<td>{item.index}</td>
					<td>{item.id}</td>
					<td className='table-col-name'>{item.name}</td>
					<td>
						<select onChange={this.itemQuantity}>
							{
								quantity.map((qty,i) => {
									return <option value={qty} key={i}>{qty}</option>
								})
							}
						</select>
					</td>
					<td>₹{itmQty*item.price}</td>
				</tr>
			)

	}
}

let Cart = (props) => {
	console.log("props", props);
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
								<th>Qty</th>
								<th>Price</th>
							</tr>
						</thead>
						<tbody>
							{
							props.cartItems.map((item,i) => {
								return <CartDetails item={item} key={i}/>
							})
							}
							<tr>
								<td colSpan="4">Total</td>
								<td></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}


export default Cart;