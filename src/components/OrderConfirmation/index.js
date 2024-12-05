import React from 'react';
import { useLocation } from 'react-router-dom';
import './OrderConfirmation.scss';

function OrderConfirmation() {
    const location = useLocation();
    const { orderId, paymentTime } = location.state || { orderId: null, paymentTime: null };

    return (
        <div className="oder-wrapper">
            <h2>Xác nhận đơn hàng</h2>
            {orderId ? (
                <>
                    <p>Đơn hàng của bạn đã được tạo thành công! Mã đơn hàng: {orderId}</p>
                    <p>Thời gian thanh toán: {paymentTime}</p> {/* Hiển thị thời gian thanh toán */}
                </>
            ) : (
                <p>Đã xảy ra lỗi khi tạo đơn hàng.</p>
            )}
        </div>
    );
}

export default OrderConfirmation;
