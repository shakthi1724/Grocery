import styles17 from './cartlist.module.css';
import { useState } from 'react';


function Cartlist(props) {

    const [price, setPrice] = useState(props.Price)

    const button = () => {
        let newprice = props.Price - (props.Offer / 100) * props.Price
        setPrice(newprice);
    }

    return (
        <div>
            <div className={styles17.container}>
                <div className={styles17.wrapper}>
                    <div className={styles17.item}>
                        <div className={styles17.imgarea}>
                            <img src={props.Image} width={130} height={130}></img>
                        </div>
                        <h3>{props.Name}</h3>
                        <p><b>{"Rs."}{price}</b></p>
                        <p><b>{props.Offer}{"% Offer"}</b></p>
                        <button className={styles17.offerbutton} onClick={button}><b>Apply Offer</b></button>
                    </div>
                </div>
            </div>
        </div>   
    );
}

export default Cartlist;