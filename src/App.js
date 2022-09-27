import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import Home from './pages/Home';
import CartView from './components/CartView';
import {CartProvider} from './context/CartContext';
import CheckOut from './components/CheckOut';




function App() {
  return (

    <>

  <CartProvider>
    <BrowserRouter>

      <NavBar/>

      <Routes>
        <Route path= '/' element= { <Home/> } />
        <Route path= '/Cart' element= { <CartView/> } />
        <Route path= '/Item' element= { <ItemListContainer/> } />
        <Route path= '/category/:categoryId' element= { <ItemListContainer/> } />
        <Route path= '/Item/:id' element= { <ItemDetailContainer/> } />
        <Route path= '/CheckOut' element= { <CheckOut/> } />

      </Routes>

    </BrowserRouter>
  </CartProvider>

    </>
    
    
);
}

export default App;
