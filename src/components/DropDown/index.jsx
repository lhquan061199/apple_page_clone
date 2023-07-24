import classNames from 'classnames/bind';
import styles from './DropDown.module.scss';

const cx = classNames.bind(styles);

const subMenuStore1 = [
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

]


function DropDown({subMenu, className}) {
    
    return ( 
        <div className={cx(className)}>

            <div className={cx('wrapper')}>

            {subMenu.map((item, index) => {
                return <div key={index} >
                    <h4 className={cx('title')}>{item.title}</h4>
                    <ul className={cx('content')}>
                        {item.content.map((item,index) => <li key={index}>{item.textPath}</li>)}
                    </ul>

                   {item.compare || item.addedTitle ?  
                   <div >
                        <div>{item.compare}</div>
                        <div>{item.addedTitle}</div>
                    </div> : ''}
                    </div>
                
            })}
            </div>
            
            
            
            
           
        </div>
     );
}

export default DropDown;