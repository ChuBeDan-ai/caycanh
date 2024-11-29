// src/components/Layout/DefaultLayout/Header/index.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoSearchSharp } from 'react-icons/io5';
import { LiaShoppingCartSolid } from 'react-icons/lia';
import { CartContext } from '~/components/Cartcontext';
import { AuthContext } from '~/components/AuthContext'; // Nhập AuthContext
import './Header.scss';

function Header() {
    const { getTotalQuantity } = useContext(CartContext);
    const { user, logout } = useContext(AuthContext); // Lấy thông tin người dùng và hàm logout từ AuthContext
    const totalQuantity = getTotalQuantity();

    return (
        <header className="header">
            <img src="/images/logo.webp" alt="logo" className="logo" />
            <nav className="header_nav">
                <ul className="header_nav_list">
                    <li>
                        <Link to="/" exact activeClassName="active">
                            Trang Chủ
                        </Link>
                    </li>
                    <li>
                        <Link to="/product" activeClassName="active">
                            Sản Phẩm
                        </Link>
                    </li>
                    <li>
                        <Link to="/introduce" activeClassName="active">
                            Giới Thiệu
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" activeClassName="active">
                            Liên Hệ
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="header_search">
                <input type="text" className="header_search_input" placeholder="tìm kiếm" />
                <div className="header_search_icon">
                    <IoSearchSharp />
                </div>
            </div>
            <div className="header_right">
                <div className="header_cart">
                    <div className="header_cart_icon">
                        <Link to="/cartpage">
                            <LiaShoppingCartSolid />
                            {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}
                        </Link>
                    </div>
                </div>
                <div className="btn_header">
                    {user ? (
                        <>
                            <span className="username">{user.username}</span> {/* Hiển thị tên người dùng */}
                            <button className="btn_logout" onClick={logout}>
                                Đăng Xuất
                            </button>{' '}
                            {/* Nút đăng xuất */}
                        </>
                    ) : (
                        <>
                            <div className="btn_header_login">
                                <Link to="/login">
                                    <button className="btn_login">Đăng Nhập</button>
                                </Link>
                            </div>
                            <div className="btn_header_register">
                                <Link to="/register">
                                    <button className="btn_register">Đăng Ký</button>
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
