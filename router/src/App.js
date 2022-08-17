import './App.css';
import Home from './page/Home';
import { Routes, Route, Router} from 'react-router-dom'
import About from './page/About';
import Product from './page/Product';
import ProductList from './page/ProductList';
import ProductDetails from './page/ProductDetails';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/product" element={<Product/>}>
            <Route path="productlist" element={<ProductList/>} />
            <Route path="productdetails/:name" element={<ProductDetails/>} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
