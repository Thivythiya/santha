import React from 'react';
import './cartStyle';
class Cart extends React.Component{
	constructor(){
		super()
		this.state = {
			qty: 1
		}
	}
	quantity(event){
	let {qty} = this.state;
		this.setState({qty: event.target.value})
		console.log("qty", qty);
	}
	render(){
		let {cartItems} = this.props;
		let {qty} = this.state;
		console.log('quantity',this.state.qty);
		return (
		<div className="cart-items">
			<div>
				<h2>Cart</h2>
				<div>
					{
					cartItems.map((item, i) =>
						<div className="quality-box" key={i}>
							<div className="ordered-image">
								<img src={item.image} alt="image not available"/>
							</div>
							<div className="ordered-details">
								<div>Order Id:<span>{item.id}</span></div>
								<div>Ordered Item: <span>{item.name}</span></div>
								<div>Qty: <span><input type="number" onChange={this.quantity.bind(this)}/></span></div>
								<div>Price: <span>₹{item.price}</span></div>
							</div>
							<div className="ordered-total"><p>Total: <span>₹{qty * item.price}</span></p></div>
						</div>
					)
					}
				</div>
			</div>
		</div>	
		)
	}
}
export default Cart;