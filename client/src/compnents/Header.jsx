import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='flex justify-between items-center max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
            {/* left div container */}
            <div >
                <h1 className='text-4xl font-bold xl:text-5xl 2xl:text-6xl text-neutral-700 leading-tight'>
                    Remove the <br className='max-md:hidden' />
                    <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>
                        background
                    </span> from <br className='max-md:hidden' /> your images is free.
                </h1>
                <p className='my-6 text-[15px] text-gray-500'>
                    Transform your images effortlessly with our AI-powered background removal tool.<br className='max-sm:hidden' />
                    Perfect for professionals and creatives alike,our app delivers precision, speed,<br className='max-sm:hidden' />
                    and simplicity. Upload, edit, and download in seconds—no design skills needed!
                </p>
                <div>
                    <input type="file" id='upload1' hidden />
                    <label className='inline-flex gap-3 py-3 px-8 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700' htmlFor="upload1">
                        <img width={20} src={assets.upload_btn_icon} alt="" />
                        <p className='text-white text-sm'>Upload an image</p>
                    </label>
                </div>

            </div>
            {/* right div container */}
            <div className='w-full max-w-md'>
                <img src={assets.header_img} alt="" />
            </div>
        </div>
    )
}

export default Header