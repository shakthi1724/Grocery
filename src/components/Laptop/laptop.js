import styles12 from './laptop.module.css';
import Laptoplist from './laptoplist';
import { useState,useEffect } from 'react';



function Laptop() {

    const [items,setItems]=useState([]);
useEffect(()=>{
    fetch('https://6316f796cb0d40bc414820c3.mockapi.io/laptop').then((response)=>{
    if(response.ok){
        return response.json()
    }
    return false
})
.then((data)=>{
    setItems(data)
})
  }, []);

    return(
        <div>
        <div className={styles12.container}>
            <h1 className={styles12.menu}>Laptop</h1>
        <div className={styles12.wrapper}>
         {
            items.map((laptop) => {
            return <Laptoplist key={laptop.id} Image={laptop.Image} Name={laptop.Name} Price={laptop.Price} Offer={laptop.Offer} details={laptop}></Laptoplist>
            })
        }
    </div>
    </div>
    </div>
    );
}

export default Laptop;