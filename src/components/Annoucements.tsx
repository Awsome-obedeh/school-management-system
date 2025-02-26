"use client"



import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Image from 'next/image';



const events = [
    {
        id: 1,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "lorem ipsum dolor sit amet, cinsectutu adispicing elit"
    },
    {
        id: 2,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "lorem ipsum dolor sit amet, cinsectutu adispicing elit"
    },
    {
        id: 3,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "lorem ipsum dolor sit amet, cinsectutu adispicing elit"
    },
]

export default function Announcement() {
    return (
        <div className='gap-4 bg-white p-4 rounded-md'>
            <div className="flex justify-between items-center">
                <h1 className='font-semibold text-xl'>Announcement</h1>
                <small className="text-sm text-gray-500"></small>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                <div className="bg-mySkyLight rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className='font-medium'>lorem ipsum decor</h2>
                        <span className="bg-white p-1 rounded-md text-gray-500 text-sm">2025-01-25</span>

                    </div>
                        <p className="text-gray-500 text-sm">lorem ipsum decor elixi</p>
                </div>
                <div className="bg-purple-200 rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className='font-medium'>lorem ipsum decor</h2>
                        <span className="bg-white p-1 rounded-md text-gray-500 text-sm">2025-01-25</span>

                    </div>
                        <p className="text-gray-500 text-sm">lorem ipsum decor elixi</p>
                </div>
                <div className="bg-myYellowLight rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className='font-medium'>lorem ipsum decor</h2>
                        <span className="bg-white p-1 rounded-md text-gray-500 text-sm">2025-01-25</span>

                    </div>
                        <p className="text-gray-500 text-sm">lorem ipsum decor elixi</p>
                </div>
                <div className="bg-myPurple rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className='font-medium'>lorem ipsum decor</h2>
                        <span className="bg-white p-1 rounded-md text-gray-500 text-sm">2025-01-25</span>

                    </div>
                        <p className="text-gray-500 text-sm">lorem ipsum decor elixi</p>
                </div>

            </div>
        </div>

    )
}
