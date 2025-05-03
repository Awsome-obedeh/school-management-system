"use client"
import Image from 'next/image';
import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 80, fill:'#c3ebfa'},
  { name: 'Group B', value: 120, fill:"#fae27c" }
]

export default function Performance() {
  return (
    <div className='h-80 bg- p-4 rounded-md relative'>
      <div className="flex justify-between items-center">
        <h1 className='text-xl font-semibold'>Performance</h1>
        <Image src='/moreDark.png' height={16} width={16} alt='performance more'/>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80}
            fill="#8884d8"
            
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="text-center  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h3 className="font-bold text-xl">90%</h3>
          <p className="text-sm ">10 out of 12 students rated <span className='text-green-600'>89%</span></p>
      </div>
      <h4 className=" absolute bottom-16 right-0 left-0 mx-auto r">1st semestter of second semester</h4>
    </div>
  )
}
