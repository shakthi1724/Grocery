import styles19 from './top.module.css';
import Toplist from './toplist';
import iphone1 from '../images/iphone.jfif';
import oppo1 from '../images/oppo.jfif';
import pixel1 from '../images/pixel.jfif';
import oneplus1 from '../images/oneplus.jfif';
import cam1 from '../images/camera1.jfif';
import cam2 from '../images/camera2.jfif';
import cam3 from '../images/camera3.jfif';
import cam4 from '../images/camera4.jfif';
import lap1 from '../images/laptop1.jfif';
import lap2 from '../images/laptop2.jfif';
import lap3 from '../images/laptop3.jfif';
import lap4 from '../images/laptop4.jfif';
import gim1 from '../images/gimbal1.jfif';
import gim2 from '../images/gimbal2.jfif';
import gim3 from '../images/gimbal3.jfif';
import gim4 from '../images/gimbal4.jfif';
import { useState } from 'react';
import {useEffect} from "react";



function Top() {

    // const deals=[
    //     {
    //         Image:iphone1,
    //         Name:"Apple iPhone 14",
    //         Price:79000,
    //         Offer:23,
    //     },
    //      {
    //         Image:cam1,
    //         Name:"Canon",
    //         Price:250000,
    //         Offer:13,
    //     },
    //     {
    //         Image:lap3,
    //         Name:"Intel",
    //         Price:72000,
    //         Offer:15,
    //     },
    //     {
    //         Image:gim4,
    //         Name:"Zhyin smooth",
    //         Price:45670,
    //         Offer:60,
    //     },
    //     {
    //         Image:oneplus1,
    //         Name:"One plus 17 maxpro",
    //         Price:69000,
    //         Offer:52,
    //     },
    //     {
    //         Image:cam3,
    //         Name:"Sony plus",
    //         Price:356800,
    //         Offer:52,
    //     },
    //     {
    //         Image:gim2,
    //         Name:"Feyu Tech",
    //         Price:33000,
    //         Offer:43,
    //     },
       
    //     {
    //         Image:cam4,
    //         Name:"Dumbal",
    //         Price:150250,
    //         Offer:20,
    //     },
    //     {
    //         Image:lap1,
    //         Name:"Hp",
    //         Price:74000,
    //         Offer:12,
    //     },
    //     {
    //         Image:pixel1,
    //         Name:"Google Pixel 14 pro",
    //         Price:49000,
    //         Offer:19,
    //     },
    //     {
    //         Image:lap2,
    //         Name:"Lenovo",
    //         Price:56000,
    //         Offer:26,
    //     },
    //     {
    //         Image:oppo1,
    //         Name:"Oppo f9",
    //         Price:29000,
    //         Offer:15,
    //     },
       
    //     {
    //         Image:lap4,
    //         Name:"Asus",
    //         Price:39000,
    //         Offer:45,
    //     },
    //     {
    //         Image:gim1,
    //         Name:"Manfrotto",
    //         Price:24000,
    //         Offer:23,
    //     },
    //     {
    //         Image:cam2,
    //         Name:"Nikkon",
    //         Price:690005,
    //         Offer:25,
    //     },
       
    //     {
    //         Image:gim3,
    //         Name:"Osmo",
    //         Price:29000,
    //         Offer:10,
    //     }
       
    // ]

    const[deals,setdeals]=useState([]);

    useEffect(() => {
        fetch("https://6316f796cb0d40bc414820c3.mockapi.io/camera").then((response)=>{
           console.log(response);
        if (response.ok) {
               return response.json(); 
            }
            return false;
        }).then((items)=>{
            console.log(items);
           var sortitem= items.sort((a,b)=>{
               return (b.Offer-a.Offer);
            })
            setdeals((prev)=>{
                return [...prev,sortitem[0],sortitem[1]];
            });
        }).then(()=>{
            fetch("https://6316f796cb0d40bc414820c3.mockapi.io/laptop").then((response)=>{
                console.log(response);
             if (response.ok) {
                    return response.json(); 
                 }
                 return false;
             }).then((items)=>{
                 console.log(items);
                var sortitem= items.sort((a,b)=>{
                    return (b.Offer-a.Offer);
                 })
                 setdeals((prev)=>{
                     return [...prev,sortitem[0],sortitem[1]];
                 });
             })
        }).then(()=>{
            fetch("https://6316f796cb0d40bc414820c3.mockapi.io/mobile").then((response)=>{
                console.log(response);
             if (response.ok) {
                    return response.json(); 
                 }
                 return false;
             }).then((items)=>{
                 console.log(items);
                var sortitem= items.sort((a,b)=>{
                    return (b.Offer-a.Offer);
                 })
                 setdeals((prev)=>{
                     return [...prev,sortitem[0],sortitem[1]];
                 });
             })
        }).then(()=>{
            fetch("https://6316f796cb0d40bc414820c3.mockapi.io/gimbal").then((response)=>{
                console.log(response);
             if (response.ok) {
                    return response.json(); 
                 }
                 return false;
             }).then((items)=>{
                 console.log(items);
                var sortitem= items.sort((a,b)=>{
                    return (b.Offer-a.Offer);
                 })
                 setdeals((prev)=>{
                     return [...prev,sortitem[0],sortitem[1]];
                 });
             })
        })
    },[]);

console.log(deals);


    return(
        <div>
        <div className={styles19.container}>
            <h1 className={styles19.menu}> Top Deals</h1>
            <div className={styles19.wrapper}>
                {
                    deals.map((topdeals) => {
                        return <Toplist Image={topdeals.Image} Name={topdeals.Name} Price={topdeals.Price} Offer={topdeals.Offer}></Toplist>
                    })
                }
            </div>
        </div>
    </div>
    );
}


export default Top;