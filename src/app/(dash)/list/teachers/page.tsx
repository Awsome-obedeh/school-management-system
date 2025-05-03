import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { role, teachersData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { render } from 'react-dom'


type Teacher = {
  id: number,
  teacherId: string,
  name: string,
  email?: string,
  photo: string,
  phone: string,
  subjects: string[],
  classes: string[],
  address: string,

}



const columns = [
  {
    header: 'Info',
    accessor: "info"
  },

  {
    header: "Teacher ID",
    accessor: "teacherID",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell"
  },

  {
    header: "Phone",
    accessor: "phone",
    className: "hidden md:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "class",
    className: "hidden md:table-cell",
  },
 
  {
    header: "Actions",
    accessor: "actions",
    className: "",
  },


]


export default function TeacherListPage() {
  // build  reusable row for the table
  const renderRow = (item: Teacher) => (
    <tr className=' odd:bg-mySkyLight even:bg-mySky'>
      <td className='py-3'>
        <div className='flex gap-3'>

          <Image src={item.photo} alt={item.name}
            width={10}
            height={10}
            className='md:hidden xl:block w-10 h-10 mx-1 rounded-full object-cover'></Image>
          <div className="flex flex-col ">
            <h3 className="font-semibold">{item.name}</h3>
            <p className='text-xs text-gray-500'>{item?.email}</p>
          </div>
        </div>
      </td>
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




      <td className='hidden md:table-cell'>{item.teacherId}</td>
      <td className='hidden md:table-cell'>{item.subjects.join(",")}</td>
      <td className='hidden md:table-cell'>{item.phone}</td>
      <td className='hidden md:table-cell'>{item.address}</td>
      <td className='hidden md:table-cell'>{item.classes.join(",")}</td>

   
      <td className='pl-3'>
        <div className="flex items-center gap-3">
          <Link href={`/list/teachers/${item.id}`}>
            <button className='flex item justify-center bg-mySky rounded-full h-30 w-30 object-cover'>
              <Image src="/view.png" alt="view" width={20} height={20} className='rounded-full object-cover'></Image>

            </button>
          </Link>
          {role === 'admin' ? (
            <button className='flex item justify-center bg-myYellowLight  h-30 w-30 object-cover'>
              <Image src="/delete.png" alt="view" width={20} height={20} className='rounded-full object-cover'></Image>

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
      
        <h2 className="hidden md:block font-semibold tex-lg pr-3">All Teachers</h2>

        <div className='flex flex-1  flex-col md:flex-row  items-center gap-4 w-full md:w-auto'>
          <TableSearch />
          <div className='flex items-center gap-4 self-end'>
            <button className='w-8 h-8 flex items-center justify-center rounded-full bg-yellow-400'>
              <Image alt="e" src="/filter.png" width={10} height={10} className='object-cover'  />
            </button>
            <button className='w-8 h-8 flex items-center justify-center rounded-full bg-yellow-400'>
              <Image alt="e" src="/sort.png" width={10} height={10} className='object-cover' />
            </button>
            <button className='w-8 h-8 flex items-center justify-center rounded-full bg-yellow-400'>
              <Image alt="e" src="/plus.png" width={10} height={10} className='object-cover' />
            </button>
          </div>

        </div>
      </div>

      {/* list */}
      <Table columns={columns} row={renderRow} data={teachersData} />

      {/* pagination */}
      <Pagination />

    </div>
  )
}
