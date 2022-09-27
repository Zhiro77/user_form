import React from 'react';
import {Link} from "react-router-dom";
import {CoinsData} from '../../../model'
import stl from "./charts.module.css"


interface Icoin {
    coin: CoinsData
}

const Coin = ({coin} : Icoin | any) => {
    return (
        <div className={stl.CoinApp}>
            <Link to={`/home/${coin.id}`}>
                <li className={stl.Coin}>
                    <div>
                    <img className={stl.CoinImg} src={coin.image} alt="image"/>
                    <p className='text-center mt-1'>{coin.name}</p>
                    </div>
                    <span className={'text-decoration-none'}><b>Current Price:</b>{coin.current_price} $</span>
                    <span>
                        <i className={'fas fa-sort-down align-middle mr-1'}></i>
                        <b>Current Price in 1 day:</b>
                        {coin.price_change_percentage_24h} %</span>
                 
                </li>
            </Link>
        </div>
    );
};

export default Coin;