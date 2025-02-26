import Image from 'next/image'
import React from 'react'

export default function UserCard({type}:{type:string}) {
  return (
    <div className='rounded-2xl odd:bg-mySky even:bg-myPurple p-4 flex-1 min-w-[137px]'>
      <div className="flex justify-between items-center">
        <span className='bg-white text-green-700 text-[10px] font-semibold px-4 py-2 rounded-full'>2024/25</span>
        <Image src="/more.png" alt="more image" width={20} height={20}></Image>
      </div>
        <h1 className='my-4 font-bold text-2xl '>1234</h1>
        <p className='text-gray-600 text-sm font-medium capitalize'>{type}</p>
    </div>
  )
}
