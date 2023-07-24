import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import DropDown from '../DropDown'

import {faMagnifyingGlass, faShoppingBag,} from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles)

const subMenuStore = [
            {
                title: 'Mua Hàng',
                content: [
                    {
                        textPath: 'Mua sản phẩm mới nhất',
                        path:'/',
                    },
                    {
                        textPath: 'Mac',
                        path:'/',
                    },
                    {
                        textPath: 'iPad',
                        path:'/',
                    },
                    {
                        textPath: 'iPhone',
                        path:'/',
                    },
                    {
                        textPath: 'Apple Watch',
                        path:'/',
                    },
                    {
                        textPath: 'Phụ Kiện',
                        path:'/',
                    },   
                ]
            },
            {
                title: 'Liên Kết Nhanh',
                content: [
                    {
                        textPath: 'Tình Trạng Đơn Hàng',
                        path:'/',
                    },
                    {
                        textPath: 'Apple Trade In',
                        path:'/',
                    },
                    {
                        textPath: 'Tài Chính',
                        path:'/',
                    },
                    {
                        textPath: 'Ưu Đãi Dành Cho Học Sinh Sinh Viên Đại Học',
                        path:'/',
                    },
                   
                ]
            },
            {
                title: 'Mua Tại Cửa Hàng Đặc Biệt',
                content: [
                    {
                        textPath: 'Giáo Dục',
                        path:'/',
                    },
                    {
                        textPath: 'Doanh Nghiệp',
                        path:'/',
                    }, 
                ]
            },

        ]

const subMenuMac = [
    {
        title: 'Khám phá Mac',
        compare: 'So sánh Mac',
        addedTitle: 'Mác làm dược đó',
        content: [
            {
                textPath: 'Khám Phá Tất Cả Mac',
                path:'/',
            },
            {
                textPath: 'MacBook Air',
                path:'/',
            },
            {
                textPath: 'MacBook Pro',
                path:'/',
            },
            {
                textPath: 'iMac',
                path:'/',
            },
            {
                textPath: 'Mac mini',
                path:'/',
            },
            {
                textPath: 'Mac Studio',
                path:'/',
            },
            {
                textPath: 'Mac Pro',
                path:'/',
            },
            {
                textPath: 'Màn hình',
                path:'/',
            },  
        ]
    },
    {
        title: 'Mua Mac',
        content: [
            {
                textPath: 'Mua Mac',
                path:'/',
            },
            {
                textPath: 'Phụ Kiện Mac',
                path:'/',
            },
            {
                textPath: 'Apple Trade In',
                path:'/',
            },
            {
                textPath: 'Tài Chính',
                path:'/',
            },
            {
                textPath: 'Ưu Đãi Dành Cho Sinh Viên Đại Học',
                path:'/',
            },
        ]
    },
    {
        title: 'Tìm Hiểu Thêm Về Mac',
        content: [
            {
                textPath: 'Hỗ Trợ Mac',
                path:'/',
            },
            {
                textPath: 'Xem Trước macOS Sonoma',
                path:'/',
            },
            {
                textPath: 'AppleCare+ Cho Mac',
                path:'/',
            },
            {
                textPath: 'Tính Liên Tục',
                path:'/',
            },
            {
                textPath: 'iClound',
                path:'/',
            },
            {
                textPath: 'Mac cho Doanh Nghiệp',
                path:'/',
            },
            {
                textPath: 'Giáo Dục',
                path:'/',
            },
        ]
    },
]

const subMenuIpad = [
    {
        title: 'Khám phá iPad',
        compare: 'So sánh Mac',
        addedTitle: 'Tại sao nên dùng ipad',
        content: [
            {
                textPath: 'iPad Pro',
                path:'/',
            },
            {
                textPath: 'iPad Air',
                path:'/',
            },
            {
                textPath: 'Ipad',
                path:'/',
            },
            {
                textPath: 'Ipad mini',
                path:'/',
            },
            {
                textPath: 'Apple Pencil',
                path:'/',
            },
            {
                textPath: 'Bàn Phím',
                path:'/',
            },
           
        ]
    },
    {
        title: 'Mua iPad',
        content: [
            {
                textPath: 'Mua iPad',
                path:'/',
            },
            {
                textPath: 'Phụ Kiện iPad',
                path:'/',
            },
            {
                textPath: 'Apple Trade In',
                path:'/',
            },
            {
                textPath: 'Tài Chính',
                path:'/',
            },
            {
                textPath: 'Ưu Đãi Dành Cho Sinh Viên Đại Học',
                path:'/',
            },
        ]
    },
    {
        title: 'Tìm Hiểu Thêm Về iPad',
        content: [
            {
                textPath: 'Hỗ Trợ iPad',
                path:'/',
            },
            {
                textPath: 'Xem Trước iPadOS 17',
                path:'/',
            },
            {
                textPath: 'AppleCare+ Cho iPad',
                path:'/',
            },
            {
                textPath: 'iClound',
                path:'/',
            },
            {
                textPath: 'Giáo Dục',
                path:'/',
            },
        ]
    },

]

