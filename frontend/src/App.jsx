import Product from './pages/Product/Product';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
