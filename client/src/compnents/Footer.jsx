import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className='flex items-center justify-between gap-4 px-4 py-3 lg:mx-44'>
            <Link to={'/'}>
                <img className='w-32 sm:w-44' src={assets.logo} alt="" />
            </Link>

            <p className='flex-1 border-l border-gray-600 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @BilalDev | All right reserved</p>

            <div className='flex gap-1'>
                <img width={40} src={assets.facebook_icon} alt="" />
                <img width={40} src={assets.twitter_icon} alt="" />
                <img width={40} src={assets.google_plus_icon} alt="" />
            </div>

        </div>
    )
}

export default Footer