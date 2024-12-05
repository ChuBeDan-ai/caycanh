import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import ProductCard from '~/components/ProductCard/index';
import products from '~/components/data/products';
import img1 from '../../asset/slider/slider2.webp';
import img2 from '../../asset/slider/slider3.webp';
import './Home.scss';

function Home() {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [img1, img2];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 1500); // Thay đổi ảnh mỗi 3 giây

        return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
    }, [images.length]);
    return (
        <div className="wrapper">
            <div className="content">
                <div className="anh_nen">
                    <div className="anh_nen_1" style={{ opacity: currentImage === 0 ? 1 : 0 }}>
                        <img src={img1} alt="Image 1" />
                    </div>
                    <div className="anh_nen_2" style={{ opacity: currentImage === 1 ? 1 : 0 }}>
                        <img src={img2} alt="Image 2" />
                    </div>
                </div>

                <h2>SẢN PHẨM CỦA CHÚNG TÔI</h2>
                <div className="product">
                    {products.slice(0, 10).map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
                <div className="slider_2"></div>
                <h2>BEST SELLER</h2>
                <div className="product">
                    {products.slice(0, 5).map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
                <div className="slider_3">
                    <p className="title">Miễn vận chuyển cho đơn hàng trên 300.000đ</p>
                    <Link to="/product" className="button_sub">
                        Xem ngay
                    </Link>
                </div>
                <h2>SẢN PHẨM MỚI</h2>
                {products.slice(10, 20).map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    );
}

export default Home;
