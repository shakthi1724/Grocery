// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Login from './components/Login/login';
import Product from './components/Product/product';
import { useState,useEffect } from 'react';
import Camera from './components/Camera/camera';
import { Routes, Route,Link } from 'react-router-dom';
import Gimbal from './components/Gimbal/gimbal';
import Laptop from './components/Laptop/laptop';
import Mobile from './components/Mobile/mobile';
import Appcontext from './context';
import Cart from './components/Cart/cart';
import Slideshow from './components/Slideshow/slide';
// import Top from './components/Topdeals/top';
import { useSelector} from 'react-redux';
import { selectUser } from './features/userslice';




function App() {

  // const admin = {
  //   email: "sivashakthiarun.c@gmail.com",
  //   password: "Shakthi17"
  // }

  // const [user, setUser] = useState({ name: "", email: "" });
  // const [error, setError] = useState("");

  // const login = (userdata) => {
  //   if (userdata.email == admin.email && userdata.password == admin.password) {
  //     setUser({
  //       name: userdata.name,
  //       email: userdata.email
  //     });
  //   }
  //   else {
  //     setError("Please fill the data")
  //   }

  // }
  // const logout = () => {
  //   setUser({ name: "", email: "" })
  // }

  const [cart, setCart] = useState([]);

  const cartHandler = (data) => {
    setCart((prev) => {
      return [data,...prev];
    });
  }

 

  const user1=useSelector(selectUser);
  useEffect(()=>{
    console.log(user1.loggedIn);
  },[user1])



    return (
      <div className="App">
        <Appcontext.Provider value={{ cart, cartHandler }}>
          {/* {(user.email !="") ? (<div><Header></Header>
      <Product></Product>
   
      </div>) : (<Login login={login} error={error}></Login>)} */}
          <Header></Header>
          <Slideshow></Slideshow>
          {/* <Top></Top> */}
          <Routes>
            <Route index element={<Product></Product>}></Route>
            <Route path='login' element={<Login></Login>}></Route>
            <Route path="/camera" element={<Camera></Camera>} />
            <Route path="/gimbal" element={<Gimbal></Gimbal>}></Route>
            <Route path="/laptop" element={<Laptop></Laptop>}></Route>
            <Route path="/mobile" element={<Mobile></Mobile>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
            {/* <Route index element={<Top></Top>}></Route> */}
          </Routes>
        </Appcontext.Provider>
      </div>
    );
  
}

export default App;
