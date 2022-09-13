import React, {useState, createContext, useContext} from 'react'

const CartContext = createContext([]);

export const useCart = () => {
  return useContext(CartContext)  
}

export function CartProvider ({children}) {

  const [items, setItems] = useState ([]);

  function addItem (item, quantity) {
    console.log ({...item, quantity})

    if (isInCart(item.id)){
      console.log("este item ya esta agregado al carro")
      let aux = items;
      console.log(aux)
      let itemIndex = aux.findIndex((product) => product.id === item.id);
      console.log(`El index del producto es ${itemIndex}`)
      aux[itemIndex].quantity += quantity;
      setItems([...aux])
    }else{
      console.log(`este artitulo no se registra previamenten en el carro`)
      setItems([...items, {...item, quantity}]);
    }

  }

  // function removeItem (itemId){
  //   //
  // }

  function clear(){
    setItems([]);
  }

  function isInCart (itemId){
    return items.find((product) => product.id === itemId);

  }

  return (
      <CartContext.Provider value ={{addItem, clear, items}}>
          {children}
      </CartContext.Provider>
  )
}


  


