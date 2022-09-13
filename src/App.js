import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
// import CartWidget from './components/CartWidget';
import Home from './pages/Home';
import CartView from './components/CartView';
import {CartProvider} from './context/CartContext';




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
        {/* <Route path= '/cart' element= { <CartWidget/> } /> */}
        <Route path= '/Item/:id' element= { <ItemDetailContainer/> } />
      </Routes>

    </BrowserRouter>
  </CartProvider>

    </>
    
    
);
}

export default App;
