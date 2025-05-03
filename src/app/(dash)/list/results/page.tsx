import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { assignmentsData, classesData, parentsData, resultsData, role, studentsData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { render } from 'react-dom'


type Results = {
  id: number,
  subject: string,
  class: string,
  teacher: string,
  student: string,
  type:string,
  score:number,
  date:string
  

}



const columns = [
 

  {
    header: "Subject",
    accessor: "subjcet",
    
  },

  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Student",
    accessor: "student",
    className: "hidden md:table-cell",
  },
 
  {
    header: "Type",
    accessor: "type",
    className: "hidden md:table-cell",
  },
  {
    header: "Score",
    accessor: "score",
    className: "hidden md:table-cell",
  },
 
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
 
  

]


export default function ResultsListPage() {
  // build  reusable row for the table
  const renderRow = (item: Results) => (
    <tr className=' odd:bg-mySkyLight even:bg-mySky'>
      
     




      <td className=''>{item.subject}</td>

      <td className='hidden md:table-cell'>{item.class}</td>

      <td className='hidden md:table-cell'>{item.teacher}</td>
      <td className='hidden md:table-cell'>{item.student}</td>
      <td className='hidden md:table-cell'>{item.type}</td>
      <td className='hidden md:table-cell'>{item.score}</td>
      <td className='hidden md:table-cell'>{item.date}</td>
    

   
      <td>
        <div className="flex items-center gap-3">
          <Link href={`/list/parents/${item.id}`}>
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
      <Table columns={columns} row={renderRow} data={resultsData} />

      {/* pagination */}
      <Pagination />

    </div>
  )
}
