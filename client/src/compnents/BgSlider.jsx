import React, { useState } from 'react'
import { assets } from '../assets/assets'
import '../index.css'

const BgSlider = () => {
    const [sliderPosition, setSliderPosition] = useState(50)

    const slideHandlerChange = (e) => {
        setSliderPosition(e.target.value)
    }


    return (
        <div>
            {/* title  */}
            <h1 className='mb-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl mt-4  font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>
                Remove Background with High <br /> Quality and Accuracy
            </h1>

            {/* image bg removal slider  */}
            {/* is div main hum nay slider ka kam hai usestate ka used karkay ek ki value kam hogi to dusray ki bahay gi  */}
            <div className='relative w-full max-w-3xl overflow-hidden m-auto rounded-xl '>

                {/* Background image  */}
                <img className='absolute top-0 left-0 w-full h-full ' src={assets.image_w_bg} alt="" style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)` }} />
                {/* foreground image */}
                <img src={assets.image_wo_bg} alt="" style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }} />
                {/* slider  */}
                <input className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-10 slider' type="range" min={0} max={100} value={sliderPosition} onChange={slideHandlerChange} />
            </div>
        </div>
    )
}

export default BgSlider