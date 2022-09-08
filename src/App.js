import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import CartWidget from './components/CartWidget';
import Home from './pages/Home';
import CartView from './components/CartView';




function App() {
  return (

    <>

    <BrowserRouter>

      <NavBar/>

      <Routes>
        <Route path= '/' element= { <Home/> } />
        <Route path= '/Cart' element= { <CartView/> } />
        <Route path= '/Item' element= { <ItemListContainer/> } />
        <Route path= '/category/:categoryId' element= { <ItemListContainer/> } />
        <Route path= '/cart' element= { <CartWidget/> } />
        <Route path= '/Item/:id' element= { <ItemDetailContainer/> } />
      </Routes>

    </BrowserRouter>

    </>
    
    
);
}

export default App;
