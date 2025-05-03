import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: '1',
        poids: 50,
        calories: 30,
    },
    {
        name: '2',
        poids: 30,
        calories: 98,
    },
    {
        name: '3',
        poids: 20,
        calories: 50,
    },
    {
        name: '4',
        poids: 20,
        calories: 38,
    },
    {
        name: '5',
        poids: 10,
        calories: 40,
    },
    {
        name: '6',
        poids: 20,
        calories: 30,
    },
    {
        name: '7',
        poids: 30,
        calories: 40,
    },
];


function BarChartComponent () {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    left: 20,
                    bottom: 20,
                }}
                barSize={10}
                barGap={10}
            >
                <CartesianGrid  vertical={false} strokeDasharray="3" />
                <XAxis dataKey="name" />
                <YAxis
                    orientation="right"
                    axisLine={false}
                />
                <Tooltip />
                <Legend
                    layout="horizontal"
                    verticalAlign="top"
                    align="end"
                    iconType="circle"
                    wrapperStyle={{ paddingBottom: '50px' }}
                />
                <text x={20} y={33} fill="#333" fontSize={14} textAnchor="start">
                    Activité quotidienne
                </text>
                <Bar dataKey="poids" fill="#282D30" radius={[50, 50, 0, 0]} />
                <Bar dataKey="calories" fill="#E60000" radius={[50, 50, 0, 0]}/>
            </BarChart>
        </ResponsiveContainer>
        )

}

export default BarChartComponent;
