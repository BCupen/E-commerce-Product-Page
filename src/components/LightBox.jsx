import React from 'react'
import ImageCarousel from './ImageCarousel'

const LightBox = ({mainProductImages, thumbnailImages, onClose}) => {
  return (
    <div className='w-[100vw] h-screen absolute z-10 bg-black bg-opacity-75 hidden md:flex items-center justify-center'>
        <ImageCarousel onClose={onClose} isLightBox={true} mainProductImages={mainProductImages} thumbnailImages={thumbnailImages}/>
    </div>
  )
}

export default LightBox