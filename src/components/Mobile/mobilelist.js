import styles15 from './mobilelist.module.css';
import { useState } from 'react';
import {useContext} from 'react';
import Appcontext from '../../context';


function Mobilelist(props) {

    const [price, setPrice] = useState(props.Price)

    const button = () => {
        let newprice = props.Price - (props.Offer / 100) * props.Price
        setPrice(newprice);
    }
    const prop = useContext(Appcontext)

    const clickHandle = () => {
        prop.cartHandler(props.details)
        console.log(prop.cart);
    }


    return (
        <div>
        <div className={styles15.container}>
            <div className={styles15.wrapper}>
                <div className={styles15.item}>
                    <div className={styles15.imgarea}>
                        <img src={props.Image} width={130} height={130}></img>
                    </div>
                        <h3>{props.Name}</h3>
                        <p><b>{"Rs.₹"}{price}/-</b></p>
                        <p><b>{props.Offer}{"% Offer"}</b></p>
                        <button className={styles15.offerbutton} onClick={button}><b>Apply Offer</b></button><br></br><br></br>
                        <button className={styles15.cartbutton} onClick={clickHandle}><b>Add to Cart</b></button>
                </div>
            </div>
        </div>
    </div>

    );

}

export default Mobilelist;