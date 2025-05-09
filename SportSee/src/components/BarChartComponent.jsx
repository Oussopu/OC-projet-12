import React, { useContext } from 'react'
import { DataContext } from '../services/dataContext.jsx'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          height: '70px',
          backgroundColor: '#ff0000',
          color: '#ffffff',
          padding: '10px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          fontSize: '12px',
        }}
      >
        <p>{payload[0].value + 'kg'}</p>
        <p>{payload[1].value + 'kcal'}</p>
      </div>
    )
  }
  return null
}

const BarChartComponent = () => {
  const { userActivity } = useContext(DataContext)

  if (!userActivity) {
    return <div></div>
  }

  const formattedData = userActivity.map((session) => ({
    ...session,
    day: new Date(session.day).getDate(),
  }))

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={formattedData}
        margin={{
          top: 20,
          right: 20,
          left: 20,
          bottom: 20,
        }}
        barSize={10}
        barGap={10}
      >
        <CartesianGrid vertical={false} strokeDasharray="3" />
        <XAxis dataKey="day" />
        <YAxis orientation="right" axisLine={false} />
        <Tooltip content={<CustomTooltip />} />
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
        <Bar
          dataKey="kilogram"
          fill="#282D30"
          radius={[50, 50, 0, 0]}
          name="Poids (kg)"
        />
        <Bar
          dataKey="calories"
          fill="#E60000"
          radius={[50, 50, 0, 0]}
          name="Calories brûlées (kCal)"
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChartComponent
