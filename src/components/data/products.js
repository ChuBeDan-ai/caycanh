const products = [
    {
        id: 1,
        name: 'Cây Dương sỉ',
        image: '/images/cayduongsi.webp',
        price: '50,000 đ',
        description:
            'Cây dương sỉ là loại cây dễ chăm sóc, thích hợp cho những người bận rộn. Nó có khả năng sống tốt trong môi trường ánh sáng yếu và giúp làm sạch không khí.',
    },
    {
        id: 2,
        name: 'Cây Kim Tiền',
        image: '/images/caykimtien.webp',
        price: '80,000 đ',
        description:
            'Cây kim tiền mang lại tài lộc và may mắn cho gia chủ. Cây này có khả năng chịu hạn tốt và thường được trồng trong nhà để thu hút năng lượng tích cực.',
    },
    {
        id: 3,
        name: 'Cây Bàng Singapore',
        image: '/images/caybangsingapore.webp',
        price: '40,000 đ',
        description:
            'Cây bàng Singapore là loại cây cảnh đẹp, thích hợp trang trí. Với lá xanh tươi, cây này mang lại vẻ đẹp tự nhiên cho không gian sống.',
    },
    {
        id: 4,
        name: 'Cây Kim Ngân',
        image: '/images/caykimngan.webp',
        price: '120,000 đ',
        description:
            'Cây kim ngân mang lại tài lộc và thịnh vượng. Nó thường được trồng trong nhà và được coi là biểu tượng của sự phát triển và thịnh vượng.',
    },
    {
        id: 5,
        name: 'Cây Cẩm Nhung',
        image: '/images/caycamnhung.webp',
        price: '25,000 đ',
        description:
            'Cây cẩm nhung có lá đẹp, thích hợp làm cây trang trí trong nhà. Nó dễ chăm sóc và tạo điểm nhấn cho không gian sống.',
    },
    {
        id: 6,
        name: 'Cây Hồng Môn',
        image: '/images/cayhongmon.webp',
        price: '32,000 đ',
        description:
            'Cây Hồng Môn là loại cây cảnh đẹp, dễ chăm sóc và mang lại không khí tươi mát cho không gian sống với hoa màu hồng rực rỡ.',
    },
    {
        id: 7,
        name: 'Cây Cau Tiểu Trâm',
        image: '/images/caycautieutram.webp',
        price: '20,000 đ',
        description:
            'Cây Cau Tiểu Trâm là cây cảnh dễ chăm sóc, có khả năng sống tốt trong môi trường trong nhà, mang lại vẻ đẹp thanh thoát cho không gian.',
    },
    {
        id: 8,
        name: 'Cây Hồng Hạc mini',
        image: '/images/cayhonghacmini.webp',
        price: '22,000 đ',
        description:
            'Cây Hồng Hạc mini là loại cây dễ trồng, có khả năng chịu nắng và tạo điểm nhấn cho không gian sống với màu sắc tươi sáng.',
    },
    {
        id: 9,
        name: 'Cây Kim Giao',
        image: '/images/caykimgiao.webp',
        price: '90,000 đ',
        description:
            'Cây Kim Giao là loại cây cảnh có lá xanh tươi, thường được trồng trong nhà để mang lại sự tươi mát và may mắn.',
    },
    {
        id: 10,
        name: 'Cây Kim Tiền',
        image: '/images/caykimtien.webp',
        price: '100,000 đ',
        description:
            'Dưa lưới ruột xanh thuộc họ bầu bí, có vị ngọt thanh và giòn, là lựa chọn tuyệt vời cho những ai yêu thích trái cây tươi ngon.',
    },
    {
        id: 11,
        name: 'Cây Lan Dưa Hấu',
        image: '/images/caylanduahau.webp',
        price: '18,000 đ',
        description:
            'Cây Lan Dưa Hấu là loại cây dễ trồng, có khả năng chịu hạn tốt, thường được trồng trong các khu vườn hoặc ban công.',
    },
    {
        id: 12,
        name: 'Cây Lan Ý Thủy Sinh',
        image: '/images/caylanythuysinh.webp',
        price: '140,000 đ',
        description:
            'Cây Lan Ý Thủy Sinh là loại cây dễ chăm sóc, thường được trồng trong nước. Nó có khả năng thanh lọc không khí và tạo không gian sống trong lành.',
    },
    {
        id: 13,
        name: 'Cây Lưỡi Hổ',
        image: '/images/cayluoiho.webp',
        price: '50,000 đ',
        description:
            'Cây Lưỡi Hổ là loại cây dễ sống, có khả năng chịu hạn tốt, thường được trồng trong nhà để trang trí và mang lại may mắn.',
    },
    // {as
    //     id: 14,
    //     name: 'Cây may mắn hình trái tim',
    //     image: '/images/caymanmanhinhtraitim.webpp',
    //     price: '28,000 đ',
    //     description:
    //         'Cây may mắn hình trái tim là biểu tượng của tình yêu và sự may mắn, thích hợp làm quà tặng cho người thân và bạn bè.',
    // },
    {
        id: 15,
        name: 'Cây may mắn tài lộc',
        image: '/images/caymaymantailoc.webp',
        price: '140,000 đ',
        description:
            'Cây may mắn tài lộc được cho là mang lại sự thịnh vượng và tài lộc cho gia chủ, thường được trồng trong nhà hoặc văn phòng.',
    },
    {
        id: 16,
        name: 'Cây Môn Thiên Đường',
        image: '/images/caymonthienduong.webp',
        price: '190,000 đ',
        description:
            'Cây Môn Thiên Đường là loại cây có hoa đẹp, thường được trồng làm cây cảnh trong nhà và mang lại vẻ đẹp tự nhiên cho không gian.',
    },
    {
        id: 17,
        name: 'Cây Ngân Bính',
        image: '/images/caynganbinh.webp',
        price: '1,900,000 đ',
        description: 'Cây Ngân Bính là loại cây cảnh quý hiếm, mang lại sự sang trọng và đẳng cấp cho không gian sống.',
    },
    {
        id: 18,
        name: 'Cây sen đá',
        image: '/images/caysenda.webp',
        price: '110,000 đ',
        description:
            'Cây sen đá là loại cây succulent dễ chăm sóc, thích hợp cho những người bận rộn và thường được trồng trong chậu nhỏ trang trí.',
    },
    {
        id: 19,
        name: 'Cây Phát Tài',
        image: '/images/cayphattai.webp',
        price: '110,000 đ',
        description:
            'Cây Phát Tài được coi là biểu tượng của sự thịnh vượng và tài lộc, thường được trồng trong nhà để thu hút năng lượng tích cực.',
    },
    {
        id: 20,
        name: 'Cây Tùng Bồng Lai',
        image: '/images/caytungbonglai.webp',
        price: '110,000 đ',
        description:
            'Cây Tùng Bồng Lai là loại cây cảnh đẹp, thường được trồng trong nhà hoặc sân vườn, mang lại cảm giác bình yên và thư giãn.',
    },
];

export default products;
