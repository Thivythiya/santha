import React, {Component} from 'react';
import './SideBarStyle';



export default class SideBar extends Component{
	
	constructor(){
		super()
	}

	render(){
		let {onCheckedFilter,onCheckedFilterPrice,priceList,filterVal, sectionCategoryList} = this.props;
		console.log('filterVAl',filterVal,'sectionCategoryList',sectionCategoryList['Men']);
		return (<div className="sidebar-div">
					<div>
						<h4>Categories</h4>
						<ul> 
						{(() => {
					        if(filterVal.length==0) {
					            return sectionCategoryList['categoryList'].map((brand,i) => {
					     			return <SectionSideBar brand={brand} key={i} onCheckedFilter={onCheckedFilter}/>
					     		});
					        }if(filterVal=='Men'){
					        	return sectionCategoryList['Men'].map((brand,i) =>{
					     			return <SectionSideBar brand={brand} key={i} onCheckedFilter={onCheckedFilter}/>
					        	});
					        }if(filterVal=='Women'){
					        	return sectionCategoryList['Women'].map((brand,i) =>{
					     			return <SectionSideBar brand={brand} key={i} onCheckedFilter={onCheckedFilter}/>
					        	});
					        }if(filterVal=='Kids'){
					        	return sectionCategoryList['Kids'].map((brand,i) =>{
					     			return <SectionSideBar brand={brand} key={i} onCheckedFilter={onCheckedFilter}/>
					        	});
					        }else{
					        	return sectionCategoryList['Others'].map((brand,i) =>{
					     			return <SectionSideBar brand={brand} key={i} onCheckedFilter={onCheckedFilter}/>
					        	});
					        }
					        
					      })()}
								
						</ul>
					</div>
					<div>
						<h4>Price</h4>
						<ul>
							{
								priceList.map((price,i) => {
									return <li key={i}>
									<label className="check-container">
										<input 
											onChange = {onCheckedFilterPrice} 
											type="checkbox" 
											value = {price.range_num}
											/>
											<span className="checking"></span>
											<span>{`${price["min"]} to ${price["max"]}`}</span>
										</label>	
										</li>
								})
							}
						</ul>
					</div>
			</div>
		);
	}
}
const SectionSideBar = (props) => {
	return <li>
		<label className="check-container">
			<input 
				onChange={props.onCheckedFilter}
				type="checkbox"
				value={props.brand} 
			/>
			<span className="checking"></span>
			<span>{props.brand}</span>
		</label>	
	</li>
}