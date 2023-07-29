import React from 'react'
import FooterLists from './FooterLists';


function Footer() {
    const footerList = [
        {
            title: 'ABOUT',
            list:['Contact Us', 'About Us', 'Careers', 'Flipkart Stories', 'Press', 'Flipkart Wholesale', 'Corporate Information']
        },
        {
            title: 'HELP',
            list:['Payments', 'Shipping', 'Cancellation &', 'Returns', 'FAQ', 'Report Infringement']
        },
        {
            title: 'CONSUMER POLICY',
            list:['Cancellation &', 'Returns', 'Terms Of Use', 'Security', 'Privacy', 'Sitemap', 'Grievance Redressal', 'EPR Compliance']
        },
        {
            title: 'SOCIAL',
            list:['Facebook', 'Twitter', 'YouTube']
        },
        {
            title: 'Mail Us:',
            list:['Flipkart Internet Private Limited,', 'Buildings Alyssa, Begonia &', 'Clove Ring Road, Devarabeesanahalli Village,', 'Bengaluru, 560103,', 'Karnataka, India' ]
        },
        {
            title: 'Registered Office Address:',
            list:['Flipkart Internet Private Limited,', 'Buildings Alyssa, Begonia &', 'Clove Ring Road, Devarabeesanahalli Village,', 'Bengaluru, 560103,', 'Karnataka, India', 'CIN: U51109KA2012PTC066107', 'Telephone: ' ]
        },
        
    ];
    const addList = [
        {icon: require('../assets/seller.png'), title:'Become a seller'},
        {icon: require('../assets/star.png'), title:'Advertise'},
        {icon: require('../assets/gift.png'), title:'Gift Cards'},
        {icon: require('../assets/help.png'), title:'Help Center'},
    ]
  return (
    <div className="w-full bg-gray-900">
        <div className='md:flex justify-between md:mx-12 mx-4 md:py-10 pb-10'>{
        footerList.map((item) => (
            <FooterLists key={item.title} title={item.title} list={item.list}/>       
        ))
    }</div>
    <div className='md:flex items-center justify-evenly border-t border-indigo-300 py-6 px-5'>
        <div className='flex w-[45%] justify-around'>
            {addList.map((item) => (
                <div key={item.title} className='flex items-center py-2'>
                    <img className='w-4 h-4 mr-2' src={item.icon} alt="icon" />
                    <p className='text-white text-sm font-bold'>{item.title}</p>
                </div>
            ))}
        </div>
        <p className='text-white font-semibold text-sm my-3'>&copy; 2007-2023 Flipkart.com</p>
        <img  src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg' alt='flipkart'/>
    </div>
    </div>
  )
}

export default Footer;