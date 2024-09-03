import React from 'react'

const Inputs = ({
    id = "",
    icon,
    pholder="",

}) => {
  return (
    <>
        <div className="w-full flex justify-center items-center">
            <input type="text" className='bg-gray-300 outline-none rounded w-[90%] placeholder:text-gray-500 px-2 py-1' id={id} placeholder={pholder} />
        </div>
    </>
  )
}

export default Inputs