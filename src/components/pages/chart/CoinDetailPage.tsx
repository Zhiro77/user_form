import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CoinGecko from '../../../apis/CoinGecko';
import HistoryChart from './HistoryChart';
import { CoinsPriceData } from '../../../model';
import { useDispatch } from 'react-redux';
import { setChart } from '../../../redux/slices/ChartSlice';

const CoinDetailPage = () => {

    const [coinData, setCoinData] = useState<any>({})
    const [isLoading, setIsLoading] = useState(false)

    const dispatch = useDispatch()


    const {id} = useParams()
 
    const formatData = (data: any) => {
        return data.map((el: any) => {
            return {
                x: el[0],
                y: el[1].toFixed(2)
            }
        })
    }


    useEffect(() => {

        const fetchData =async () => {
            setIsLoading(true)
           const resultDay = await CoinGecko.get(`/coins/${id}/market_chart`, {
               params: {
                   vs_currency: "usd",
                   days: "1"
               }
           })

            const resultWeek = await CoinGecko.get(`/coins/${id}/market_chart`, {
                params: {
                    vs_currency: "usd",
                    days: "7"
                }
            })

            const resultYear = await CoinGecko.get(`/coins/${id}/market_chart`, {
                params: {
                    vs_currency: "usd",
                    days: "365"
                }
            })

            /* const resultWeek = await CoinGecko.get(`/coins/${id}/market_chart?vs_currency=usd&days=1`)*/

  //          const resultYear = await CoinGecko.get(`/coins/${id}/market_chart?vs_currency=usd&days=365`)

           const detail = await CoinGecko.get(`/coins/markets?vs_currency=usd&ids=${id}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)

        //    setCoinData({
        //         day: formatData(resultDay.data.prices),
        //         week:formatData(resultWeek.data.prices),
        //         year:formatData(resultYear.data.prices),
        //         detail: detail.data[0],
        //    })

        dispatch(setChart({
                 day: formatData(resultDay.data.prices),
                 week:formatData(resultWeek.data.prices),
                 year:formatData(resultYear.data.prices),
                 detail: detail.data[0],
        }))


            setIsLoading(false)
            
        }

        fetchData()
        

    }, [])


    return (
        <div>
            {
                isLoading   ? <div>Loading ...</div>
                            :  <HistoryChart  />
                            
            }
        </div>
    );
};

export default CoinDetailPage;