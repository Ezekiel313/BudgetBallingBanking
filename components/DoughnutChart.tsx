"use client"

import React from 'react'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import { Doughnut } from'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const DoughnutChart = ({accounts}: DoughnutChartProps) => {
    const data = {
        datasets: [

            {
                label: 'Banks',
                data: [1250.35, 190.78],
                backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'],
                
                borderWidth: 1
            }
        ],
        labels: ['Bank 1', 'Bank 2']
    }



  return  <Doughnut data= {data} 
  options = {{
    cutout: '55%',
    plugins: {
        legend: {
            display: false
        }
    }
  }}
  
  />
    
  
}

export default DoughnutChart
