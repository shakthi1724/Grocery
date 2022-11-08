import styles16 from './cartlist.module.css';
import Cartlist from './cartlist';
import { useState, useEffect, useContext } from 'react';
import Appcontext from '../../context';




function Cart() {

  const context = useContext(Appcontext);

  useEffect(() => {
    console.log(context.cart);
  }, [])

  return (
    <div className={styles16.container}>
      <div className={styles16.wrapper}>
        {
          context.cart.map((data) => {
            return <Cartlist key={data.id} Image={data.Image} Name={data.Name} Price={data.Price} Offer={data.Offer}></Cartlist>
          })
        }
      </div>
    </div>
  );
}

export default Cart;