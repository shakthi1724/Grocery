import styles5 from './menu.module.css';
import { useNavigate } from 'react-router-dom';

function Menu(props) {

    const navigate = useNavigate()

    const menuHandler = () => {
        navigate(`/${props.list}`)
    }

    return (
        <div>
            <div className={styles5.container} onClick={menuHandler}>
                <div className={styles5.wrapper}>
                    <div className={styles5.box}>
                        <div className={styles5.imgarea}>
                            <img className={styles5.images} src={props.image} width={220} height={240}></img>
                        </div>
                        <div className={styles5.listname}>{props.list}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Menu; 