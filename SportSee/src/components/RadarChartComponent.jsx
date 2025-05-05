import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts'
import React, { useContext } from 'react'
import { DataContext } from '../services/dataContext.jsx'

const RadarChartComponent = () => {
  const { userPerformance } = useContext(DataContext)

  if (!userPerformance) {
    return <div></div>
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={userPerformance}>
        <PolarGrid />
        <PolarAngleAxis
          dataKey="subject"
          tick={{ fill: '#ffffff', fontSize: 8 }}
        />
        <Radar
          name="Performance"
          dataKey="value"
          fill="#FF0000"
          fillOpacity={0.8}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}

export default RadarChartComponent
