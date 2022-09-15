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
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Pole positions by constructor',
      },
    },
  };

function Chart ({polePositionNumbers, constructorList}) {
  const labels = constructorList;
  const data = {
    labels,
    datasets: [
      {
        label: 'Pole positions',
        data: polePositionNumbers,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };

    return(
        <div>
            <Bar options={options} data={data} />
        </div>
    )
}

export default Chart