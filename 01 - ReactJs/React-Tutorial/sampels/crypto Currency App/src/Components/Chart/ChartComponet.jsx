import React, { useState, useEffect } from 'react';
import './Chart.css';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	ArcElement,
} from 'chart.js';

import { Bar, Doughnut } from 'react-chartjs-2';
ChartJS.register(
	CategoryScale,
	LinearScale,
	ArcElement,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export const ChartComponet = ({ coinsDetail }) => {
	const [chartOptions, setChartOptions] = useState({});

	// console.log(coinsDetail);
	const stateData = [
		(coinsDetail.listedAt / 500) % 500,
		(+coinsDetail.marketCap / 500) % 300,
		+coinsDetail.price / 500,
	];

	// chart use effect
	useEffect(() => {
		setChartOptions({
			responsive: true,
			plugins: {
				legend: {
					position: 'top',
				},
				Title: {
					display: true,
					text: 'Coins algoritm',
				},
			},
		});
	}, []);

	return (
		<div>
			<section className="parenet-charts">
				<div>
					<Doughnut
						options={chartOptions}
						data={{
							labels: ['listedAt', 'marketCap', 'price'],
							datasets: [
								{
									data: stateData,
									backgroundColor: [
										'rgb(255, 99, 132)',

										'rgb(33, 9, 157)',
										'rgb(79, 233, 23)',
									],
									hoverOffset: 4,
								},
							],
						}}
					></Doughnut>
				</div>
				<div>
					<Bar
						options={chartOptions}
						data={{
							labels: [
								'spark line 1 ',
								'spark line 2',
								'spark line 3',
								'spark line 4',
								'spark line 5',
							],
							datasets: [
								{
									label: ['sparkline'],
									data: coinsDetail.sparkline,
									backgroundColor: [
										'rgb(255, 99, 132)',

										'rgb(33, 9, 157)',
										'rgb(79, 233, 23)',
									],
									hoverOffset: 4,
								},
							],
						}}
					></Bar>
				</div>
			</section>
		</div>
	);
};
