import React from 'react'

function SectionTitle({title}) {
  return (
	 <div className='flex gap-10 items-center py-10'>
		<h1 className='text-3xl text-tertiary '>{title}</h1>
		<div className='w-60 h-[2px] bg-dark'>

		</div>
	 </div>
  )
}

export default SectionTitle