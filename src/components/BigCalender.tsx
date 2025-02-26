"use client"
import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css"
import { calendarEvents } from '@/lib/data'
import { useState } from 'react'

const localizer = momentLocalizer(moment)
// use useState to change the view of the calender
const BigCalender = () => {

  console.log("Calendar Events: ", calendarEvents);

   const [view, setView] = useState<View>(Views.WORK_WEEK)

  //  function used to handle the chnage of view on the calender, from
  // work-week to day
   const handleOnViewChange=(selectedView:View)=>{
      setView(selectedView)
   }
return (
  <div className='h-full'>
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={[Views.WORK_WEEK, Views.DAY]}
      view={view}
      defaultDate={moment("2025-03-03").toDate()}
      style={{ height: "100%" }}
      onView={handleOnViewChange}
      // set min date to show
      min={new Date(2025,2,7,9,0,0)}
      max={new Date(2025,2,7,17,30,0)}
    />
  </div>
)
}

export default BigCalender