import styles11 from './gimballist.module.css';
import { useState,useContext } from 'react';
import Appcontext from '../../context';


function Gimballist(props) {

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
        <div className={styles11.container}>
            <div className={styles11.wrapper}>
                <div className={styles11.item}>
                    <div className={styles11.imgarea}>
                        <img src={props.Image} width={130} height={130}></img>
                    </div>
                        <h3>{props.Name}</h3>
                        <p><b>{"Rs.₹"}{price}/-</b></p>
                        <p><b>{props.Offer}{"% Offer"}</b></p>
                        <button className={styles11.offerbutton} onClick={button}><b>Apply Offer</b></button><br></br><br></br>
                        <button className={styles11.cartbutton} onClick={clickHandle}><b>Add to Cart</b></button>
                </div>
            </div>
        </div>
    </div>


    );

}

export default Gimballist;