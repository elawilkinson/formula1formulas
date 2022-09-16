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
        text: 'Mercedes vs Red Bull wins',
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const dummyArray1 = [1, 4, 9, 16, 4, 11, 6, 0, 9, 1, 6, 12]
  const dummyArray2 = [5, 4, 2, 6, 10, 11, 12, 2, 5, 4, 3, 10]

  export const data = {
    labels,
    datasets: [
      {
        label: 'Red Bull',
        data: dummyArray1,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Mercedes',
        data: dummyArray2,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

function FastestLapChart ({fastestLaps}) {
    return(
        <div>
            <Bar options={options} data={data} />
        </div>
    )
}

export default FastestLapChart