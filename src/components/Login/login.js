import styles2 from './login.module.css';
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { login } from "../../features/userslice";
import {useNavigate} from "react-router-dom";

function Login() {

    // const [userdata, setData] = useState({ name: "", email: "", password: "" })

    // const submitHandler = (s) => {
    //     s.preventDefault();
    //     login(userdata);
    // }

    // const nameHandler = (s) => {
    //     setData({ ...userdata, name: s.target.value })
    // }

    // const mailHandler = (s) => {
    //     setData({ ...userdata, email: s.target.value });
    // }

    // const passwordHandler = (s) => {
    //     setData({ ...userdata, password: s.target.value });
    // }


    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const dispatch=useDispatch();
    const nav = useNavigate();

   const handleSubmit=(e)=>{
     e.preventDefault();
     nav('/')
     dispatch(
       login({
         name:name,
         email:email,
         password:password,
         loggedIn:true,  
       })
     );

     
   };

    return (
        <div>
            <form className={styles2.login} onSubmit={(e)=>handleSubmit(e)} >
                <h1 className={styles2.h1}>MadHouse...!</h1>
                {/* {(error != "") ? (<div className={styles2.error}>{error}</div>) : ""} */}
                <div className={styles2.data}>
                    <label for='name'>Name :</label>
                    <input type='name' className={styles2.inputbox} id='name' value={name} onChange={(e)=>setName(e.target.value)}
                        placeholder='Enter your Name' required></input>
                </div>
                <div className={styles2.data}>
                    <label for='mailid'>Mail Id :</label>
                    <input type='email' className={styles2.inputbox} id='mailid' value={email} onChange={(e)=>setEmail(e.target.value)}
                        placeholder='Enter your Mail Id' required></input>
                </div>
                <div className={styles2.data}>
                    <label for='pwd'>Password:</label>
                    <input type='password' className={styles2.inputbox} id='pwd' value={password} onChange={(e)=>setPassword(e.target.value)}
                        placeholder='Enter your Password' required></input>
                </div><br></br><br></br>
                <button type='submit' className={styles2.submit} ><b>Submit</b></button>
            </form>
        </div>
    );

}
export default Login;