import React from "react";
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, TimeScale,Legend,Tooltip } from "chart.js"
import {Line} from 'react-chartjs-2'
import {useState} from "react";
import { Link, useNavigate } from 'react-router-dom'
import moment from "moment"
import stl from './charts.module.css'
import { useSelector } from "react-redux";


//Tooltip, Legend, TimeScale

ChartJS.register ({
    CategoryScale,
    LineElement,
    LinearScale,
    PointElement,
    TimeScale,
    Legend,
    Tooltip
})

const HistoryChart: any = () => {

    const navigate = useNavigate()
    const ChartData = useSelector((state: any) => state.chart.chartData)

    const [timeFormat, setTimeFormat] = useState<string>("24h")
    const [actveClass1, setActiveClass1] = useState<string>('active')
    const [actveClass7, setActiveClass7] = useState<string>('')
    const [actveClass365, setActiveClass365] = useState<string>('')

    const determineTimeFormat = () => {
        switch (timeFormat) {
            case "24h" :
                return day
            case "7d":
                return week
            case "1y":
                return year
            default:
                return day
        }
    }

    const {day, week, year, detail} =  ChartData

    console.log(ChartData, 'chartData')
   
    console.log(day, "day");
    
    

    let arrWeek: any = []
    let arrayYear: any = []

    const determineDateFormat = () => {
        switch(timeFormat) {
            case "24h":
                return array
            case "7d":
                
                return arrWeek
            case "1y":
                return arrayYear

        }
    }

    if(!day && !week && !year)
    {
       return;
    }


    let array: any = [] ;

    if(day){

    for(let time of day )
    {
        let newTime =   new Date(time.x);

        if(newTime.getMinutes() == 0)
        {
            array.push(newTime.getHours() + ':' +newTime.getMinutes()+'0');
            continue;
        }

        array.push(newTime.getHours() + ':' +newTime.getMinutes());
    }
    }

    if  (week) {
        for (let wTime of week) {
            let newWeek = new Date(wTime.x)
            //let last = newWeek.getDay()
                arrWeek.push(moment(newWeek).format("DD-MM-YYYY"));
        }
    }

    if (year) {
        for (let yTime of year) {
            let newYear = new Date(yTime.x)
            arrayYear.push(moment(newYear).format("DD-MM-YYYY"));
        }
    }



    const data = {
        labels: determineDateFormat(),
        datasets: [{
            label: `${detail.name} price in $`,
            data: determineTimeFormat(),
            backgroundColor: [
               "green"
            ],
            borderColor: [
                "green"
            ],
            fill: true,
            lineTension: 0.1,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "green",
            pointBorderWidth: 0,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            pointHitRadius: 10,

        }],



    }
    
    const options: any = {

        lineHeightAnnotation: {
            always: true,
            hover: false,
        },
    
        responsive: true,
            legend: {
            display: true
        },
    
            tooltips: {
            mode: "index",
                intersect: false,
        },
    
        animation: {
            duration: 2000,
        },
        scales: {
    
           x: {
            
           }
          },
    };
    
    

    const changeClasses24 = () => {
        setActiveClass1('active')
        setTimeFormat("24h")
        setActiveClass7('')
        setActiveClass365('')
    }

    const changeClasses7 = () => {
        setActiveClass7('active')
        setTimeFormat("7d")
        setActiveClass1('')
        setActiveClass365('')
    }

    const changeClasses365 = () => {
        setActiveClass365('active')
        setTimeFormat("1y")
        setActiveClass1('')
        setActiveClass7('')
    }



    return (
        <div className={stl.myChart}>
            <Line options={options} data={data} width={400} datasetIdKey="id" className={stl.myLine}/>
            <div className="d-flex justify-content-center">
                <div className={`btn btn-outline-secondary p-1 btn-sm ${actveClass1}`} onClick={() => changeClasses24()}>24 h</div>
                <div className={`btn btn-outline-secondary p-1  btn-sm mx-1 ${actveClass7}`} onClick={() => changeClasses7()}>7 d</div>
                <div className={`btn btn-outline-secondary p-1  btn-sm ${actveClass365}`} onClick={() => changeClasses365()}>1 y</div>
            </div>
            <div>
                {/* <Link  to={'/home'}
                className={'btn btn-outline-secondary btn-sm mt-2'}
                > {"<< Select Coin"}</Link> */}
                <button onClick={() => navigate(-1)}>{"<< Select Coin"}</button>
            </div>
        </div>
    )
}

export default HistoryChart