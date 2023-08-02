import React from 'react'
import { useSelector } from 'react-redux'
import cart from "../assets/shopping-cart.png";
import bolt from "../assets/energy.png";
import label from "../assets/label.png";



const ProductPreview = () => {
    const val = useSelector((res) => res?.ProductPreview)
    console.log(val);
    return (
        <div className='flex gap-4'>

            <div className='h-screen w-[50%]'>
                <img src={val?.img} alt='...' className='h-[70%] w-full' />
                <div className=' items-center justify-center flex gap-2 my-3'>
                    <button className='bg-[#ff9f00] flex items-center justify-center p-2 w-50 gap-2 font-semibold text-white'>
                        <img src={cart} alt="..." className='h-5 w-5' />
                        ADD TO CART</button>
                    <button className='bg-[#fb641b]  flex items-center justify-center p-2 w-50 gap-2 font-semibold text-white'>
                        <img src={bolt} alt="" className='h-5 w-5 fill-white' />
                        BUY NOW</button>
                </div>

            </div>

            <div className='w-full'>
                <p className='text-2xl font-semibold'>
                    {val?.productTitle}
                </p>
                <p className='font-bold text-[#878787]'>
                    {val?.rating}
                </p>
                <div className='flex items-center gap-3'>
                    <p className='text-2xl font-bold'>₹ {val?.price}</p>
                    <p className='text-xl font-bold text-green-600'>
                        {val?.offer}
                    </p>
                </div>
            <div className='py-1'>
                <p className='font-bold'>Available offers</p>
                <div className='flex h-6 items-center gap-2 py-3'> <img src={label} alt="..." className ='h-4, w-4'/><p><span className='font-semibold'>Bank Offer</span> Flat ₹100 Instant Cashback on Paytm Wallet. Min Order Value ₹1000. Valid once per Paytm account</p></div>  
                <div className='flex h-6 items-center gap-2 py-3'> <img src={label} alt="..." className ='h-4, w-4'/><p><span className='font-semibold'>Bank Offer</span> 5% Cashback on Flipkart Axis Bank Card</p></div>
                <div className='flex h-6 items-center gap-2 py-3'> <img src={label} alt="..." className ='h-4, w-4'/><p>Extra ₹500 Off on Bikes & Scooters on purchase of ₹30,000 or more</p></div>
                <div className='flex h-6 items-center gap-2 py-3'> <img src={label} alt="..." className ='h-4, w-4'/><p><span className='font-semibold'>Partner Offer</span>Sign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000</p></div>
                <div className='flex h-6 items-center gap-2 py-3'> <img src={label} alt="..." className ='h-4, w-4'/><p><span className='font-semibold'>No cost EMI ₹834/month.</span> Standard EMI also available</p></div>
                <div className='flex h-6 items-center gap-2 py-3'> <img src={label} alt="..." className ='h-4, w-4'/><p><span className='font-semibold'>No cost EMI ₹834/month.</span> Standard EMI also available</p></div>
                <div className='flex h-6 items-center gap-2 py-3'> <img src={label} alt="..." className ='h-4, w-4'/><p><span className='font-semibold'>Partner Offer</span>Purchase now & get 1 surprise cashback coupon in Future</p></div>
            </div>

            </div>

           

        </div>
    )
}

export default ProductPreview