import styles8 from './camera.module.css';
import Cameralist from './cameralist';
import { useState,useEffect } from 'react';


function Camera() {
    const [items,setItems]=useState([]);
useEffect(()=>{
    fetch('https://6316f796cb0d40bc414820c3.mockapi.io/camera').then((response)=>{
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
        <div className={styles8.container}>
            <h1 className={styles8.menu}>Camera</h1>
            <div className={styles8.wrapper}>
             {
                items.map((camera) => {
                return <Cameralist key={camera.id} Image={camera.Image} Name={camera.Name} Price={camera.Price} Offer={camera.Offer} details={camera}></Cameralist>
                })
            }
        </div>
        </div>
    );
}

export default Camera;