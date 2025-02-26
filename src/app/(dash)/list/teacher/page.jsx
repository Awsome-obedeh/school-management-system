import Pagination from '@/components/Pagination'
import TableSearch from '@/components/TableSearch'
import Image from 'next/image'
import React from 'react'

export default function TeacherListPage() {
  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      {/* top */}
      <div className="flex justify-between items-center ">
        <h2 className="hidden md:block font-semibold tex-lg">All Teachers</h2>

        <div className='flex flex-1  flex-col md:flex-row  items-center gap-4 w-full md:w-auto'>
          <TableSearch />
          <div className='flex items-center gap-4 self-end'>
            <button className='w-8 h-8 flex items-center justify-center rounded-full bg-yellow-400'>
              <Image src="/filter.png" width={20} height={20} />
            </button>
            <button className='w-8 h-8 flex items-center justify-center rounded-full bg-yellow-400'>
              <Image src="/sort.png" width={20} height={20} />
            </button>
            <button className='w-8 h-8 flex items-center justify-center rounded-full bg-yellow-400'>
              <Image src="/plus.png" width={20} height={20} />
            </button>
          </div>

        </div>
      </div>

      {/* list */}
   <Table/>

      {/* pagination */}
    <Pagination/>

    </div>
  )
}
