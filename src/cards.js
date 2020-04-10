import React from 'react' ;
import {dummy} from './dummy';
import './cards.css';

const Cards=({property})=>{


return(
    <div className="  bg-light-green dib grow bw2 shadow-5 hey" id="box">
        <div>
            <h1>{property}</h1>
        </div>
    </div>
);
}
export default Cards; 


