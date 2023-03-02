import { useState } from 'react';
import React from 'react';
import {choice} from './helpers.jsx';
import Coin from './Coin.jsx';

function CoinContainer(){
    const [nFlips, setNFlips] = useState(0);
    const [nHeads, setNHeads] = useState(0);
    const [nTails, setNTails] = useState(0);
    const [currCoin, setCurrCoin] = useState(null);

    let coins = [
        {side : 'heads', imgSrc : 'https://tinyurl.com/react-coin-heads-jpg'},
        {side : 'tails', imgSrc : 'https://upload.wikimedia.org/wikipedia/commons/5/5a/98_quarter_reverse.png'}
    ];

    function flipCoin(){
        const newCoin = choice(coins);
        setCurrCoin(newCoin);
        setNFlips(nFlips + 1);
        setNHeads(() => {
            return nHeads + (newCoin.side === 'heads'? 1:0);
        });

        setNTails(() => {
            return nTails + (newCoin.side === 'tails'? 1:0);
        });
    }

    function handleClick(){
        flipCoin();
    }


    return(
    <div className="CoinContainer">
        <h2>Lets Flip a coin</h2>
        {currCoin && <Coin info={{currCoin}} />}
        <button onClick={handleClick}>Flip Me!</button>
        <p>Out of {nFlips}, there have been {nHeads} heads and {nTails} tails.</p>
    </div>)
}

export default CoinContainer;