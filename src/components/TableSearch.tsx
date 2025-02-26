import Image from 'next/image'
import React from 'react'

export default function TableSearch() {
    return (

        <div className="w-full flex  gap-2 text-xs rounded-full ring-[1.5px] ring-gray-400 px-2 py-2">
            <Image alt="serch image" src="/search.png" width={10} height={10}></Image>
            <input type="text" placeholder='Search....' className='w-full bg-transparent outline-none' />
        </div>

    )
}
