import React from 'react';
import Navigation from './Navigation';
import styles from './navi.module.css';

function Homepage(){
    return (
        <>
        <Navigation/>
        <div className={styles.bgimg}>
        <img src="/images/image2.jpg"height="400px" width="600px"/>
        <img src="/images/image3.jpg" height="400px" width="600px"/>
     <h1 style={{fontFamily:"fantasy",fontSize:"40px",}}><center>......we are providing your requirments.....</center></h1>
     

        </div>
        
        </>
    );
}
export default Homepage;