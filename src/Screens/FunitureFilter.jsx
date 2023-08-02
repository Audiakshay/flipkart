
import React, { useState } from 'react'

const FunitureFilter = () => {
    const [arrow, setarrow] = useState("<");
    const [showmenu, setshow] = useState(false);
    const [showmore, setshowmore] = useState(false);
    const [expand, setexpand] = useState(true);
    const Drpmenu = () => {
        
        setshow(!showmenu)
    }
    const MoreItems=()=>{
        
          setshowmore(!showmore)
          setexpand('')
    
    }
    const LessItems=()=>{
        
        setexpand(true)
    
        setshowmore(!showmore)
    }
    return (
        <div className='bg-white m-4'>
            <h1 className='border-bottom fw-bold p-3'>Filters</h1>
            <p className='p-3'>CATEGORIES</p>
            <h1 className='fw-bold' onClick={Drpmenu}>{arrow} Home Furnishing</h1>
            {
                showmenu ? <ul className='p-3'>
                    <li><a href=''>Bed Linen & Blankets</a></li>
                    <li><a href=''>Curtains & Accessories</a></li>
                    <li><a href=''>Bath Linen</a></li>
                    <li><a href=''>Floor Coverings</a></li>
                    <li><a href=''>Cushions & Pillows</a></li>
                    {
                        expand?   <li onClick={MoreItems} className='text-info'> Show 3 more</li>:""
                    }
                 
                    {
                 showmore?    <>
             
                 <li><a href=''> Covers & Protectors</a></li>
                 <li><a href=''>Kitchen & Table Linen</a></li>
                 <li><a href=''>Sofa & Curtain Fabrics</a></li>
                 <li onClick={LessItems} className='text-info'>Show less</li>
                 </>
               



                 :""
             
            }  
                       
                </ul> : ''

            }
                   

                        
        </div>
    )
}

export default FunitureFilter