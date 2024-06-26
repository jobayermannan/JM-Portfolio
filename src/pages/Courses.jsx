import React, { useState } from 'react'
import SectionTitle from '../Components/SectionTitle'
import { courses } from '../Resources/course-resource';

export default function Courses() {
	const [selectItemIndex, setSelectItemsIndex] = useState(0);
  return (
	 <div>
		<SectionTitle title="Courses"></SectionTitle>
		<div className="flex py-10 gap-20 sm:flex-col">
        <div className=' flex flex-col gap-10 border-l-[2px] border-[#fbfbfb3a] w-1/3 sm:w-full sm:flex-row sm:overflow-x-scroll'>
          {courses.map((courses, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectItemsIndex(index);
              }}
              className='cursor-pointer'
            >
              <h1
                className={`text-lg px-5 py-3 ${selectItemIndex === index ? "text-mint bg-[#add8e62b] border-mint border-l-[3px] -ml-[2px]" : "text-white"}`}
              >
                {courses.title}
              </h1>
            </div>
          ))}
        </div>
       <div  className='flex items-center justify-center gap-10 sm:flex-col'>

        
       <div className='flex flex-col gap-5'>
          <h1 className="text-mint text-xl">{courses[selectItemIndex].title}</h1>
         
          <p className="text-blue text-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas repudiandae dolore quod ullam dolor placeat, tempora ex at veniam dolorem porro maxime mollitia hic esse vero blanditiis explicabo. Nemo, optio.</p>
			
     
        </div>
		  <img src={courses[selectItemIndex].image} className='h-52 w-80'></img>
       </div>
      </div>
	 </div>
  )
}
