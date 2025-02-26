"use client"

import Announcement from '@/components/Annoucements'
import EventCalender from '@/components/EventCalender'
import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import BigCalender from '@/components/BigCalender'

export default function ParentPage() {
  return (
    <div className='p-4  flex flex-col xl:flex-row  flex-1'>
      {/* left */}
      <div className="w-full xl:w-2/3 ">
        <div className='h-full bg-whi p-4 rounded-md'>
          <h1 className='text-xl font-semibold'>Student [Hakeem Ibrahim]</h1>
          <BigCalender />
        </div>

      </div>

      {/* right */}
      <div className='w-full h-full xl:w-1/3 bg-green-500 flex flex-col gap-8 '>
   
        <Announcement/>


      </div>
    </div>
  )
}
