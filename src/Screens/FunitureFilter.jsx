
import React, { useState,useEffect } from 'react'


const FunitureFilter = () => {

   
    const [arrow, setarrow] = useState("<");
    const [showmenu, setshow] = useState(false);
    const [showmore, setshowmore] = useState(false);
    const [expand, setexpand] = useState(true);
    const Drpmenu = () => {

        setshow(!showmenu)
    }
    const MoreItems = () => {

        setshowmore(!showmore)
        setexpand('')

    }
    const LessItems = () => {

        setexpand(true)

        setshowmore(!showmore)
    }
    return (
        <div className='bg-white m-4'>
            <h1 className='border-bottom fw-bold p-3'>Filters</h1>
            <p className='p-3'>CATEGORIES</p>
            <h1 className='fw-bold pl-3' onClick={Drpmenu}>{arrow} Home Furnishing</h1>
            {
                showmenu ? <ul className='p-3 border-bottom'>
                    <li><a href=''>Bed Linen & Blankets</a></li>
                    <li><a href=''>Curtains & Accessories</a></li>
                    <li><a href=''>Bath Linen</a></li>
                    <li><a href=''>Floor Coverings</a></li>
                    <li><a href=''>Cushions & Pillows</a></li>
                    {
                        expand ? <li onClick={MoreItems} className='text-info'> Show 3 more</li> : ""
                    }

                    {
                        showmore ? <>

                            <li><a href=''> Covers & Protectors</a></li>
                            <li><a href=''>Kitchen & Table Linen</a></li>
                            <li><a href=''>Sofa & Curtain Fabrics</a></li>
                            <li onClick={LessItems} className='text-info'>Show less</li>
                        </>

                            : ""

                    }

                </ul> : ''

            }

            <p className='pt-2 pr-3 pl-3'>PRICE</p>
            <div className='pr-3 pl-3'>
                <input type="range" min="1" max="100" value="100" className='w-100' />
            </div>

            <div className='d-flex flex-row w-100 justify-content-between p-3 border-bottom'>
                <select className="custom-select w-[40%] border">
                    <option selected>Min</option>
                    <option value="1">500</option>
                    <option value="2">1000</option>
                    <option value="3">2000</option>
                    <option value="4">4000</option>
                    <option value="5">6000</option>
                </select>
                <h1>to</h1>
                <select className="custom-select  w-[40%] border">
                    <option selected>6000+</option>
                    <option value="1">500</option>
                    <option value="2">1000</option>
                    <option value="3">2000</option>
                    <option value="4">4000</option>
                    <option value="5">6000+</option>
                </select>
            </div>
            <div className='pt-3 pr-3 pl-3 d-flex flex-row border-bottom pb-3'>
                <div className='d-flex flex-row'>
                    <input type="checkbox" />
                    <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png' className='w-50 pl-3' />
                </div>

                <div className='d-flex justify-content-end'>
                    <button className='border rounded-circle pl-2 pr-2 border-dark small ml-4 mr-4'>?</button>
                </div>

            </div>
            <p className='pt-2 pr-3 pl-3'>BRAND</p>


        </div>
    )
}

export default FunitureFilter