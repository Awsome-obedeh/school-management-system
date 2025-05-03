import React from 'react'

export default function SingleStudentPage() {
  return (
    <div>
      <div className='flex-1 p-4 flex flex-col gap-4 xl:flex-row'>
                  {/* left */}
                  <div className='w-full xl:w-2/3 '>
                      {/* top */}
                      <div className="flex gap-4 flex-col md:flex-row">
                          {/* user card */}
                          <div className="flex-col md:flex-row bg-sky-400 py-6 px-4 rounded-md flex-1 flex gap-4">
                              <div className="w-full flex justify-center items-center md:block md:w-1/3">
                                  <img className='w-16 h-16 rounded-[50%] object-contain'
                                      src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                      alt='Teacher image' />
                              </div>
                              <div className="w-2/3 flex-col flex justify-between gap-4 ">
                                  <h2 className="text-xl font-bold">Obed Chidera</h2>
                                  <p className='text-gray-500 text-sm '>Lorem ipsum dolor
                                       sit amet consectetur adipisi
                                       sit amet consectetur adipisi
                                  </p>
      
                                  <div className=" flex flex-col md:flex-row justify-between md:items-center gap-3 flex-wrap font-medium">
                                      <div className="flex  md:flex-row gap-4  ">
                                          <Image src="/blood.png" alt="blood icon"
                                              width={20}
                                              height={20}
                                          />
                                          <span className="text-gray-600">A+</span>
                                      </div>
                                      <div className="flex  md:flex-row gap-4">
                                          <Image src="/date.png" alt="blood icon"
                                              width={20}
                                              height={20}
                                          />
                                          <span className="text-gray-600">January 2025</span>
                                      </div>
                                  </div>
                                  <div className="flex flex-col md:flex-row justify-between md:items-center gap-3 flex-wrap font-medium">
                                      <div className="flex  md:flex-row gap-4">
                                          <Image src="/mail.png" alt="blood icon"
                                              width={20}
                                              height={20}
                                          />
                                          <span className="text-gray-600 text-[12px]">Obidera101@gmail</span>
                                      </div>
                                      <div className="flex  md:flex-row gap-4">
                                          <Image src="/phone.png" alt="blood icon"
                                              width={20}
                                              height={20}
                                          />
                                          <span className="text-gray-600">+29010471768</span>
                                      </div>
                                  </div>
      
      
                              </div>
      
      
                          </div>
                          {/* small cards */}
                          <div className="flex flex-1 gap-4 justify-between flex-wrap">
                              <div className="w-full bg-white shadow p-4 rounded-md flex gap-4 md:w-[44%] lg:w-[47%] xl:w-[48%] 2xl:w-[48%]">
                                  <img src="/singleBranch.png" alt=''  className='h-16 w-16 object-contain' />
                                  <div>
                                      <h3 className='text-xl font-semibold'>90%</h3>
                                      <span>Branches</span>
                                  </div>
                              </div>
                              <div className="w-full bg-white shadow p-4 rounded-md flex gap-4 md:w-[44%] lg:w-[47%] xl:w-[45%] 2xl:w-[48%]">
                                  <img src="/singleClass.png" alt=''  className='h-6 w-16 object-contain' />
                                  <div>
                                      <h3 className='text-xl font-semibold'>90%</h3>
                                      <span>Classes</span>
                                  </div>
                              </div>
                              <div className="w-full bg-white shadow p-4 rounded-md flex gap-4 md:w-[44%] lg:w-[47%] xl:w-[45%] 2xl:w-[48%]">
                                  <img src="/singleLesson.png" alt='' className='h-6 w-16 object-contain' />
                                  <div>
                                      <h3 className='text-xl font-semibold'>90%</h3>
                                      <span>Lesson</span>
                                  </div>
                              </div>
                              <div className="w-full bg-white shadow p-4 rounded-md flex gap-4 md:w-[44%] lg:w-[47%] xl:w-[45%] 2xl:w-[48%]">
                                  <img src="/singleAttendance.png" alt=''  className='h-6 w-16 object-contain' />
                                  <div>
                                      <h3 className='text-xl font-semibold'>90%</h3>
                                      <span>Attedance</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      {/* bottom */}
                      <div className="bg-white mt-4 rounded-md p-4 h-[800px]">
                          <h1 className=''>Teacher&apos;s Schedule</h1>
                          <BigCalender/>
                      </div>
      
                  </div>
                  {/* right */}
                  <div className='w-full xl:w-1/3 '>
                  <div className='bg-white p-4 rounded-md'>
                      <h1 className='text-xl font-semibold'>Shorcuts</h1>
                      <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
                          <Link href="/" className='p-3 rounded-md bg-mySkyLight'>Teacher&apos;s Classes</Link>
                          <Link href="/" className='p-3 rounded-md bg-myPurple'>Teacher&apos;s Students</Link>
                          <Link href="/" className='p-3 rounded-md bg-myYellowLight'>Teacher&apos;s Assignment</Link>
                          <Link href="/" className='p-3 rounded-md bg-pink-400'>Teacher&apos;s Exams</Link>
                          <Link href="/" className='p-3 rounded-md bg-mySky'>Teacher&apos;s Lessons</Link>
                      </div> 
                  </div>
                  <Performance/>
                 <Announcement/>
                  </div>
      
              </div>
    </div>
  )
}
