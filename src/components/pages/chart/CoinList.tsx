
import React, { useEffect, useState} from 'react';
import coinGecko from "../../../apis/CoinGecko";
import {CoinsData} from "../../../model";
import Coin from "./Coin";


const CoinList = () => {

    const [coins, setCoins] = useState<CoinsData[]>([])
    const [isLoading, setIsLoading] = useState(false)

    const [currentCard, setCurrentCard] = useState<any | null>(null)
   
  
    


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


    

    const dragStartHandler = (e: any, coin: any) => {

        console.log('drag', coin);
        
      
        setCurrentCard(coin)
    }

    const dragEndHandler = (e: any) => {
      //  e.target.style.background = 'antiquewhite'
    }

    const dragOverHandler = (e: any) => {
        e.preventDefault()
      //  e.target.style.background = '#90EE90'
        
        
    }
    
    const dropHandler = (e: any, coin: any) => {
        e.preventDefault()
       
        setCoins( coins.map((c : any) => {
            if (c.id === coin.id) {
                return {...c, ath: currentCard.ath}
            }

            if (c.id === currentCard.id) {
                return {...c, ath: coin.ath}
            }

            return c
        }))
       
       

     //   e.target.style.background = 'antiquewhite'

        console.log('drop', coin);
        
    }


    const sortCoins = (a: any, b: any) => {

            if (a.ath > b.ath) {
                return 1
            } else {
                return -1
            }
        
    }




    return (
        <div>
            <h3>Select Coin</h3>
            <ul>
                {
                    isLoading ?
                       <div>Loading ...</div>
                        :  coins.sort(sortCoins).map((coin) => {
                            return <div key={coin.id}
                            draggable={true}
                            onDragStart={(e: any) => dragStartHandler(e, coin)}
                            onDragLeave={(e: any) => dragEndHandler(e)}
                            onDragEnd={(e: any) => dragEndHandler(e)}
                            onDragOver={(e: any) => dragOverHandler(e)}
                            onDrop={(e: any) => dropHandler(e, coin)}
                            >
                                <Coin key={coin.id} coin={coin} draggable={true}  />
                            </div>
                            
                             
                            
                            
                           
                        })

                }
            </ul>
        </div>
    );
};

export default CoinList;