// import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import ItemDetail from './components/ItemDetail';




function App() {
  return (

    <>
    {/* <NavBar/> */}

    <BrowserRouter>

      <NavBar/>

      <Routes>
        <Route path= '/Item' element= { <ItemListContainer/> } />
        <Route path= '/Contact' element= { <Contact/> } />
        <Route path= '/AUs' element= { <AboutUs/> } />
        <Route path= '/Item/:id' element= { <ItemDetail/> } />
      </Routes>

    </BrowserRouter>



    {/* <ItemListContainer/> */}
    </>
    
    
);
}

export default App;
