import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import About from './components/About';
import Contact from './components/Contact';
import { Cart } from './components/Cart';
import { CartProvider } from './components/context/CartContext';


function App() {
  return (
  <CartProvider>
      <BrowserRouter>
      
      <NavBar />

      <Routes>
        <Route path="/" element={ <ItemListContainer /> }/>
        <Route path="/categories/:categoryId" element={ <ItemListContainer /> }/>
        <Route path="/details/:itemId" element={ <ItemDetailContainer/> }/>
        <Route path="/about" element={ <About/> }/>
        <Route path="/contact" element={ <Contact/> }/>
        <Route path="/cart" element={ <Cart/> }/>
        <Route path="*" element={ <Navigate to="/"/> }/>
      </Routes>

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;