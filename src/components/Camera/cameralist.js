import styles9 from './cameralist.module.css';
import { useState } from 'react';
import { useContext } from 'react';
import Appcontext from '../../context';


function Cameralist(props) {

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
            <div className={styles9.container}>
                <div className={styles9.wrapper}>
                    <div className={styles9.item}>
                        <div className={styles9.imgarea}>
                            <img src={props.Image} width={130} height={130}></img>
                        </div>
                            <h3>{props.Name}</h3>
                            <p><b>{"Rs.₹"}{price}/-</b></p>
                            <p><b>{props.Offer}{"% Offer"}</b></p>
                            <button className={styles9.offerbutton} onClick={button}><b>Apply Offer</b></button><br></br><br></br>
                            <button className={styles9.cartbutton} onClick={clickHandle}><b>Add to Cart</b></button>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Cameralist;