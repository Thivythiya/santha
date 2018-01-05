import appData from '../appData';
export default {
	compareDesc:function() {
		
	},
	sortByOption:function(data,type){
		return data.sort(function(a,b){
			const dateA = new Date(a.date);
			const dateB = new Date(b.date);
			let comparison = 0;
			if (dateA > dateB) {
			    comparison = 1;
			} else if (dateA < dateB) {
			    comparison = -1;
			}
		 	 return comparison * -1; 
		});
	},
	sortByPriceLow : function(data,type){
		return data.sort(function(a,b){
			const priceA = parseFloat(a.price);;
			const priceB = parseFloat(b.price);
			let comparison = 0;
			if (priceA > priceB) {
			    comparison = 1;
			} else if (priceA < priceB) {
			    comparison = -1;
			}
			  return comparison;
		});
	},
	sortByPriceHigh: function(data,type){
		return data.sort(function(a,b){
			const priceA = parseFloat(a.price);;
			const priceB = parseFloat(b.price);
			let comparison = 0;
			if (priceA > priceB) {
			    comparison = 1;
			} else if (priceA < priceB) {
			    comparison = -1;
			}
			return comparison * -1;
		});
	},
	sectionFilter: function(filterVal){
		return function(x){
			return x.section.includes(filterVal);
		}
	},
	categoryFilter: function(filterValCat){
		return function(item){
			return filterValCat.indexOf(item['category']) >= 0;
		}
	},
	searchingFor: function(searchItem){
		console.log("searchItem", searchItem);
		return function(x){
			return x.name.toLowerCase().includes(searchItem.toLowerCase()) || x.id.toString().includes(searchItem) || x.category.toLowerCase().includes(searchItem.toLowerCase()) || !searchItem;
		}
	}
}	