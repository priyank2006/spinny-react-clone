import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-[#30054c] text-[#FFFFF1] py-5'>
            <div className='container flex items-center px-4'>
                <div className='me-10'>
                    <img width={150} height={10} src="/logo.svg" alt="" />
                </div>
                <div>
                    <button className='font-sans font-bold bg-transparent ring-1 ring-gray-600 items-center py-2 px-4 rounded-full'> Ahmedabad </button>
                    <input type="text" className='text-gray-50 font-bold bg-transparent ring-1 ring-gray-600 mx-2 rounded-full py-2 px-4' placeholder='Search Make or Model' />
                </div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar