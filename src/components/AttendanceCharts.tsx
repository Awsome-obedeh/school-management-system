"use client"
import Image from 'next/image';
import React from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'mon',
        present: 4000,
        absent: 2400,

    },
    {
        name: 'tue',
        present: 3000,
        absent: 1398,

    },
    {
        name: 'wed',
        present: 2000,
        absent: 9800,

    },
    {
        name: 'thur',
        present: 2780,
        absent: 3908,

    },
    {
        name: 'fri',
        present: 1890,
        absent: 4800,

    },
    {
        name: 'sat',
        present: 2390,
        absent: 3800,

    },

];

export default function AttendanceCharts() {
    return (
        <div className='w-full h-full bg-white p-4 rounded-lg'>
            {/* top */}
            <div className=' flex gap-16 justify-between'>
                <h1 className='font-medium text-lg '>Attendance</h1>
                <Image
                    src='/moreDark.png'
                    width={20}
                    height={20}
                    alt='attandace more image'

                />
            </div>

            {/* charts */}
            {/* <div className='h-[90%] w-full' > */}
                <ResponsiveContainer width="100%" height="90%">
                    <BarChart
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
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
                        <XAxis dataKey="name" axisLine={false} tickLine={false}/>
                        <YAxis axisLine={false}  />
                        <Tooltip  contentStyle={{borderRadius:"10px", borderColor:"lightgray"}}/>
                        <Legend align='top' verticalAlign='top' wrapperStyle={{paddingBottom:"30px", paddingTop:"30px"}} iconType='circle'/>
                        <Bar dataKey="present" fill="#9de5ff" 
                        radius={[10,10,0,0]}/>
                        <Bar dataKey="absent" fill="#ec4899"
                        radius={[10,10,0,0]}/>
                    </BarChart>
                </ResponsiveContainer>
            {/* </div> */}
        </div>
    )
}
