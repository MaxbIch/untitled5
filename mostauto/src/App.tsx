import './App.css'
import './AppMedia.css'
// // @ts-ignore
// import PrivacyPolicy from './pages/PrivacyPolicy'
// @ts-ignore
import Navbar from './components/Navbar'
// @ts-ignore
import Main from './components/Main'
// @ts-ignore
import Tariffs from './components/Tariffs'
// @ts-ignore
import Footer from './components/Footer'
// @ts-ignore
import Form from './components/Form'
// @ts-ignore
import Delivery from './components/Delivery'
// @ts-ignore
import Popular from './components/Popular'
// @ts-ignore
import CookieBanner from './components/CookieBanner'


import {useState} from "react";
import Header from "./components/Header.tsx";


function App() {
    const [menuActive, setMenuActive] = useState(false);

    return (
        <div className="app-content">
            <Header menuActive={menuActive} setMenuActive={setMenuActive}/>

            <Navbar menuActive={menuActive} setMenuActive={setMenuActive}/>

            <Main/>

            {/*<Popular />*/}

            <Delivery/>

            <Tariffs/>

            <Form/>

            <Footer/>

            <CookieBanner/>


        </div>

    );

}

export default App
