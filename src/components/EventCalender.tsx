"use client"


import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Image from 'next/image';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events=[
  {
    id:1,
    title:"Lorem ipsum dolor",
    time:"12:00 PM - 2:00 PM",
    description:"lorem ipsum dolor sit amet, cinsectutu adispicing elit" 
  },
  {
    id:2,
    title:"Lorem ipsum dolor",
    time:"12:00 PM - 2:00 PM",
    description:"lorem ipsum dolor sit amet, cinsectutu adispicing elit" 
  },
  {
    id:3,
    title:"Lorem ipsum dolor",
    time:"12:00 PM - 2:00 PM",
    description:"lorem ipsum dolor sit amet, cinsectutu adispicing elit" 
  },
]

export default function EventCalender() {
    const [value, onChange] = useState<Value>(new Date());
    return (
    <div className='w-full mb-4 bg-white shadow-md rounded-md'>
      <Calendar onChange={onChange} value={value} />

      <div className='flex flex-col  gap-4 '>
        <div className="flex justify-between items-center mt-4">
          <h1 className='font-semibold text-xl'>Events</h1>
          <Image src="/moreDark.png" height={20} width={20} alt="events more"/>
        </div> 

        <div className=" rounded-md ">
        {
          events.map(event=>(
            <div className="p-5 rounded-lg border-1 border-gray-200 border-t-4 bg-white shadow odd:border-t-myPurpleLight odd:border-t-mySkyLight" key={event.id}>
              <div className="flex flex-col ">
                <div className="flex justify-between">
                <h1 className="font-medium ">{event.title}</h1>
                <small className='text-gray-300 text-sm'>{event.time}</small>
                </div>
                <p className='text-gray-500 text-sm '>{event.description}</p>
              </div>
            </div>
          ))
        }
        </div>
        
      </div>
    </div>
  )
}
