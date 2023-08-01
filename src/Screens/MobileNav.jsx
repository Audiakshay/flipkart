import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import mobileAction from '../Redux/Actions/MobileAction';

const MobileNav = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(mobileAction());
      }, []);
      const list = useSelector(state => state?.mob?.list);
      console.log(list);

  return (
    <><div className='mx-2'>
          <p className='text-[18px] font-semibold py-4'>Mobile Phones Curtain Raiser deals</p>
          <p className='text-[12px] text-[#00000090] font-semibold'>Mobile phones are no more merely a part of our lives. Whether it's to stay connected with friends and family or to keep abreast of important developments around the world, mobiles are no longer for sending a text or making a call. From budget to state-of-the-art smartphones; indigenous names to global big-wigs - a whole universe of mobiles await you on Flipkart. Whether you’re looking for waterdrop notch screens, a high screen to body ratio, AI-powered sensational cameras, high storage capacity, blazing quick processing engines or reflective glass designs, rest assured you won’t have to venture anywhere else for your smartphone needs. The information you are reading has been last updated on 01-Aug-23. </p>
          <a href='#new' className='text-[#0f4fff] font-semibold text-xs'>vivo T1X | OPPO Reno 8 Pro 5G |  OPPO Reno7 Pro 5G | OPPO Reno7 5G | iPhone 13 Mini | iPhone 12 | OPPO Find N2 Flip | iphone 14 | Infinix Smart 7 HD | Pixel 7a | POCO F5 | Moto Edge 40</a>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/8882915e08c48113.jpg?q=50" alt='greatSale' className='w-[100vw] h-[50vh]' />
          <img src="https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/e6d412bf4ad31101.jpg?q=50" alt='greatSale' className='w-[100vw] h-[30vh]' />
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/32f2dd29c6e2c53f.jpg?q=50" alt='greatSale' className='w-[100vw] h-[40vh]' />
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/d5ae8bc370fccd49.jpg?q=50" alt='greatSale' className='w-[100vw] h-[40vh]' />
          <img src="https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/1597d5574c4ccce6.jpg?q=50" alt='greatSale' className='w-[100vw] h-[30vh]' />
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/37381ccf149ec445.jpg?q=50" alt='greatSale' className='w-[100vw] h-[40vh]' />
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/994d5bf785290423.jpg?q=50" alt='greatSale' className='w-[100vw] h-[40vh]' />
          <img src="https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/99ed6f5e078c33de.jpg?q=50" alt='greatSale' className='w-[100vw] h-[30vh]' />
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/7fc050ddfccc453f.jpg?q=50" alt='greatSale' className='w-[100vw] h-[40vh]' />
          <img src="https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/d411baa181ad6f27.jpg?q=50" alt='greatSale' className='w-[100vw] h-[30vh]' />
      </div>
      <div className='bg-white mt-8 shadow-black shadow-md px-6 py-8'>
              {list.map(x => (
                  <>
                      <h2 className='text-[#878787] font-bold my-2'>{x.title}</h2>
                      <p className='text-xs text-[#878787]'>{x.desc}</p>
                  </>
              ))}
          </div></>
  )
}

export default MobileNav