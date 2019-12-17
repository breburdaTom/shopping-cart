const user = {
    name: "Kim",
    active: true,
    cart: [],
    purchases: [],
    addToCart: function(item) {
      item.price *= 1.03; // changing the price not only within array Cart, but for the general variable as well - not ideal
      user.cart.push(item);
    },
    buyItem: function(item) {
      for (var i = 0; i < this.cart.length; i++) {
        this.purchases.push(this.cart[i]);
        this.cart.splice(i, 1);
        i--; //decrement i IF we remove an item
      }
    },
    emptyCart: function() {
      for (var i = 0; i < this.cart.length; i++) {
        this.cart.splice(i, 1);
        i--;
      }
    }
  };
  
  const item1 = {
    name: "Phone",
    price: 100
  };
  
  const item2 = {
    name: "Watch",
    price: 250
  };
  
  //Implement a cart feature:
  // 1. Add items to cart. DONE
  // 2. Add 3% tax to item in cart DONE (not very well)
  // 3. Buy item: cart --> purchases DONE
  // 4. Empty cart DONE
  