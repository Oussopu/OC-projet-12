import {Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import React from "react";

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

function AreaChartComponent() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 0,
                    left: 0,
                    bottom: 0,
                }}
            >
                <XAxis dataKey="name" tick={{ fill: '#F08787' }} tickLine={false} axisLine={false}/>
                <YAxis
                    orientation="none"
                    axisLine={false}
                    tick={false}
                />4
                <Tooltip wrapperStyle={{ width: 40, height: 25, overflow: 'auto', paddingLeft: 10, paddingBottom: 40  }} />
                <text x={20} y={20} fill="#F08787" fontSize={14} textAnchor="start">
                    <tspan x={20} dy="1.2em">Durée moyenne des</tspan>
                    <tspan x={20} dy="1.2em">sessions</tspan>
                </text>
                <Area type="monotone" dataKey="poids" stroke="#ffffff" fill='none' />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default AreaChartComponent;
