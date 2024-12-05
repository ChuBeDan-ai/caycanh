import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import products from '~/components/data/products';
import { CartContext } from '~/components/Cartcontext'; // Nhập CartContext
import Modal from '~/components/Modal'; // Import Modal
import './ProductDetail.scss';
import { format } from 'date-fns'; // Nhập format từ date-fns nếu bạn muốn định dạng thời gian

function ProductDetail() {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useContext(CartContext); // Lấy hàm addToCart từ context
    const [isModalOpen, setIsModalOpen] = useState(false); // State cho modal
    const [transactionTime, setTransactionTime] = useState(''); // Thêm state cho thời gian giao dịch

    if (!product) {
        return <div>Không tìm thấy sản phẩm!</div>;
    }

    const handleAddToCart = () => {
        addToCart({ ...product, quantity }); // Thêm sản phẩm vào giỏ hàng
        setIsModalOpen(true); // Mở modal khi thêm vào giỏ hàng

        // Cập nhật thời gian giao dịch
        const currentTransactionTime = format(new Date(), 'dd/MM/yyyy HH:mm:ss'); // Lấy thời gian hiện tại và định dạng
        setTransactionTime(currentTransactionTime);

        // Đặt thời gian đóng modal sau 1 giây
        setTimeout(() => {
            setIsModalOpen(false); // Đóng modal sau 1 giây
        }, 500);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        if (value >= 1) {
            setQuantity(value);
        }
    };

    return (
        <div className="product-detail">
            <div className="product-detail-content">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-info">
                    <h2 className="product-name">{product.name}</h2>
                    <p className="product-price">{product.price}</p>
                    <p className="product-description">{product.description}</p>
                    <div className="product-mass">
                        <h5>
                            Khối lượng: <span>1kg</span>
                        </h5>
                    </div>
                    <h5>Số lượng</h5>
                    <div className="product-quantity">
                        <input type="button" value="-" className="btn-quantity-decrease" onClick={handleDecrease} />
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            value={quantity} // Giá trị từ state
                            min="1"
                            className="quantity-selector"
                            onChange={handleChange} // Hàm xử lý thay đổi giá trị
                        />
                        <input type="button" value="+" className="btn-quantity-increase" onClick={handleIncrease} />
                    </div>
                    <button className="btn-add-cart" onClick={handleAddToCart}>
                        Thêm vào giỏ hàng
                    </button>
                    {transactionTime && <p className="transaction-time">Thời gian giao dịch: {transactionTime}</p>}{' '}
                    {/* Hiển thị thời gian giao dịch */}
                </div>
            </div>
            {isModalOpen && (
                <Modal message="Sản phẩm đã được thêm vào giỏ hàng!" onClose={() => setIsModalOpen(false)} />
            )}
        </div>
    );
}

export default ProductDetail;
