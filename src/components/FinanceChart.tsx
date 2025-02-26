"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Jan',
      income: 4000,
      expense: 2400,
      amt: 2400,
    },
    {
      name: 'Feb',
      income: 3000,
      expense: 1398,
      amt: 2210,
    },
    {
      name: 'Mar',
      income: 2000,
      expense: 9800,
      amt: 2290,
    },
    {
      name: 'April',
      income: 2780,
      expense: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      income: 1890,
      expense: 4800,
      amt: 2181,
    },
    {
      name: 'Jun',
      income: 2390,
      expense: 3800,
      amt: 2500,
    },
    {
      name: 'Jul',
      income: 3490,
      expense: 4300,
      amt: 2100,
    },
    {
      name: 'Aug',
      income: 3490,
      expense: 4300,
      amt: 2100,
    },
    {
      name: 'Sep',
      income: 3490,
      expense: 4300,
      amt: 2100,
    },
    {
      name: 'Oct',
      income: 3490,
      expense: 4300,
      amt: 2100,
    },
    {
      name: 'Nov',
      income: 3490,
      expense: 4300,
      amt: 2100,
    },
    {
      name: 'Dec',
      income: 3490,
      expense: 4300,
      amt: 2100,
    },
  ];

export default function FinanceChart() {
    const [fallBackImg,setFallBacImg]=useState('')
  return (
    <div className='h-full w-full bg-white shadow-lg border-gray-400 p-4 rounded-lg'>
      {/* top */}
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Students</h1>
        <Image src='/moreDark.png' alt="finance" width={20} height={20}/>
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke='#ddd' />
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} 
          tickMargin={10}
          tickLine={false}/>
          <YAxis axisLine={false} tickLine={false} tickMargin={20}/>
          <Tooltip />
          <Legend align='center' verticalAlign='top' wrapperStyle={{paddingTop:"10px", paddingBottom:"30px"}}/>
          <Line type="monotone" strokeWidth={7} dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone"strokeWidth={5} dataKey="expense" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>

      {/* <Image src={fallBackImg}
        width={500}
        height={500}
        loading='lazy'
        onError={()=>setFallBacImg('/maleFemale.png')
            
        }
        alt="author"
       /> */}
    </div>
  )
}
