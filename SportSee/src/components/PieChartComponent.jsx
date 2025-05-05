import { Cell, Pie, PieChart } from 'recharts'
import React, { useContext } from 'react'
import { DataContext } from '../services/dataContext.jsx'

const PieChartComponent = () => {
  const { userData } = useContext(DataContext)

  if (!userData) {
    return <div></div>
  }
  const score = userData.todayScore * 100
  const remaining = 100 - score

  const data = [
    { name: 'Completed', value: score },
    { name: 'Remaining', value: remaining },
  ]

  return (
    <PieChart width={200} height={200}>
      <Pie
        data={data}
        cx="55%"
        cy="55%"
        innerRadius={70}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={2}
        dataKey="value"
        startAngle={90}
        endAngle={450}
        stroke="false"
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={['#FF0000', 'transparent'][index % 2]}
          />
        ))}
      </Pie>
      <text x={20} y={33} fill="#333" fontSize={14} textAnchor="start">
        Score
      </text>
      <text x={80} y={85} fill="#333" fontSize={14} textAnchor="center">
        {Math.round(score)}%
        <tspan dy="2em" dx="-3em" fontSize={12}>
          de votre
        </tspan>
        <tspan dy="2em" dx="-3.5em" fontSize={12}>
          objectif
        </tspan>
      </text>
    </PieChart>
  )
}

export default PieChartComponent
