import React from 'react'
import { TiTick } from 'react-icons/ti'

const Toast = ({ showtoast }) => {
    return (
        <>
            <div className={`absolute right-[25%] top-5 flex items-center w-[35%] md:w-[14%] h-[2.5rem] rounded-full p-4 mb-4 text-gray-500 bg-white shadow dark:bg-gray-600`} role="alert">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 rounded-full dark:bg-green-600 border border-white mr-3">
                </div>
                <span className='absolute mx-[1.5px] text-white'><TiTick /></span>
                <div className="ml-3 text-sm font-normal text-green-300">Text Copied </div>
            </div>
        </>
    )
}

export default Toast
