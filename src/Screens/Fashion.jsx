import React, { useEffect } from 'react';
import FashionProduct from '../Components/FashionProduct';
import { useDispatch, useSelector } from 'react-redux';
import { StarIcon } from '@heroicons/react/20/solid';
import fashionProductsAction from '../Redux/Actions/fashionProducts';

function Fashion() {
    const fashion = useSelector((state) => state.fashion);
    const dispatch = useDispatch();
    console.log(fashion);

    useEffect(() => {
        dispatch(fashionProductsAction())
    },[])
  return (
    <div className='w-full bg-[#ededed] flex justify-between p-2'>
        <div className='h-[100vh] bg-white w-[20%] sticky top-2 py-8 px-3'>
            <p className='font-bold text-3xl border-b-2'>Filters</p>
            <div className='text-lg font-semibold border-b pb-2'>
                <div className='pb-1'><input type='radio' name='filter' className='mr-1' /><label htmlFor="filter">Men</label></div>
                <div className='pb-1'><input type='radio' name='filter' className='mr-1' /><label htmlFor="filter">Women</label></div>
                <div className='pb-1'><input type='radio' name='filter' className='mr-1' /><label htmlFor="filter">All</label></div>
            </div>
            <div className='border-b py-1'>
                <p className='text-lg font-bold py-2 m-0'>CUSTOMER RATINGS</p>
                <div className='pb-1 flex items-center'><input type='radio' name='customerRating' className='mr-1' /><label htmlFor="filter" className='flex items-center'>4 <StarIcon className='h-4 w-4 flex-shrink-0 text-black' /> & above</label></div>
                <div className='pb-1 flex'><input type='radio' name='customerRating' className='mr-1' /><label htmlFor="filter" className='flex items-center'>3 <StarIcon className='h-4 w-4 flex-shrink-0 text-black' /> & above</label></div>
            </div>
        </div>
        <div className='bg-white w-[79.7%] p-3'>
            <div>
                <a href='/' className='text-sm text-[#575757] font-semibold hover:text-[#2874f0] no-underline'>Home &gt; </a>
                <a href="/" className='text-sm text-[#575757] font-semibold hover:text-[#2874f0] no-underline'>Fashion</a>
            </div>
            <p className='text-xs text-[#575757] my-3'>If you want to stay on top of the fashion trends, then you need to shop for the latest and trendiest topwear from an e-commerce site Flipkart. Check out the amazing collection of topwear for women online and select the ones that suit you the best. Browse through stylish women’s topwear that are offered by popular brands, such as Only, Jockey, U&F, Darzi, Ann Springs, and more. Women can style a trendy tops with jeggings and sandals to nail the perfect casual look. Try pairing crop tops with denim shorts for the perfect summer look. Also, check out trendy topwear for men online that are sold by brands, such as Allen Solly, Wildcraft, FastColors, Smartees, Adidas, and more. Men can pair polo shirts & T-shirts with chinos and loafers for the perfect brunch or picnic look. To nail the perfect office look, men can pair formal shirts with trousers and formal shoes to look dapper and stylish. You can also buy trendy and fashionable topwear for kids from your favorite online shopping site. From T-shirts and tops to shirts and frocks, you can find fashionable and comfortable clothes online for your little ones. The information you are reading has been last updated on 01-Aug-23.</p>
            <p className='font-bold'>All Products</p>
            <div className='flex flex-wrap'>{
                fashion?.map((item) => <FashionProduct product={item} key={item.id}/>)
                }
            </div>
        </div>
    </div>
  )
}

export default Fashion