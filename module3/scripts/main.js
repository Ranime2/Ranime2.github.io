
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp
var allergies=[];

function openInfo(evt, tabName) {
	if (tabName=="Products") {
		populateListProductChoices('displayProduct', 'orgSelect')

	}
	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}

function addAllergy(slct) {
	if( allergies.includes(slct)){
		var index = allergies.indexOf(slct);
		if (index > -1) {
			allergies.splice(index, 1);
		}
	} else { 
		allergies.push(slct);
	}
}

	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct2, slct3 = null) {
    var s2 = document.getElementById(slct2);
	var s3 = slct3 ? document.getElementById(slct3).value: "NoPreferences";
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, allergies, s3 );

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var product= optionArray[i];
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = product.name;
		checkbox.price = product.price;
		s2.appendChild(checkbox);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = product;
		label.appendChild(document.createTextNode(product.name ));
		product.lactose ? label.appendChild(document.createTextNode(" | L " )): null;
		product.nuts ? label.appendChild(document.createTextNode(" | N " )): null;
		product.organic ? label.appendChild(document.createTextNode(" | O " )): null;
		label.appendChild(document.createTextNode(" => " + product.price + "$" ))
		s2.appendChild(label);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	var p = document.getElementsByClassName("priceDisplay")[0];
	p.innerHTML = `Cart current value:  ${getTotalPrice(chosenProducts)}`;
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)+ " $"));
		
}


function cartPrice(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	var p = document.getElementsByClassName("priceDisplay")[0];

	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			chosenProducts.push(ele[i].value);
		}
	}
	p.innerHTML = `Cart current value:  ${getTotalPrice(chosenProducts)}`;
}

