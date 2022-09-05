// import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  return (

    <>
    {/* <NavBar/> */}

    <BrowserRouter>

      <NavBar/>

      <Routes>
        <Route path= '/Item' element= { <ItemListContainer/> } />
      </Routes>

    </BrowserRouter>



    {/* <ItemListContainer/> */}
    </>
    
    
);
}

export default App;
