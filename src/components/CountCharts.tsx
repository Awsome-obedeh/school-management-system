"use client"
import { count } from 'console';
import Image from 'next/image';
import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Total',
        count: 106,
        
        fill: 'white',
    },
    {
        name: 'Girls',
        count: 53,
        
        fill: '#ec4899',
    },
    {
        name: 'Boys',
        count: 53,
       
        fill: '#c3ebfa',
    },
  
];

// const style = {
//     top: '50%',
//     right: 0,
//     transform: 'translate(0, -50%)',
//     lineHeight: '24px',
// };




export default function CountCharts() {
    return (

        <div className='w-full h-full rounded-lg bg-white p-4'>
            {/* title */}
            <div className="flex justify-between items-center ">
                <h1 className='text-lg font-semibold'>Students</h1>
                <Image src="/moreDark.png" alt="more for user card" width={20} height={20}></Image>
            </div>

            {/* chart */}
            <div className="w-full h-[75%] relative">
                <ResponsiveContainer >
                    <RadialBarChart cx="50%" cy="50%" innerRadius="60%" outerRadius="100%" barSize={40} data={data}>
                        <RadialBar

                            // label={{ position:'outsideStart', fill: '#100f0f' }}
                            background

                            dataKey="count"
                        />

                    </RadialBarChart>
                </ResponsiveContainer>
                <Image
                    src='/maleFemale.png'
                    alt='malefemale'
                    width={80}
                    height={80}
                    className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
                />
            </div>

            {/* bottom */}
            <div className="flex  justify-between gap-16">
                <div className='flex flex-col gap-1'>
                    <div className="h-5 w-5 rounded-full bg-mySky p-2"></div>
                    <h1 className='font-bold text-2xl'>1,234</h1>
                    <span className="text-gray-600 font-medium text-sm">Boys (55%)</span>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className="h-5 w-5 rounded-full bg-pink-500 p-2"></div>
                    <h1 className='font-bold text-2xl'>1,234</h1>
                    <span className="text-gray-600 font-medium text-sm">Girls (55%)</span>
                </div>

            </div>
        </div>

    )
}
