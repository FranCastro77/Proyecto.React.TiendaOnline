import React, {useState, createContext, useContext} from 'react'

const CartContext = createContext([]);

export const useCartContext = () => {
  return useContext(CartContext)  
}

export function CartProvider ({children}) {

  const [cart, setCart] = useState ([]);


  function isInCart (itemId){
    return cart.find((product) => product.id === itemId);

  }
  
  function addItem (item, quantity) {
    console.log ({...item, quantity})

    if (isInCart(item.id)){
      let aux = [...cart];
      
      let itemIndex = aux.findIndex((product) => product.id === item.id);
  
      const actualizar = aux[itemIndex].quantity += quantity;

      console.log("original", cart)
      console.log("copia", actualizar)

      
    }else{
      setCart([...cart, {...item, quantity}]);
    }

  }
  

  function removeItem (itemId){
    const newCart = [...cart];
    const cartFilter = newCart.filter(product =>{
        return product.id !== itemId;
    });
    setCart(cartFilter);
    }

  function clearCart(){
    setCart([]);
  }

  function totalPrice (){
    let total = 0;
    cart.map((i) => total += i.price * i.quantity);
    return total
    
  }

  function totalProducts (){
    let cantidad = 0;
    cart.map((i) => cantidad += i.quantity)
    return cantidad

  }


  return (
      <CartContext.Provider value ={{addItem, clearCart, removeItem, cart, isInCart, totalPrice, totalProducts}}>
          {children}
      </CartContext.Provider>
  )
}

  


