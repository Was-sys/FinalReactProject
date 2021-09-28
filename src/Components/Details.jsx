import React from 'react';
import Contactpage from './Contactpage';


 const Details = () => {
     const name="Fashoin Plus Contact Details";
    return (
        <div>
            Online shopping platform :{name}
            <Contactpage proName = {name}/>
        </div>
    );
};
export default Details;