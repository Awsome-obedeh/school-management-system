import CountCharts from '@/components/CountCharts'
import UserCard from '@/components/userCard'
import AttendanceCharts from '@/components/AttendanceCharts'
import React from 'react'
import FinanceChart from '@/components/FinanceChart'
import EventCalender from '@/components/EventCalender'
import Announcement from '@/components/Annoucements'

const Adminpage = () => {
  return (
    <div className='flex gap-4 p-4 flex-col  md:flex-row'>
      {/* left */}
      <div className=' flex flex-col gap-4 w-full lg:w-2/3  h-full'>
        <div className='flex gap-8 justify-betwee flex-wrap'>
          <UserCard type="student" />
          <UserCard type="parent" />
          <UserCard type="teacher" />
          <UserCard type="staff" />
        </div>

        {/* Middle charts */}
        <div className='flex gap-4 flex-col lg:flex-row'>

          {/* count charts */}
          <div className='w-full lg:w-1/2 h-[450px]'>
            <CountCharts />

          </div>

          {/*Attendance charts  */}
          <div className='w-full lg:w-1/2 h-[450px]'>
           <AttendanceCharts/>
          </div>

        </div>

        {/* finance charts */}
        <div className='w-full h-[500px]'>

        <FinanceChart/>
        </div>
      </div>

      {/* right */}
      <div className="w-full lg:w-1/3 ">
          {/* calender */}
          <EventCalender/>
          <Announcement/>
      </div>
    </div>
  )
}

export default Adminpage
