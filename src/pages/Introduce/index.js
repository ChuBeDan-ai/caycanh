import React from 'react';

import img from '../../asset/slider/slider8.jpg';
import img1 from '../../asset/slider/slider9.jpg';
import './Introduce.scss';
function Introduce() {
    return (
        <div className="intro_wrapper">
            <div className="intro_container">
                <div className="intro_left">
                    <img src={img1} alt="banner" className="left_intro_img"></img>
                </div>
                <div className="intro_right">
                    <img src={img} alt="banner" className="right_intro_img"></img>
                    <h2 className="intro_tilte">Về con người</h2>
                    <div className="lorem_intro">
                        <p className="p_intro">
                            MewPlant không chỉ đơn thuần là một nơi để mua cây cảnh, mà còn là một cộng đồng yêu cây
                            cảnh, nơi bạn có thể trao đổi kinh nghiệm và chia sẻ niềm đam mê với những người đam mê cây
                            cảnh khác. Chúng tôi tổ chức các buổi workshop và sự kiện liên quan đến cây cảnh để mang đến
                            cho bạn cơ hội học hỏi và giao lưu với những người có cùng sở thích.
                        </p>
                        <p className="p_intro">
                            Đặc biệt, MewPlant cam kết với việc bảo vệ môi trường và phát triển bền vững. Chúng tôi ưu
                            tiên sử dụng các phương pháp trồng cây hữu cơ và chất liệu tái chế trong việc sản xuất và
                            đóng gói sản phẩm. Chúng tôi hy vọng rằng việc góp phần tạo ra một không gian sống xanh mát
                            và thân thiện với môi trường sẽ truyền cảm hứng và khuyến khích mọi người tham gia vào cuộc
                            sống xanh hơn. Tại MewPlant, chúng tôi đặt trọng tâm vào việc chăm sóc và nuôi dưỡng từng
                            cây trồng với tình yêu và sự chuyên nghiệp.
                        </p>
                        <p className="p_intro">
                            Chúng tôi hiểu rằng cây cảnh không chỉ là những vật trang trí tuyệt đẹp, mà còn có thể mang
                            lại nhiều lợi ích sức khỏe và tinh thần cho chủ nhân của chúng. Vì vậy, chúng tôi cam kết
                            mang đến cho khách hàng những loại cây cảnh tươi đẹp, khỏe mạnh và được trồng theo phương
                            pháp hữu cơ.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduce;
