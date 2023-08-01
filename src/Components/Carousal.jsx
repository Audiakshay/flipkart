import React from 'react'
function Carousal({ pro, card }) {
    return (

        <>
            <div id="carouselExampleAutoplaying" className="carousel slide position-absolute" data-bs-ride="carousel"
                style={{ height: '200px' }}>
                <div className="carousel-inner">
                    {pro?.map((x) => (
                        <div className="carousel-item active">
                           <a href="" ><img src={x.img} className="d-block w-100" alt="..." /></a>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className='row p-2 position-relative' style={{ marginTop: '300px' }}>
                <div className='col-3 '>
                    <div className='p-3 bg-white h-100'>
                        <h1 style={{ fontSize: '22px', fontWeight: '800' }} className='pb-4 pt-2'>Great Freedom sale</h1>
                        <a href=""><img src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Aug23ART/GW/AugART23_PC_CC_1X_EN._SY304_CB599188017_.jpg" style={{ width: '100%', paddingTop: '4%' }} /></a>
                        <a href="" className='d-flex align-items-center mt-8' style={{color: '#007185'}}>see all</a>
                    </div>

                </div>
                <div className='col-3'>
                    <div className='p-3 bg-white h-100'>
                        <h1 style={{ fontSize: '22px', fontWeight: '700' }} className='pb-2 pt-2'>Bluetooth Calling Smartwatch starts at...</h1>
                        <a href=""><img src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg' style={{ width: '100%', paddingTop: '4%' }} /></a>
                        <a href="" className='d-flex align-items-center mt-6' style={{color: '#007185'}}>shop now</a>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='p-3 bg-white h-100'>
                        <h1 style={{ fontSize: '22px', fontWeight: '700' }} className='pb-2 pt-2'>Up to 70% off | Clearance store</h1>
                        <a href=""><img src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg' style={{ width: '100%', paddingTop: '4%' }} /></a>
                        <a href=""  className='d-flex align-items-center mt-6' style={{color: '#007185'}}>See more</a>
                    </div>
                </div>
                <div className='col-3 h-100'>
                    <div className='bg-white'>
                        <div className='p-3'>
                            <h1 style={{ fontSize: '22px', fontWeight: '700' }} className='pb-2 pt-2'>Sign in for your best experience</h1>
                            <div className='d-flex pt-3'>
                                <button className='signinbtn align-self-center bg-warning btn w-100'>Sign in securely</button>
                            </div>

                        </div>
                        <div >
                            <a href="">
                                <img src="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg" className='w-100' />
                            </a>

                        </div>
                    </div>
                </div>

            </div>
           
        </>

    );
}

export default Carousal