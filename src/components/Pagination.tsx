import React from 'react'

export default function Pagination() {
  return (
    <div className='flex justify-between ites-center text-gray-500 p-4'>
      <button disabled className="bg-slate-300 text-gray-800 py-2 px-4 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">Prev</button>
      <div>
        <button className='px-2 rounded-sm bg-mySkyLight '>1</button>
        <button className='px-2 rounded-sm  '>2</button>
        <button className='px-2 rounded-sm  '>3</button>
        .....
        <button className='px-2 rounded-sm  '>10</button>
      </div>
      <button  className="bg-slate-300 text-gray-800 py-2 px-4 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">Next</button>
    </div>
  )
}
