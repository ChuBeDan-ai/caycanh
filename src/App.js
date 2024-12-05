// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/DefaultLayout/Header';
import Footer from './components/Layout/DefaultLayout/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Introduce from './pages/Introduce';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Cartpage from './pages/Cartpage';
import SearchPage from './pages/SearchPage';
import { CartProvider } from './components/Cartcontext';
import { AuthProvider } from './components/AuthContext'; // Nhập AuthProvider
import ProductDetail from './pages/ProductDetail';
import Payment from './pages/Payment';
import OrderConfirmation from './components/OrderConfirmation';
import Lichsu from './pages/lichsu';
// Nhập OrderHistory

function App() {
    return (
        <AuthProvider>
            {/* Bao bọc toàn bộ ứng dụng bằng AuthProvider */}
            <CartProvider>
                {/* Bao bọc toàn bộ ứng dụng bằng CartProvider */}
                <Router>
                    <Header />
                    <div className="App">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/product" element={<Product />} />
                            <Route path="/product/:id" element={<ProductDetail />} />
                            <Route path="/introduce" element={<Introduce />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/cartpage" element={<Cartpage />} />
                            <Route path="/payment" element={<Payment />} />
                            <Route path="/order-confirmation" element={<OrderConfirmation />} />{' '}
                            <Route path="/search" element={<SearchPage />} />
                            <Route path="/lichsu" element={<Lichsu />} />
                            {/* Thêm route cho OrderDetails */}
                        </Routes>
                    </div>
                    <Footer />
                </Router>
            </CartProvider>
        </AuthProvider>
    );
}

export default App;