const subMenuIphone = [
    {
        title: 'Khám phá iPad',
        compare: 'So sánh Mac',
        addedTitle: 'Tại sao nên dùng ipad',
        content: [
            {
                textPath: 'iPad Pro',
                path:'/',
            },
            {
                textPath: 'iPad Air',
                path:'/',
            },
            {
                textPath: 'Ipad',
                path:'/',
            },
            {
                textPath: 'Ipad mini',
                path:'/',
            },
            {
                textPath: 'Apple Pencil',
                path:'/',
            },
            {
                textPath: 'Bàn Phím',
                path:'/',
            },
           
        ]
    },
    {
        title: 'Mua iPad',
        content: [
            {
                textPath: 'Mua iPad',
                path:'/',
            },
            {
                textPath: 'Phụ Kiện iPad',
                path:'/',
            },
            {
                textPath: 'Apple Trade In',
                path:'/',
            },
            {
                textPath: 'Tài Chính',
                path:'/',
            },
            {
                textPath: 'Ưu Đãi Dành Cho Sinh Viên Đại Học',
                path:'/',
            },
        ]
    },
    {
        title: 'Tìm Hiểu Thêm Về iPad',
        content: [
            {
                textPath: 'Hỗ Trợ iPad',
                path:'/',
            },
            {
                textPath: 'Xem Trước iPadOS 17',
                path:'/',
            },
            {
                textPath: 'AppleCare+ Cho iPad',
                path:'/',
            },
            {
                textPath: 'iClound',
                path:'/',
            },
            {
                textPath: 'Giáo Dục',
                path:'/',
            },
        ]
    },

]

const subMenuWatch = [
    {
        title: 'Khám phá iPad',
        compare: 'So sánh Mac',
        addedTitle: 'Tại sao nên dùng ipad',
        content: [
            {
                textPath: 'iPad Pro',
                path:'/',
            },
            {
                textPath: 'iPad Air',
                path:'/',
            },
            {
                textPath: 'Ipad',
                path:'/',
            },
            {
                textPath: 'Ipad mini',
                path:'/',
            },
            {
                textPath: 'Apple Pencil',
                path:'/',
            },
            {
                textPath: 'Bàn Phím',
                path:'/',
            },
           
        ]
    },
    {
        title: 'Mua iPad',
        content: [
            {
                textPath: 'Mua iPad',
                path:'/',
            },
            {
                textPath: 'Phụ Kiện iPad',
                path:'/',
            },
            {
                textPath: 'Apple Trade In',
                path:'/',
            },
            {
                textPath: 'Tài Chính',
                path:'/',
            },
            {
                textPath: 'Ưu Đãi Dành Cho Sinh Viên Đại Học',
                path:'/',
            },
        ]
    },
    {
        title: 'Tìm Hiểu Thêm Về iPad',
        content: [
            {
                textPath: 'Hỗ Trợ iPad',
                path:'/',
            },
            {
                textPath: 'Xem Trước iPadOS 17',
                path:'/',
            },
            {
                textPath: 'AppleCare+ Cho iPad',
                path:'/',
            },
            {
                textPath: 'iClound',
                path:'/',
            },
            {
                textPath: 'Giáo Dục',
                path:'/',
            },
        ]
    },

]

