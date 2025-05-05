import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import React, { useContext } from 'react'
import { DataContext } from '../services/dataContext.jsx'

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: '#ffffff',
          color: '#000000',
          padding: '10px',
        }}
      >
        <p>{payload[0].value + ' min'}</p>
      </div>
    )
  }
  return null
}

const AreaChartComponent = () => {
  const { userAverageSessions } = useContext(DataContext)

  if (!userAverageSessions) {
    return <div></div>
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={userAverageSessions}
        margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <XAxis
          dataKey="day"
          tick={{ fill: '#F08787' }}
          tickLine={false}
          axisLine={false}
        />
        <YAxis orientation="none" axisLine={false} tick={false} />
        <Tooltip content={<CustomTooltip />} />
        <text x={20} y={20} fill="#F08787" fontSize={12} textAnchor="start">
          <tspan x={20} dy="1.2em">
            Durée moyenne des
          </tspan>
          <tspan x={20} dy="1.2em">
            sessions
          </tspan>
        </text>
        <Area
          type="monotone"
          dataKey="sessionLength"
          stroke="#ffffff"
          fill="none"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default AreaChartComponent
