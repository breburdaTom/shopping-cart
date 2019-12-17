const user = {
    name: "Kim",
    active: true,
    cart: [],
    purchases: [],
    addToCart: function(item) {
      function clone (obj) {
        return {...obj};
      }
      const itemInCart = clone(item);
      itemInCart.price *= 1.03; 
      user.cart.push(itemInCart);
      console.log(`${item.name} has been added into your shopping cart.`)
    },
    buyItem: function(item) {
      for (var i = 0; i < this.cart.length; i++) {
        this.purchases.push(this.cart[i]);
        this.cart.splice(i, 1);
        i--; //decrement i IF we remove an item
      }
      console.log(`You have now purchased new ${item.name}`)
    },
    emptyCart: function() {
      for (var i = 0; i < this.cart.length; i++) {
        this.cart.splice(i, 1);
        i--;
      }
      console.log(`You have now removed ${item.name} from your shopping cart`)
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
  