import styles14 from './mobile.module.css';
import Mobilelist from './mobilelist';
import { useState,useEffect } from 'react';

function Mobile() {

    const [items,setItems]=useState([]);
useEffect(()=>{
    fetch('https://6316f796cb0d40bc414820c3.mockapi.io/mobile').then((response)=>{
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
        <div className={styles14.container}>
            <h1 className={styles14.menu}>Mobile</h1>
        <div className={styles14.wrapper}>
         {
            items.map((mobile) => {
            return <Mobilelist key={mobile.id} Image={mobile.Image} Name={mobile.Name} Price={mobile.Price} Offer={mobile.Offer} details={mobile}></Mobilelist>
            })
        }
    </div>
    </div>
    </div>
    );
}

export default Mobile;

