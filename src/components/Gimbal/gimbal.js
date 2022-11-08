import styles10 from './gimbal.module.css';
import Gimballist from './gimballist';
import { useState,useEffect } from 'react';


function Gimbal() {
   
    const [items,setItems]=useState([]);
    useEffect(()=>{
        fetch('https://6316f796cb0d40bc414820c3.mockapi.io/gimbal').then((response)=>{
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
        <div className={styles10.container}>
            <h1 className={styles10.menu}>Gimbal</h1>
        <div className={styles10.wrapper}>
         {
            items.map((gimbal) => {
            return <Gimballist key={gimbal.id} Image={gimbal.Image} Name={gimbal.Name} Price={gimbal.Price} Offer={gimbal.Offer} details={gimbal}></Gimballist>
            })
        }
    </div>
    </div>
    </div>
    );
}

export default Gimbal;
