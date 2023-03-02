import React from 'react';
import './Coin.css';

function Coin(props){
    return (<div className="Coin">
            <img src={props.info.currCoin.imgSrc} alt={props.info.currCoin.side} />
    </div>);
    
}

export default Coin;