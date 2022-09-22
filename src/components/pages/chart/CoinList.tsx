
import React, { useEffect, useState} from 'react';
import coinGecko from "../../../apis/CoinGecko";
import {CoinsData} from "../../../model";
import Coin from "./Coin";


const CoinList = () => {

    const [coins, setCoins] = useState<CoinsData[]>([])
    const [isLoading, setIsLoading] = useState(false)

   
    


    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
           const response = await coinGecko.get(`/coins/markets`, {
            params: {
              vs_currency: "usd",
              ids:"bitcoin, ethereum, binancecoin,cardano,staked-ether, cosmos",
            },
          })
            setCoins(response.data)
            setIsLoading(false)
        }

        fetchData()
    }, [])




    return (
        <div>
            <ul>
                {
                    isLoading ?
                       <div>Loading ...</div>
                        :  coins.map((coin) => {
                            return <Coin key={coin.id} coin={coin} />
                        })

                }
            </ul>
        </div>
    );
};

export default CoinList;