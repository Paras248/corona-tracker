import React, { useEffect, useState } from "react";
import { fetchDailyData } from "../../api";
import { Line } from "react-chartjs-2";
import styles from "./Chart.module.css";

function Chart({data: {confirmed, recovered, deaths}, country}){
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        async function fetchApi(){
            setDailyData(await fetchDailyData());
           
        }
        fetchApi();
    },[])

    const lineChart = (
        dailyData.length 
        ?(
        <Line 
        data={{
            labels: dailyData.map(({date}) => date),
            datasets: [{
                data: dailyData.map(({confirmed}) => confirmed),
                label: "Infected",
                borderColor: "#3333ff",
                fill: "true"
            },{
                data: dailyData.map(({deaths}) => deaths),
                label: "Deaths",
                borderColor: "red",
                backgroundColor: "rgba(255, 0, 0, 0.5)",
                fill: "true"

            }]
        }}
        />):null
    )
    
  
    return(
        <div className={styles.container}>
             {lineChart}
        </div>
    );
}

export default Chart;