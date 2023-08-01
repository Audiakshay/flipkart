import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
function Carousal({ pro, card }) {
    return (
       <div>
        <Carousel data-bs-theme="dark">
            {pro?.map((x) => (

                <Carousel.Item>
                    <div className='row'>
                        <div className='col-4'><h1>Smart Phones</h1></div>
                        <div className='col-7'> <img
                            className="d-block w-100"
                            src={x.img}
                            alt="Third slide"
                        /></div>

                    </div>


                </Carousel.Item>
            ))}
        </Carousel>
       
            <div className='row m-auto p-2'>
                <div className='col-3 '>
                    <div className='p-2 bg-white'>
                    <h1 style={{ fontSize: '22px', fontWeight: '800' }}>Great Freedom sale</h1>
                    <a href=""><img src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Aug23ART/GW/AugART23_PC_CC_1X_EN._SY304_CB599188017_.jpg" style={{ width: '100%', paddingTop: '4%' }} /></a>
                    <a href="" style={{ display: 'flex', alignItems: 'center', color: '#007185', marginTop: '5%' }}>see all</a>
                    </div>
                   
                </div>
                <div className='col-3'>
                <div className='p-2 bg-white'>
                    <h1 style={{ fontSize: '22px', fontWeight: '700' }}>Bluetooth Calling Smartwatch starts at...</h1>
                    <a href=""><img src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg' style={{ width: '100%', paddingTop: '4%' }} /></a>
                    <a href="" style={{ display: 'flex', alignItems: 'center', color: '#007185', marginTop: '5%' }}>shop now</a>
               </div>
                </div>
                <div className='col-3'>
                <div className='p-2 bg-white'>
                    <h1 style={{ fontSize: '22px', fontWeight: '700' }}>Up to 70% off | Clearance store</h1>
                    <a href=""><img src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg' style={{ width: '100%', paddingTop: '4%' }} /></a>
                    <a href="" style={{ display: 'flex', alignItems: 'center', color: '#007185', marginTop: '5%' }}>See more</a>
                </div>
                </div>
                <div className='col-3'>
                <div className='p-2 bg-white'>
                    <div className='card-divs2 p-2'>
                        <h1 style={{ fontSize: '22px', fontWeight: '700' }}>Sign in for your best experience</h1>
                       <div className='d-flex pt-3'>
                       <button className='signinbtn align-self-center bg-warning btn w-100'>Sign in securely</button>
                       </div>
                     
                    </div>
                    <div>
                        <a href="">
                            <img src="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg" />
                        </a>

                    </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Carousal