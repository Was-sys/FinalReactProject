import React from 'react';
import {useState} from 'react';
import Navigation from './Navigation';
import styles from './navi.module.css';

export default function Collection(props) {
    const [count, setCount] = useState(0);

    return (
        <>
        <Navigation/>
        <h2 style={{
            marginTop:"10px",
            marginBottom:"20px",
            fontStyle:"italic",
            fontSize:"20pt",
            color:"Background",
        }}><center>Our some Collections are here.
        Further you can log in your email</center></h2>
        <center>
        <img src="/images/image1.jpg" height="400px" width="600px"/><br/>
        <button className ={styles.nbutton}>Login here </button>
        </center>
        
    <div>
        <img src="/images/image7.jpg" height="300px" width="200px"/><br/>
           <b>if you like please click Add button</b> : {count} 
           <button className ={styles.nbutton} onClick={() => setCount(count+1)}>Add</button><br/>
           <img src="/images/image10.jpg" height="400px" width="350px"/><br/>
           <b>if you like please click Add button</b> : {count} 
           <button className ={styles.nbutton} onClick={() => setCount(count+1)}>Add</button>
           <div className ={styles.img}>
        <img src="/images/image5.jpg" height="400px" width="300px" /><br/>
           <b>if you like please click Add button</b> : {count}
           <button className ={styles.nbutton} onClick={() => setCount(count+1)}>Add</button><br/>
           <img src="/images/image11.jpg" height="400px" width="300px" /><br/>
           <b>if you like please click Add button</b> : {count}
           <button className ={styles.nbutton} onClick={() => setCount(count+1)}>Add</button>
        </div>
        </div>
        
        
        </>
    )
}