const subMenuAirPods = [
    {
        title: 'Khám phá iPad',
        compare: 'So sánh Mac',
        content: [
            {
                textPath: 'iPad Pro',
                path:'/',
            },
            {
                textPath: 'iPad Air',
                path:'/',
            },
            {
                textPath: 'Ipad',
                path:'/',
            },
            {
                textPath: 'Ipad mini',
                path:'/',
            },
            {
                textPath: 'Apple Pencil',
                path:'/',
            },
            {
                textPath: 'Bàn Phím',
                path:'/',
            },
           
        ]
    },
    {
        title: 'Mua iPad',
        content: [
            {
                textPath: 'Mua iPad',
                path:'/',
            },
            {
                textPath: 'Phụ Kiện iPad',
                path:'/',
            },
            {
                textPath: 'Apple Trade In',
                path:'/',
            },
            {
                textPath: 'Tài Chính',
                path:'/',
            },
            {
                textPath: 'Ưu Đãi Dành Cho Sinh Viên Đại Học',
                path:'/',
            },
        ]
    },
    {
        title: 'Tìm Hiểu Thêm Về iPad',
        content: [
            {
                textPath: 'Hỗ Trợ iPad',
                path:'/',
            },
            {
                textPath: 'Xem Trước iPadOS 17',
                path:'/',
            },
            {
                textPath: 'AppleCare+ Cho iPad',
                path:'/',
            },
            {
                textPath: 'iClound',
                path:'/',
            },
            {
                textPath: 'Giáo Dục',
                path:'/',
            },
        ]
    },

]

const subMenuTV = [
    {
        title: 'Khám phá iPad',
        content: [
            {
                textPath: 'iPad Pro',
                path:'/',
            },
            {
                textPath: 'iPad Air',
                path:'/',
            },
            {
                textPath: 'Ipad',
                path:'/',
            },
            {
                textPath: 'Ipad mini',
                path:'/',
            },
            {
                textPath: 'Apple Pencil',
                path:'/',
            },
            {
                textPath: 'Bàn Phím',
                path:'/',
            },
           
        ]
    },
    {
        title: 'Mua iPad',
        content: [
            {
                textPath: 'Mua iPad',
                path:'/',
            },
            {
                textPath: 'Phụ Kiện iPad',
                path:'/',
            },
            {
                textPath: 'Apple Trade In',
                path:'/',
            },
            {
                textPath: 'Tài Chính',
                path:'/',
            },
            {
                textPath: 'Ưu Đãi Dành Cho Sinh Viên Đại Học',
                path:'/',
            },
        ]
    },
    {
        title: 'Tìm Hiểu Thêm Về iPad',
        content: [
            {
                textPath: 'Hỗ Trợ iPad',
                path:'/',
            },
            {
                textPath: 'Xem Trước iPadOS 17',
                path:'/',
            },
            {
                textPath: 'AppleCare+ Cho iPad',
                path:'/',
            },
            {
                textPath: 'iClound',
                path:'/',
            },
            {
                textPath: 'Giáo Dục',
                path:'/',
            },
        ]
    },

]

const subMenuAccessory= [
    {
        title: 'Khám phá iPad',
        content: [
            {
                textPath: 'iPad Pro',
                path:'/',
            },
            {
                textPath: 'iPad Air',
                path:'/',
            },
            {
                textPath: 'Ipad',
                path:'/',
            },
            {
                textPath: 'Ipad mini',
                path:'/',
            },
            {
                textPath: 'Apple Pencil',
                path:'/',
            },
            {
                textPath: 'Bàn Phím',
                path:'/',
            },
           
        ]
    },
    {
        title: 'Mua iPad',
        content: [
            {
                textPath: 'Mua iPad',
                path:'/',
            },
            {
                textPath: 'Phụ Kiện iPad',
                path:'/',
            },
            {
                textPath: 'Apple Trade In',
                path:'/',
            },
            {
                textPath: 'Tài Chính',
                path:'/',
            },
            {
                textPath: 'Ưu Đãi Dành Cho Sinh Viên Đại Học',
                path:'/',
            },
        ]
    },
    {
        title: 'Tìm Hiểu Thêm Về iPad',
        content: [
            {
                textPath: 'Hỗ Trợ iPad',
                path:'/',
            },
            {
                textPath: 'Xem Trước iPadOS 17',
                path:'/',
            },
            {
                textPath: 'AppleCare+ Cho iPad',
                path:'/',
            },
            {
                textPath: 'iClound',
                path:'/',
            },
            {
                textPath: 'Giáo Dục',
                path:'/',
            },
        ]
    },

]

