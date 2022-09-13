import React, {useState, createContext, useContext} from 'react'

const CartContext = createContext([]);

export const useCart = () => {
  return useContext(CartContext)  
}

export function CartProvider ({children}) {

  const [cart, setCart] = useState ([]);

  let copia = [...cart]

  console.log("copia", [...copia, 1])
  
  console.log("carrito original", cart)

  

  function isInCart (itemId){
    return cart.find((product) => product.id === itemId);

  }

  function addItem (item, quantity) {
    console.log ({...item, quantity})

    if (isInCart(item.id)){
      console.log("este item ya esta agregado al carro")
      let aux = {...cart};
      console.log(aux)
      
      let itemIndex = aux.findIndex((product) => product.id === item.id);
      console.log(`El index del producto es ${itemIndex}`)
      aux[itemIndex].quantity += quantity;
      setCart([...aux])
    }else{
      console.log(`este artitulo no se registra previamenten en el carro`)
      setCart([...cart, {...item, quantity}]);
    }

  }

  // function removeItem (itemId){
  //   //
  // }

  function clear(){
    setCart([]);
  }

  return (
      <CartContext.Provider value ={{addItem, clear, cart}}>
          {children}
      </CartContext.Provider>
  )
}


  


