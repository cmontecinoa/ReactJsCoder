//Components and Styles
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import NotFound from './components/NotFound';
import Destacados from './components/Destacados';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';

//Routing
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Contexts
import CartContextProvider from './components/context/CartContext';
// import Checkout from './components/Checkout';

function App() {
  return (
    <div className="container-fluid p-0">
      <CartContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/categoria/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/destacados"} element={<Destacados/>} />
          <Route path={"/cart"} element={<Cart/>} />
          {/* <Route path={"/cart"} element={<Checkout/>} />  */}
          <Route path={"/*"} element={<NotFound/>} />
        </Routes>
        
        <Footer />
      </BrowserRouter>
      </CartContextProvider>
    </div>
  ) 
}

export default App;
