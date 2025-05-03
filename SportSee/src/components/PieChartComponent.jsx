import {Cell, Pie, PieChart} from "recharts";
import React from "react";
import RadarChartComponent from "./RadarChartComponent.jsx";

const data3 = [
    { name: 'Completed', value: 25 }, // 12% de progression
    { name: 'Remaining', value: 75 }, // 88% restant
];

function PieChartComponent () {
    return (
        <PieChart width={200} height={200}>
            <Pie
                data={data3}
                cx="55%"
                cy="55%"
                innerRadius={70} // Rayon interne pour créer un anneau
                outerRadius={80} // Rayon externe
                fill="#8884d8"
                paddingAngle={2}
                dataKey="value"
                startAngle={90} // Commence à 0 degré pour un cercle complet
                endAngle={450}
                stroke="false"
            >
                {data3.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#FF0000', 'transparent'][index % ['#FF0000', 'transparent'].length]} />
                ))}
            </Pie>
            <text x={20} y={33} fill="#333" fontSize={14} textAnchor="start">
                Score
            </text>
            <text x={80} y={85} fill="#333" fontSize={14} textAnchor="center">
                {data3[0].value}%
                <tspan dy="2em" dx="-3em" fontSize={12} >de votre</tspan>
                <tspan dy="2em" dx="-3.5em" fontSize={12} >objectif</tspan>
            </text>
        </PieChart>
    )
}

export default PieChartComponent;
