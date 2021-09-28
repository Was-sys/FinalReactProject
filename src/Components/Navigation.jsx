import React from 'react';
import styles from "./navi.module.css";
import{Link}from "react-router-dom";

 function Navigation() {
    return (
        <div className={styles.navigate}>
           <h1>!!!! FASHON PLUS !!!!</h1>
           <div className={styles.Nbuttoncontainer}>
               <Link to="/">
               <button className ={styles.nbutton}>Home</button>
               </Link>
               <Link to="/Contact">
               <button className ={styles.nbutton}>Contact</button>
               </Link>
               <Link to="/About">
               <button className ={styles.nbutton}>About</button>
               </Link>
               <Link to="/Collection">
               <button className ={styles.nbutton}>collections</button>
               </Link>
        </div>
        </div>
        
    )
}
export default  Navigation;
