export const cartHelper = (cart, product) => {

	let subTotal = 0;
	let grandTotal = 0;
	let taxes = 0;

	let cartItems = [];

	if(cart.cartItems.length> 0) {

		const checkProduct = cart.cartItems.find(item => item.name === product.name);

		if(checkProduct) {
		
			cartItems = cart.cartItems.map(item => {
				if(item.name === product.name) {
					item.quantity = item.quantity + 1;
				}

				subTotal = parseFloat(item.price) * item.quantity;
				grandTotal = subTotal +  taxes
	
				return item;
			});

			cart.cartItems = cartItems;
			cart.grandTotal= grandTotal
			cart.subTotal= subTotal
			cart.taxes = 0;

		}else{
			product.quantity = 1;
			cartItems = [...cart.cartItems, product];

			cartItems.forEach((item) => {
				subTotal = parseFloat(item.price);
				grandTotal = subTotal;
			})
			
			cart.cartItems = cartItems;
			cart.grandTotal= grandTotal
			cart.subTotal= subTotal		
		}
	
	} else{
		product.quantity = 1;
		cart.cartItems = [product];
		cart.grandTotal= parseFloat(product.price)
		cart.subTotal= parseFloat(product.price)
		cart.taxes = 0;
	}

	return cart
}