import React, { useEffect } from 'react';
import FashionProduct from '../Components/FashionProduct';
import { useDispatch, useSelector } from 'react-redux';
import fashionProductsAction from '../Redux/Actions/fashionProducts';

function Fashion() {
    const fashion = useSelector((state) => state.fashion);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fashionProductsAction())
    },[])
  return (
    <div className='w-full bg-[#ededed] flex justify-between p-2'>
        <div className='h-[100vh] bg-white w-[25%]'>
            <p>Filters</p>
            <div>GENDER</div>
        </div>
        <div className='bg-white w-[74.3%] p-3'>
            <div>
                <a href='/' className='text-sm text-[#575757] font-semibold hover:text-[#2874f0]'>Home &gt; </a>
                <a href="/" className='text-sm text-[#575757] font-semibold hover:text-[#2874f0]'>Fashion</a>
            </div>
            <p className='text-xs text-[#575757] my-3'>If you want to stay on top of the fashion trends, then you need to shop for the latest and trendiest topwear from an e-commerce site Flipkart. Check out the amazing collection of topwear for women online and select the ones that suit you the best. Browse through stylish women’s topwear that are offered by popular brands, such as Only, Jockey, U&F, Darzi, Ann Springs, and more. Women can style a trendy tops with jeggings and sandals to nail the perfect casual look. Try pairing crop tops with denim shorts for the perfect summer look. Also, check out trendy topwear for men online that are sold by brands, such as Allen Solly, Wildcraft, FastColors, Smartees, Adidas, and more. Men can pair polo shirts & T-shirts with chinos and loafers for the perfect brunch or picnic look. To nail the perfect office look, men can pair formal shirts with trousers and formal shoes to look dapper and stylish. You can also buy trendy and fashionable topwear for kids from your favorite online shopping site. From T-shirts and tops to shirts and frocks, you can find fashionable and comfortable clothes online for your little ones. The information you are reading has been last updated on 01-Aug-23.</p>
            <p className='font-bold'>All Products</p>
            <div className='flex flex-wrap'>{
                fashion.map((item) => <FashionProduct product={item} key={item.id}/>)
                }
            </div>
        </div>
    </div>
  )
}

export default Fashion