import React from 'react';
import Navigation from './Navigation';
import Details from './Details';
function Contactpage(props){
    return (
        <>
         <Navigation/>
        
        <div style={{
            color:"green",
            fontSize:"35px",
            marginTop:"50px",
            marginLeft:"20px",
         

        }}>
            <h5>Follow us on Facebook & Instagram for up to date information on our collections, style tips, our café & upcoming projects.

You can email us at customercare@fashionplus.lk with any queries or use the contact form here to reach us.</h5>
            <div style ={{color:"purple",
            fontSize:"35px",
            marginTop:"70px",
            marginLeft:"50px",


            }}><h4>Contact details:</h4>
            <h5>Sales Manager: sp@fplus.lk/</h5>
            <h5>HR Manager: dw@plus.k</h5>
            <h5>colombo 07.{props.proName}</h5>
            </div>
            <img src="/images/image10.jpg" height="400px" width="400px"/><br/> <br/>
            
        </div>
        </>
    );
}
export default Contactpage;