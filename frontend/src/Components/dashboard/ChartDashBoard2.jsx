import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function ChartDashBoard2({ graphArr }) {

    const options2 = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    boxWidth: 20,
                    boxHeight: 20,
                },
            },
            title: {
                display: true,
            },
        },
    };

    const data = {
        labels: ['Germany', 'India', 'South Africa', 'China', 'United States', 'France', 'Russia', 'Japan'],
        datasets: [
            {
                label: '# of Votes',
                data: graphArr[0] ? graphArr[0] : [12, 19, 3, 5, 2, 3, 22, 12],
                backgroundColor: [
                    '#4b0082',
                    '#8a2bf7',
                    '#6A5ACD',
                    '#C2A8F6',
                    '#4EAFFC',
                    '#D1C4E9',
                ],
                borderColor: [
                    '#4b0082',
                    '#8a2be2',
                    '#6A5ACD',
                    '#C2A8F6',
                    '#4EAFFC',
                    '#D1C4E9',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <>
            <Doughnut options={options2} data={data} style={{position: 'relative', top: '-20px'}} />
        </>
    )
}

export default ChartDashBoard2;
