import styles4 from './product.module.css';
import Menu from './menu';
import img1 from '../images/camera.jfif';
import img2 from '../images/gimbal.jfif';
import img3 from '../images/laptop.jfif';
import img4 from '../images/mobile.jfif';
import Top from '../Topdeals/top';


function Product() {
    const menu = [
        {
            image: img1,
            list: 'Camera'
        },
        {
            image: img2,
            list: 'Gimbal'
        },
        {
            image: img3,
            list: 'Laptop'
        },
        {
            image: img4,
            list: 'Mobile'
        }
    ]
    return (
        <div>
            <div className={styles4.container}>
                <h1 className={styles4.menu}> Welcome To MadHouse</h1>
                <div className={styles4.wrapper}>
                    {
                        menu.map((menus) => {
                            return <Menu key={menus.list} image={menus.image} list={menus.list}></Menu>
                        })
                    }
                </div>
            </div>
            <Top></Top>
        </div>
    );
}
export default Product;