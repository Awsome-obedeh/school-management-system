import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { role, studentsData, subjectsData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { render } from 'react-dom'


type Subjects = {
  id: number,
  name: string,
  teachers: string[],
  
}



const columns = [
  {
    header: 'subject',
    accessor: "subjects",
    className: " sm:table-cell",
  },

  {
    header: "Teacher",
    accessor: "Tecaher",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
    className: "",
  },

  
]


export default function SubjectListPage() {
  // build  reusable row for the table
  const renderRow = (item: Subjects) => (
    <tr className=' odd:bg-mySkyLight even:bg-mySky'>
      
      {/* <td>{item.teacherId}</td>
      <td>{item.subjects.join(',')}</td>
      <td>{item.classes.join(',')}</td>
      <td>{item.phone}</td>
      <td>{item.address}</td>
      <td>
        <div className='flex items-center gap-2'>
          <Link href={`/list/teachers/${item.id}`}>
            <button className='w-7 h-7 items-center rounded-full bg-mySky'>
              <Image src="/view.png" alt='view_image' width={16} height={16} />
            </button>
          </Link>
          {role === "admin" &&
            (<button className='w-7 h-7 items-center rounded-full bg-purple-500'>
              <Image src="/delete.png" alt='view_image' width={16} height={16} />
            </button>)
          }``

        </div>
      </td> */}




      <td className=''>{item.name}</td>
      <td className='hidden md:table-cell'>{item.teachers.join(",")}</td>
     

   
      <td>
        <div className="flex items-center gap-3">
          <Link href={`/list/subjects/${item.id}`}>
            <button className='flex item justify-center bg-mySky rounded-full h-30 w-30 object-cover'>
              <Image src="/view.png" alt="view" width={30} height={30} className='rounded-full'></Image>

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
        <h2 className="hidden md:block font-semibold tex-lg pr-3">All Subjects</h2>

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
      <Table columns={columns} row={renderRow} data={subjectsData} />

      {/* pagination */}
      <Pagination />

    </div>
  )
}
