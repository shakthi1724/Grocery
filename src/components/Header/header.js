import styles1 from './header.module.css';
import { BiSearchAlt } from 'react-icons/bi';
import {FaCartArrowDown} from 'react-icons/fa';
import {FaUserCircle} from 'react-icons/fa';
import {Routes,Route,Link,useNavigate} from 'react-router-dom'
// import {useNavigate} from "react-router-dom";
import {useContext} from 'react';
import Appcontext from '../../context';
import { selectUser } from '../../features/userslice';
import { useSelector } from 'react-redux';
import { logout } from '../../features/userslice';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';


function Header() {

    const user1 = useSelector(selectUser);
    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    }
    

    const navigate= useNavigate();
    const cartno=useContext(Appcontext);
    const s=cartno.cart;
    const cartHandler = () => {
        if(user1.loggedIn==true){
            navigate("/cart");
        }else{
            alert("Please Login to enter cart")
        }
        
    }

    return (
        <div>
            <header className={styles1.header}>
                <div className={styles1.container}>
                    <div className={styles1.wrapper}>
                        <div className={styles1.madhouse}>
                           <h1>MadHouse</h1>
                          
                        </div>
                        <div className={styles1.searchbox}>
                        <input type="text" className={styles1.input} placeholder="Search essentials,groceries,and more..."></input>
                       <BiSearchAlt color='gray' size="18"/>
                        </div>
                        <div className={styles1.navbar}>
                            <nav className={styles1.navlist}>
                            {user1.loggedIn ? <button className={styles1.logoutbtn} onClick={(e)=>{
                handleLogout(e)
                console.log();
            }
                }><FaUserCircle size="18px"/> Logout</button>: <button className={styles1.signinbtn} onClick={()=>{
                    navigate('/login')
                }}><FaUserCircle size="18px"/> Login</button>}
                                
                            </nav>
                        </div>
                        <div className={styles1.carts}>
                            <span className={styles1.cart} href="#" onClick={cartHandler}><FaCartArrowDown size="25px"/><span className={styles1.count}>{s.length}</span></span>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;