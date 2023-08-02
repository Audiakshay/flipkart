import React, { useEffect } from 'react'

import FunitureFilter from './FunitureFilter'
import { useDispatch, useSelector } from 'react-redux';
const Homefurniture = () => {
  const furniture = useSelector((state) => state?.furniture);


  return (
    <div className='d-flex'>
      <div className='w-25'>
        <FunitureFilter />
      </div>

      <div className='border w-100 flex flex-wrap flex-row'>

        {
          furniture?.map((item, i) => (
            <>
              <div className='w-25 shadow-md pr-2 pl-2  relative '>
                <img className='w-6 h-6 absolute top-0 right-12' src={require('../assets/heart.png')} alt='heart_icon' />
                <img className='w-[100%] h-[50vh] object-contain' src={item.image} alt="" />
                <div className='p-3'>
                
                  <p className='font-bold text-[#212121] line-clamp-1'>{item.title}</p>
                  <div className='flex'>
                    <p className='font-bold'>&#8377;{item.price}</p>
                    <p className='text-[#878787] line-through mx-3 font-semibold'>&#8377;{(item.price + (item.price * item.offer)).toFixed(2)}</p>
                    <p className='font-semibold text-[#388e3c]'>{item.offer * 100}% off</p>
                  </div>
                  <p className='text-xs text-[#212121] my-1'>Free delivery</p>

                </div>
              </div>
            </>

          ))
        }
      </div>
    </div>
  )
}

export default Homefurniture