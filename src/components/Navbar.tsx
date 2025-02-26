import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <div className='flex justify-between py-5 px-4'>
            {/* searchbar */}
            <div className="hidden md:flex  gap-2 text-xs rounded-full ring-[1.5px] ring-gray-400 px-2 py-2">
                <Image alt="serch image" src="/search.png" width={10} height={10}></Image>
                <input type="text" placeholder='Search....' className='w-full bg-transparent outline-none' />
            </div>


            {/* icon & user */}
            <div className="flex items-center gap-6 justify-end w-full " >
                <div className="bg-white rounded-full w-7 h-7 flex justify-center items-center cursor-pointer">
                    <Image alt="message icon" src="/message.png" height={20} width={20}></Image>

                </div>
                <div className="bg-white rounded-full w-7 h-7 flex justify-center items-center cursor-pointer relative">
                    <Image alt="annoucment icon" src="/announcement.png" height={20} width={20}></Image>
                    <div className="w-6 h-6 bg-purple-500 rounded-full absolute -top-4 -right-2 text-white text-center text-xs flex items-center justify-center font-bold">1</div>

                </div>

                <div className="flex flex-col">
                <p className='text-sm leading-3'>John doe</p>
                <span className='text-[10px] text-gray-400 text-right'>Admin</span>
            </div>

            <Image  alt="User avartar"src='/avatar.png' width={36} height={36} className='rounded-full'></Image>
            </div>

           
        </div>
    )
}
