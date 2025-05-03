import {PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer} from "recharts";
import React from "react";

const data2 = [
    {
        subject: 'Math',
        A: 120,
        B: 110,
        fullMark: 150,
    },
    {
        subject: 'Chinese',
        A: 98,
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'English',
        A: 86,
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'Geography',
        A: 99,
        B: 100,
        fullMark: 150,
    },
    {
        subject: 'Physics',
        A: 85,
        B: 90,
        fullMark: 150,
    },
    {
        subject: 'History',
        A: 65,
        B: 85,
        fullMark: 150,
    },
];

function RadarChartComponent () {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data2}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#ffffff', fontSize: 10 }} />
                <Radar name="Mike" dataKey="A" fill="#FF0000" fillOpacity={0.8} />
            </RadarChart>
        </ResponsiveContainer>

    )
}

export default RadarChartComponent;
