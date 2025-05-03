import '../assets/styles/profil.scss'
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
    AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, Radar, Text, PieChart, Pie, Cell
} from 'recharts';
import Macronutrient from "../components/Macronutrient.jsx";


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

const data3 = [
    { name: 'Completed', value: 25 }, // 12% de progression
    { name: 'Remaining', value: 75 }, // 88% restant
];

const COLORS = ['#FF0000', 'transparent'];

function Profile() {
    return (
        <div className='profil-main'>
            <div className='title-main'>
                <h1>Bonjour <span>Thomas</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className='results-container'>
                <div className='graphs-container'>
                    <div className='weight-container'>
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
                    </div>
                    <div className='info-container'>
                        <div className='objectives-container'>
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
                        </div>
                        <div className='intensity-container'>
                            <ResponsiveContainer width="100%" height="100%">
                                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data2}>
                                    <PolarGrid />
                                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#ffffff', fontSize: 10 }} />
                                    <Radar name="Mike" dataKey="A" fill="#FF0000" fillOpacity={0.8} />
                                </RadarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className='score-container'>
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
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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
                        </div>
                    </div>
                </div>
                <div className='macronutrients-container'>
                    <Macronutrient />
                    <Macronutrient />
                    <Macronutrient />
                    <Macronutrient />
                </div>
            </div>
        </div>
    )
}

export default Profile;
