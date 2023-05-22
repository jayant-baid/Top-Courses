import React from 'react'
import './Spinner.css'
const Spinner = () => {
    return (
        <div className='flex flex-col space-y-10 items-center'>
            {/* Spinner taken from google */}
            <div className='spinner'></div>
            <p className='text-bgDark text-lg font-semibold'> Loading...</p>
        </div>
    )
}

export default Spinner;