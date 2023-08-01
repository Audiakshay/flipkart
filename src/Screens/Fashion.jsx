import React, { useEffect } from 'react';
import FashionProduct from '../Components/FashionProduct';
import { useDispatch, useSelector } from 'react-redux';
import { StarIcon } from '@heroicons/react/20/solid';
import fashionProductsAction from '../Redux/Actions/fashionProducts';

function Fashion() {
    const { fashion, gender } = useSelector((state) => ({
        fashion: state.fashion,
        gender: state.filterFashion.gender,
    }));
    const dispatch = useDispatch();
    console.log(gender);

    useEffect(() => {
        dispatch(fashionProductsAction())
    },[])
  return (
    <div className='w-full bg-[#ededed] flex justify-between p-2'>
        <div className='h-[100vh] bg-white w-[20%] sticky top-2 py-8 px-3'>
            <p className='font-bold text-3xl border-b-2 mb-2'>Filters</p>
            <div className='text-lg font-semibold border-b pb-2'>
                <div className='pb-1' onClick={() => dispatch({type:'ADD_GENDER', payload: 'men'})}><input type='radio' name='filter' checked={gender === 'men'} className='mr-1' /><label htmlFor="filter">Mens</label></div>
                <div className='pb-1' onClick={() => dispatch({type:'ADD_GENDER', payload: 'women'})}><input type='radio' name='filter' checked={gender === 'women'}  className='mr-1' /><label htmlFor="filter">Womens</label></div>
                <div className='pb-1' onClick={() => dispatch({type:'ADD_GENDER', payload: ''})}><input type='radio' name='filter' checked={gender === ''} className='mr-1' /><label htmlFor="filter">All</label></div>
            </div>
            <div className='border-b py-3'>
                <p className='text-lg font-bold py-2 m-0'>CUSTOMER RATINGS</p>
                <div className='pb-1 flex items-center'><input type='radio' name='customerRating' className='mr-1' /><label htmlFor="filter" className='flex items-center'>4 <StarIcon className='h-4 w-4 flex-shrink-0 text-black' /> & above</label></div>
                <div className='pb-1 flex'><input type='radio' name='customerRating' className='mr-1' /><label htmlFor="filter" className='flex items-center'>3 <StarIcon className='h-4 w-4 flex-shrink-0 text-black' /> & above</label></div>
            </div>
            <div className='border-b py-3'>
                <div className='flex justify-between w-[90%]'>
                <p className='text-lg font-bold py-2 m-0'>PRICE</p>
                <button className='text-[#2874f0] font-bold'>Aplay</button>
                </div>
            <div className='flex w-[90%] justify-between my-2'>
                <select name="minPrice" className='border border-[#212121]'>
                    <option value={0}>min</option>
                    <option value={100}>&#8377;100</option>
                    <option value={200}>&#8377;200</option>
                </select>
                <select name="maxPrice" className='border border-[#212121]'>
                    <option value={300}>&#8377;300</option>
                    <option value={500}>&#8377;500</option>
                    <option value={2000}>&#8377;2000</option>
                </select>
            </div>
            </div>
        </div>
        <div className='bg-white w-[79.7%] p-3'>
            <div>
                <a href='/' className='text-sm text-[#575757] font-semibold hover:text-[#2874f0] no-underline'>Home &gt; </a>
                <a href="/" className='text-sm text-[#575757] font-semibold hover:text-[#2874f0] no-underline'>Fashion</a>
            </div>
            <p className='text-xs text-[#575757] my-3'>If you want to stay on top of the fashion trends, then you need to shop for the latest and trendiest topwear from an e-commerce site Flipkart. Check out the amazing collection of topwear for women online and select the ones that suit you the best. Browse through stylish women’s topwear that are offered by popular brands, such as Only, Jockey, U&F, Darzi, Ann Springs, and more. Women can style a trendy tops with jeggings and sandals to nail the perfect casual look. Try pairing crop tops with denim shorts for the perfect summer look. Also, check out trendy topwear for men online that are sold by brands, such as Allen Solly, Wildcraft, FastColors, Smartees, Adidas, and more. Men can pair polo shirts & T-shirts with chinos and loafers for the perfect brunch or picnic look. To nail the perfect office look, men can pair formal shirts with trousers and formal shoes to look dapper and stylish. You can also buy trendy and fashionable topwear for kids from your favorite online shopping site. From T-shirts and tops to shirts and frocks, you can find fashionable and comfortable clothes online for your little ones. The information you are reading has been last updated on 01-Aug-23.</p>
            <p className='font-bold'>{gender === '' ? 'All' : gender === 'men' ? "Men's":"Women's"} Products</p>
            <div className='flex flex-wrap'>{
                fashion?.map((item) => item.category.startsWith(gender) ? <FashionProduct product={item} key={item.id}/> : null)
                }
            </div>
        </div>
    </div>
  )
}

export default Fashion