const subMenuIntertaiment = [
    {
        title: 'Khám phá iPad',
        content: [
            {
                textPath: 'iPad Pro',
                path:'/',
            },
            {
                textPath: 'iPad Air',
                path:'/',
            },
            {
                textPath: 'Ipad',
                path:'/',
            },
            {
                textPath: 'Ipad mini',
                path:'/',
            },
            {
                textPath: 'Apple Pencil',
                path:'/',
            },
            {
                textPath: 'Bàn Phím',
                path:'/',
            },
           
        ]
    },
    {
        title: 'Mua iPad',
        content: [
            {
                textPath: 'Mua iPad',
                path:'/',
            },
            {
                textPath: 'Phụ Kiện iPad',
                path:'/',
            },
            {
                textPath: 'Apple Trade In',
                path:'/',
            },
            {
                textPath: 'Tài Chính',
                path:'/',
            },
            {
                textPath: 'Ưu Đãi Dành Cho Sinh Viên Đại Học',
                path:'/',
            },
        ]
    },
    {
        title: 'Tìm Hiểu Thêm Về iPad',
        content: [
            {
                textPath: 'Hỗ Trợ iPad',
                path:'/',
            },
            {
                textPath: 'Xem Trước iPadOS 17',
                path:'/',
            },
            {
                textPath: 'AppleCare+ Cho iPad',
                path:'/',
            },
            {
                textPath: 'iClound',
                path:'/',
            },
            {
                textPath: 'Giáo Dục',
                path:'/',
            },
        ]
    },

]

const subMenuSupport = [
    {
        title: 'Khám phá iPad',
        content: [
            {
                textPath: 'iPad Pro',
                path:'/',
            },
            {
                textPath: 'iPad Air',
                path:'/',
            },
            {
                textPath: 'Ipad',
                path:'/',
            },
            {
                textPath: 'Ipad mini',
                path:'/',
            },
            {
                textPath: 'Apple Pencil',
                path:'/',
            },
            {
                textPath: 'Bàn Phím',
                path:'/',
            },
           
        ]
    },
    {
        title: 'Mua iPad',
        content: [
            {
                textPath: 'Mua iPad',
                path:'/',
            },
            {
                textPath: 'Phụ Kiện iPad',
                path:'/',
            },
            {
                textPath: 'Apple Trade In',
                path:'/',
            },
            {
                textPath: 'Tài Chính',
                path:'/',
            },
            {
                textPath: 'Ưu Đãi Dành Cho Sinh Viên Đại Học',
                path:'/',
            },
        ]
    },
    {
        title: 'Tìm Hiểu Thêm Về iPad',
        content: [
            {
                textPath: 'Hỗ Trợ iPad',
                path:'/',
            },
            {
                textPath: 'Xem Trước iPadOS 17',
                path:'/',
            },
            {
                textPath: 'AppleCare+ Cho iPad',
                path:'/',
            },
            {
                textPath: 'iClound',
                path:'/',
            },
            {
                textPath: 'Giáo Dục',
                path:'/',
            },
        ]
    },

]

const menuItems = [
    {
        display: 'Cửa Hàng',
        path:'/',
        subMenu: subMenuStore,
        
    },
    {
        display: 'Mac',
        path:'/',
        subMenu: subMenuMac,
    },
    {
        display: 'Ipad',
        path:'/',
        subMenu: subMenuIpad,
    },

    {
        display: 'Iphone',
        path:'/',
        subMenu: subMenuIphone,
    },
    {
        display: 'Watch',
        path:'/',
        subMenu: subMenuWatch,
    },
    {
        display: 'AirPods',
        path:'/',
        subMenu: subMenuAirPods
    },
    {
        display: 'TV & Nhà',
        path:'/',
        subMenu: subMenuTV,
    },
    {
        display: 'Giải trí',
        path:'/',
        subMenu: subMenuIntertaiment,
    },
    {
        display: 'Phụ Kiện',
        path:'/',
        subMenu: subMenuAccessory,
    },
    {
        display: 'Hỗ Trợ',
        path:'/',
        subMenu: subMenuSupport,
    },
    // {
    //     display: <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>,
    //     path:'/',
    //     subMenu:''

    // },
    // {
    //     display: <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>,
    //     path:'/',
    //     subMenu:''

    // },
]



function Navbar() {
    // return ( <div className={cx('navigation')}>
    return (<>
    
    {menuItems.map((item, index) => (
       
        <div className={cx('menu-item')} key={index}>
            <a href={item.path}>{item.display}</a>
        
        <DropDown className={cx('drop-down')} subMenu={item.subMenu}></DropDown>
        
        </div>
        
       
 ))} 
   
    </>
        
    )
    // </div> );
}

export default Navbar;