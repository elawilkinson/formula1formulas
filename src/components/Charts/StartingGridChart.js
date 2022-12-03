import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { polesecondthird } from '../../libs/polesecondthird.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: '2021 starting grids - top positions',
      },
    },
  };

  function StartingGridChart ({gridStartList}) {
    let labels = []
    let redBull = []
    let merc = []
    let otherTeams = []
    polesecondthird.forEach(element => {
      labels.push(element.race)
      redBull.push(element.redbull)
      merc.push(element.mercedes)
      otherTeams.push(element.other)
    })

    const data = {
      labels,
      datasets: [
        {
          label: 'Red Bull',
          data: redBull,
          backgroundColor: 'rgba(255, 99, 132, 1)',
        },
        {
          label: 'Mercedes',
          data: merc,
          backgroundColor: 'rgba(53, 162, 235, 1)',
        },
        {
          label: 'Others',
          data: otherTeams,
          backgroundColor: 'rgba(700, 162, 235, 3)',
        }
      ],
    };


  

    return(
        <div className='data-chart'>
            <Line height={100} options={options} data={data} />
        </div>
    )
}

export default StartingGridChart