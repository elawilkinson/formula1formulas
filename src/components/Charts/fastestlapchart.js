import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
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
        text: 'Fastest Laps 2021',
      },
    },
  };

function FastestLapChart ({fastestLaps}) {
  console.log(fastestLaps)
  const labels = fastestLaps[1];
  const data = {
    labels,
    datasets: [
      {
        label: 'Time in seconds',
        data: fastestLaps[2],
        backgroundColor: 'rgba(2, 99, 132, 0.5)',
      },
    ],
  };

    return(
        <div className='data-chart'>
            <Bar className='data-graphics'
              height={100}
              options={options} 
              data={data} />
        </div>
    )
}

export default FastestLapChart