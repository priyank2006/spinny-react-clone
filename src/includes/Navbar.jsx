import React from 'react'

const Navbar = () => {
    return (
        <header>
            <nav className='bg-[#30054c] text-[#FFFFF1] py-2'>
                <div className='container flex items-center mx-auto py-2 px-4'>
                    <div className='me-10'>
                        <img width={120} height={10} src="/logo.svg" alt="" />
                    </div>
                    <div>
                        <button className='font-sans font-medium bg-transparent ring-1 ring-gray-600 items-center py-2 px-4 rounded-full'> Ahmedabad <i className="ri-arrow-down-s-fill"></i> </button>
                        <input type="text" className='w-72 px-2 text-gray-50 font-medium bg-transparent ring-1 ring-gray-600 mx-2 rounded-full py-2 text-start' placeholder='Search Make or Model' />
                    </div>
                    <div>
                        <ul className='flex items-center justify-around'>
                            <li className='mx-3 text-white font-sans font-medium text-[16px]'> Buy Car </li>
                            <li className='mx-3 text-white font-sans font-medium text-[16px]'> Sell Car </li>
                            <li className='mx-3 text-white font-sans font-medium text-[16px]'> More <i className="ri-arrow-down-s-fill"></i> </li>
                            <li className='ml-24 mx-3 text-white font-sans font-medium text-[16px]'><i className="text-2xl ri-heart-line"></i> </li>
                            <li className='ml-8 mx-3 text-white font-sans font-medium text-[16px]'> <i className="ri-user-line text-2xl"></i> </li>
                            <li class="flex ml-8 mx-3 text-white font-sans font-medium text-[16px]">
                                <div class="flex flex-col ml-2">
                                    <span className='text-xs text-gray-300'>Call Us At</span>
                                    <span class="font-bold text-xl">727-727-7275</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='bg-[#5a137e] text-[#FFFFF1] py-3 items-center'>
                <div className='container mx-auto'>
                    <ul className='flex'>
                        <li className='mx-3 text-gray-400 font-sans font-medium text-[14px]'> Explore By </li>
                        <li className='mx-3 text-white font-sans font-medium text-[14px]'> Price Range <i className="ri-arrow-down-s-fill"></i> </li>
                        <li className='mx-3 text-white font-sans font-medium text-[14px]'> Make & Model <i className="ri-arrow-down-s-fill"></i> </li>
                        <li className='mx-3 text-white font-sans font-medium text-[14px]'> Year <i className="ri-arrow-down-s-fill"></i> </li>
                        <li className='mx-3 text-white font-sans font-medium text-[14px]'> Fuel <i className="ri-arrow-down-s-fill"></i> </li>
                        <li className='mx-3 text-white font-sans font-medium text-[14px]'> KM Driven <i className="ri-arrow-down-s-fill"></i> </li>
                        <li className='mx-3 text-white font-sans font-medium text-[14px]'> Body Type <i className="ri-arrow-down-s-fill"></i> </li>
                        <li className='mx-3 text-white font-sans font-medium text-[14px]'> Transmission <i className="ri-arrow-down-s-fill"></i> </li>
                        <li className='mx-3 text-white font-sans font-medium text-[14px]'> Body Colour <i className="ri-arrow-down-s-fill"></i> </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Navbar