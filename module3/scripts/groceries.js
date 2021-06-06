	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Yogurt",
		lactose: true,
		nuts: false,
		organic: false,
		price: 1.99
	},
	{
		name: "Milk",
		lactose: true,
		nuts: false,
		organic: false,
		price: 2.99
	},
	{
		name: "Mozarella Cheese",
		lactose: true,
		nuts: false,
		price: 5.99
	},
	{
		name: "Almond Milk",
		lactose: false,
		nuts: true,
		organic: true,
		price: 7.35
	},
	{
		name: "Soy Milk",
		lactose: false,
		nuts: false,
		organic: true,
		price: 5.35
	},
	{
		name: "Whole Grain Bread",
		lactose: false,
		nuts: true,
		organic: true,
		price: 10.00
	},
	{
		name: "Multi-Nuts Granola",
		lactose: false,
		nuts: true,
		organic: false,
		price: 2.35
	},
	{
		name: "Peanut butter",
		lactose: false,
		nuts: true,
		organic: false,
		price: 8.99
	},
	{
		name: "Salmon",
		lactose: false,
		nuts: false,
		organic: false,
		price: 10.00
	},
	{
		name: "Ketchup",
		lactose: false,
		nuts: false,
		organic: true,
		price: 5.25
	},
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction, rest2 ) {
	let product = [];
	for (let i=0; i<prods.length; i+=1) {
		if((rest2 == "Organic" && prods[i].organic == true )|| (rest2 != "Organic" )){
			if (restriction.length==0){
				product.push(prods[i]);
			} else {
				if (( restriction.includes("Lactose")&& prods[i].lactose == false && restriction.includes("NutsAllergies")&& prods[i].nuts == false) ||
					(restriction.includes("Lactose")&& prods[i].lactose == false && !restriction.includes("NutsAllergies"))||
					( !restriction.includes("Lactose") && restriction.includes("NutsAllergies")&& prods[i].nuts == false)) {
					product.push(prods[i]);
				}

			}

		}
	}
	product.sort((a, b) => (a.price > b.price) ? 1 : -1)

	return product;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
