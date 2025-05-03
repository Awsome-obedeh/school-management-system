import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { classesData, parentsData, role, studentsData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { render } from 'react-dom'


type Classes = {
  id: number,
  name: string,
  capacity?: string,
  grade: string,
  supervisor: string,
  

}



const columns = [
 

  {
    header: "Name",
    accessor: "name",
    
  },
  {
    header: "Capacity",
    accessor: "capacity",
    className: "hidden md:table-cell"
  },

  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  
  {
    header: "Supervisor",
    accessor: "supervisor",
    className: "hidden md:table-cell",
  },
 
  

]


export default function ClassesListPage() {
  // build  reusable row for the table
  const renderRow = (item: Classes) => (
    <tr className=' odd:bg-mySkyLight even:bg-mySky'>
      
     




      <td className=''>{item.name}</td>
      <td className='hidden md:table-cell'>{item.capacity}</td>
      <td className='hidden md:table-cell'>{item.grade}</td>

      <td className='hidden md:table-cell'>{item.supervisor}</td>
    

   
      <td>
        <div className="flex items-center gap-3">
          <Link href={`/list/parents/${item.id}`}>
            <button className='flex item justify-center bg-mySky rounded-full h-30 w-30 object-cover'>
              <Image src="/edit.png" alt="view" width={30} height={30} className='rounded-full'></Image>

            </button>
          </Link>
          {role === 'admin' ? (
            <button className='flex item justify-center bg-myYellowLight  h-30 w-30 object-cover'>
              <Image src="/delete.png" alt="view" width={30} height={30} className='rounded-full'></Image>

            </button>
          ) : ''}

        </div>
      </td>

    </tr>
  )

  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      {/* top */}
      <div className="flex justify-between items-center ">
        <h2 className="hidden md:block font-semibold tex-lg pr-3">All Classes</h2>

        <div className='flex flex-1  flex-col md:flex-row  items-center gap-4 w-full md:w-auto'>
          <TableSearch />
          <div className='flex items-center gap-4 self-end'>
            <button className='w-8 h-8 flex items-center justify-center rounded-full bg-yellow-400'>
              <Image alt="e" src="/filter.png" width={20} height={20} />
            </button>
            <button className='w-8 h-8 flex items-center justify-center rounded-full bg-yellow-400'>
              <Image alt="e" src="/sort.png" width={20} height={20} />
            </button>
            <button className='w-8 h-8 flex items-center justify-center rounded-full bg-yellow-400'>
              <Image alt="e" src="/plus.png" width={20} height={20} />
            </button>
          </div>

        </div>
      </div>

      {/* list */}
      <Table columns={columns} row={renderRow} data={classesData} />

      {/* pagination */}
      <Pagination />

    </div>
  )
}
