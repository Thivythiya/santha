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
		console.log('quantity',itmQty)
	}

	render(){
		
		let {item,keyVal} = this.props;
		let {itmQty} = this.state;
		
		console.log("item", item);

		return (
				<div className="quality-box" key={keyVal}>
					<div className="ordered-image">
						<img src={item.image} alt="image not available"/>
					</div>
					<div className="ordered-details">
						<div>Order Id:<span>{item.id}</span></div>
						<div>Ordered Item: <span>{item.name}</span></div>
						<div>Qty:
							
								<select onChange={this.itemQuantity}>
									{
										quantity.map((qty,i) => {
											return <option value={qty} key={i}>{qty}</option>
										})
									}
								</select>
							
						</div>
						<div>Price: <span>₹{item.price}</span></div>
					</div>
					<div className="ordered-total"><p>Total: <span>₹{ itmQty * item.price}</span></p></div>
				</div>

			)

	}
}

let Cart = (props) => {
	
	console.log("props", props);



	return (
		<div className="cart-items">
			<div>
				<h2>Cart</h2>
				{
					props.cartItems.map((item,i) => {
						return <CartDetails item={item} key={i}/>
					})
				}
			</div>
		</div>
	)
}


export default Cart;