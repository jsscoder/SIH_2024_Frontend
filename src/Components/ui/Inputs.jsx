import React from 'react'

const Inputs = ({
    id = "",
    icon,
    pholder="",
    value="",
    Changes,
    wrong
}) => {


  
  return (
    <>
        <div className="w-full flex justify-center items-center">
            <input type="text" value={value} onChange={Changes} className={`bg-gray-300 outline-none shadow-md rounded w-[90%] placeholder:text-gray-500 px-2 py-1 ${wrong} border-red-600`} id={id} placeholder={pholder} />
        </div>
    </>
  )
}

export default Inputs