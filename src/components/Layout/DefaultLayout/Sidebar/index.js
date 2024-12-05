import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';
function Sidebar({ onFilterChange, setCurrentPage }) {
    const [checkedItems, setCheckedItems] = useState({
        fruit: false,
        vegetables: false,
        meat: false,
        dryFood: false,
        dessert: false,
        below50k: false,
        between50k200k: false,
        between200k400k: false,
        between400k1m: false,
        above1m: false,
        size1: false,
        size15: false,
        size2: false,
    });

    const handleCheckboxChange = (event) => {
        const { id, checked } = event.target;

        const newCheckedItems = {
            ...checkedItems,
            [id]: checked,
        };

        setCheckedItems(newCheckedItems);
        onFilterChange(newCheckedItems); // Gọi hàm lọc với trạng thái mới
        setCurrentPage(1); // Đặt lại trang khi thay đổi bộ lọc
    };
    return (
        <div className="sidebar">
            <div className="sidebar-section">
                <h3>Danh mục</h3>
                <ul>
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
            </div>

            <div className="sidebar-section">
                <h3>cây mới về</h3>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            id="caybonsai"
                            checked={checkedItems.caybonsai}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="caybonsai">cây bonsai</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            id="senda"
                            checked={checkedItems.senda}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="senda">sen đá</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            id="xuongrong"
                            checked={checkedItems.xuongrong}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="xuongrong">xương rồng</label>
                    </li>
                </ul>
            </div>

            <div className="sidebar-section">
                <h3>Giá sản phẩm</h3>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            id="below50k"
                            checked={checkedItems.below50k}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="below-50k">Dưới 50,000đ</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            id="between50k200k"
                            checked={checkedItems.between50k200k}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="50k-200k">50,000đ - 200,000đ</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            id="between200k400k"
                            checked={checkedItems.between200k400k}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="200k-400k">200,000đ - 400,000đ</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            id="between400k1m"
                            checked={checkedItems.between400k1m}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="400k-1m">400,000đ - 1,000,000đ</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            id=" above1m"
                            checked={checkedItems.above1m}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="above-1m">Trên 1,000,000đ</label>
                    </li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3>Loại</h3>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            id="itnang"
                            checked={checkedItems.itnang}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="itnang">ít nắng</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            id="uamat"
                            checked={checkedItems.uamat}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="uamat">Ưa mát</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            id="nhieunang"
                            checked={checkedItems.nhieunang}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="nhieunang">Nhiều nắng</label>
                    </li>
                    <li>
                        <input type="checkbox" id="khac" checked={checkedItems.khac} onChange={handleCheckboxChange} />
                        <label htmlFor="khac">Khác</label>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
