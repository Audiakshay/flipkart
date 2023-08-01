import React from 'react'
import { StarIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';

function FashionProduct({product}) {
  return (
    <div className='w-[22vw] shadow-lg m-1'>
          <img className='w-[100%] h-[40vh] object-contain' src={product.image} alt="" />
        <div className='p-3'>
        <p className='text-[#878787] font-semibold text-sm'>{product.category}</p>
        <p className='font-bold text-[#212121] line-clamp-1'>{product.title}</p>
        <div className='flex'>
            <p className='font-bold'>&#8377;369</p>
            <p className='text-[#878787] line-through mx-3 font-semibold'>&#8377;1,849</p>
            <p className='font-semibold text-[#388e3c]'>80% off</p>
        </div>
        <p className='text-xs text-[#212121] my-1'>Free delivery</p>
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((ratings) => (
            <StarIcon
              key={ratings}
              className={clsx(
                'h-4 w-4 flex-shrink-0 text-gray-300',
                {
                  'text-orange-400': 3 > ratings,
                },
              )}
              aria-hidden="true"
            />
          ))}
        </div>
        </div>
    </div>
  )
}

export default FashionProduct