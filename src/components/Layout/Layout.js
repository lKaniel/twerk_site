import React from 'react';

import * as classes from "./Layout.module.scss"
import "normalize.css"
import "../../assets/css/main.scss"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import useOnlineStatus from "../../hooks/useOnlineStatus";
import {useSelector} from "react-redux";


const Layout = ({children}) => {
    const isOnline = useSelector(state => state.media.isOnline)
    return (
        <>
            <main className={classes.Wrapper}>
                <Navbar/>
                <section className={classes.Layout}>
                    {children}
                </section>
                <Footer/>
            </main>
        </>
    );
};

export default Layout;
