import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Input from '../Components/Input';
import Dropdown from '../Components/Dropdown';


function Travel() {
    const arr = [
        {image: 'https://rukminim2.flixcart.com/fk-p-flap/480/480/image/ba910b022b5d7662.jpg?q=50' },
        {image: 'https://rukminim2.flixcart.com/fk-p-flap/480/480/image/6b0a10175338ab76.jpg?q=50' },
        {image: 'https://rukminim2.flixcart.com/fk-p-flap/480/480/image/d89e06070d9c322a.jpg?q=50' },
        {image : 'https://rukminim2.flixcart.com/fk-p-flap/480/480/image/f5e49d1f18e0b545.jpg?q=50'},
        {image : 'https://rukminim2.flixcart.com/fk-p-flap/480/480/image/1d9cd2285f4108e2.jpg?q=50'},
        {image : 'https://rukminim2.flixcart.com/fk-p-flap/480/480/image/de221519489bb3b5.jpg?q=50'}
    ]

    const arr1 = [
        {
            image:'https://rukminim2.flixcart.com/fk-p-flap/480/480/image/9e82b0b50809620b.jpg?q=50'
        },
        {
            image:'https://rukminim2.flixcart.com/fk-p-flap/480/480/image/9e82b0b50809620b.jpg?q=50'
        },
        {
            image:'https://rukminim2.flixcart.com/fk-p-flap/480/480/image/9e82b0b50809620b.jpg?q=50'
        }
    ]

    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ];
    
      const handleDropdownSelect = (selectedValue) => {
        console.log('Selected value:', selectedValue);
      };
    
    
  return (
      <div>
          {/* <div className='bg-blue-500 h-[10vh] flex items-center justify-between px-52'> */}
              {/* <div className='flex items-center w-[13vw] justify-around'>
                  <div>
                  <img alt='' className='h-[3vh]' src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png' /> 
            <p className='text-white flex items-center gap:5 italic'>Explore <p className='text-yellow-400 font-semibold'>plus</p><img alt='' className='h-[2vh]' src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png' /></p>    
                  </div>
                  <p className='text-white font-semibold'>&gt;</p>
                  <p className='text-white font-semibold text-xl'>Travel</p>
              </div>
              <div className='flex w-[15vw] justify-around'>
                  <button className='h-[5vh] bg-slate-100 px-10'>Login</button>
                  <p className='text-white font-semibold'>More<p></p></p>
              </div>  */}
          {/* </div> */}
          <div className='relative'>
              <h1 className='absolute top-5 left-[40%] text-3xl text-white font-semibold font-[Rufina]'>Get. Set. Travel</h1>
              <img alt='' className='h-[80vh] w-[100vw] ' src='https://images.ctfassets.net/wqdtr8q8192q/28KbLkjsWV6G0MV11VfXmE/a2d73238229bfda923152ed30aa905ec/iStock-1353245759.jpg' />
              <div className='flex justify-center flex-col h-[30vh] w-[80vw] bg-white absolute top-[30vh] left-[10vw] rounded-md'>
                  <div className='w-[15vw] flex justify-evenly m-2'>
                  <input type='radio'  name="o" /><label for="one">one way</label>
                  <input type='radio'  name="o" /><label for="two">Round trip</label>
                  </div> 
                  <div className='flex items-center justify-around'>
                      <div className='h-[8vh] border-2 flex flex-col bg-transparent outline-none relative'>
                          <input type="text" className='p-3 text-sm' />
                          <p className='absolute top-4 left-4 text-  Label'>From</p>
                          <p className='text-xs text-slate-400 mt-1'>Any worldwide city to airport</p>
                      </div>    
                      <div className='h-[8vh] border-2 flex flex-col bg-transparent outline-none relative'>
                          <input type="text" className='p-3 text-sm' />
                          <p className='absolute top-4 left-4 Label'>To</p>
                          <p className='text-xs text-slate-400 mt-1'>Any worldwide city to airport</p>
                      </div>
                      <div className='h-[8vh] w-[10vw] border-2 flex flex-col bg-transparent outline-none relative'>
                          <input type="date" className='p-3 text-sm' />
                          <p className='absolute top-4 left-4 Label'>Depart on</p>
                      </div>
                      <div className='h-[8vh] w-[10vw] border-2 flex flex-col bg-transparent outline-none relative'>
                          <input type="date" className='p-3 text-sm' />
                          <p className='absolute top-4 left-4 Label'>Return on</p>
                      </div>
                      <div className='h-[8vh] border-2 flex flex-col bg-transparent outline-none relative'>
                          <input type="text" className='p-3 text-sm' />
                          <p className='absolute top-4 left-4 Label'>Travellers || class</p>
                      </div>
                      <button className='bg-blue-500 flex px-12 py-3 text-md gap-2 items-center text-white'><img alt='' className='h-5' src={require('../assets/search.png')} />Search</button>
                  </div>
           
              </div>
          </div>
          <div className='mb-2'>
                  <img alt='' className='h-[25vh] w-[100%]' src='https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/314d78512857f86d.png?q=50' />
          </div>
          <div>
          <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/3959ad9f670aeeeb.jpg?q=50"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/b2ba44373f71b63c.jpg?q=50"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel> 
          </div>
                {/* cards */}
          <div className='flex flex-col items-center mt-3'>
              <h1 className='text-2xl py-2'>Best Offers</h1>
              <p className='text-slate-400 text-xl py-2'>Take a Break with Savings</p>
              <div className='flex flex-wrap gap-3 justify-center py-3'>
              {
                  arr.map((x) => (
                      <img alt='' src={x.image} className='bg-blue-100 h-[35vh] w-[30vw] rounded-xl' />
                  ))
              } 
              </div>
              <p className='text-2xl font-semibold py-2'>Fab Offers from Favourite Airlines</p>
              <p className='text-xl text-slate-400 py-2'>Take a Break with Savings</p>
          </div>
          {/* Top bank offers */}
          <div className='bg-stone-200 flex flex-col items-center py-3'>
              <h1 className='text-2xl py-2'>Top Bank Offers</h1>
              <p className='text-slate-400'>Deals You Simply Can't Miss</p>
              <div>
                  <Carousel>
              <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/769bd5d654b1cfc2.png?q=50"
          alt="First slide"
        />
                      </Carousel.Item> 
              <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/4d86525f28a86221.png?q=50"
          alt="First slide"
        />
                      </Carousel.Item> 
                      </Carousel>
              </div>
          </div>
                       {/* super coins */}
          <div className='bg-pink-200 h-[55vh] justify-around flex flex-col items-center'>
              <h1 className='text-2xl'>Play With Supercoins</h1>
              <h1 className='text-lg'>Take a Break With Savings</h1>
              <div className='flex'>
                  {
                      arr1.map((x) => (
                          <img alt='' src={x.image} className='h-[38vh] w-[35vw] pl-1' />
                      ))
                  }
              </div>
          </div>
          <div>
              <img alt='' className='h-[80vh] w-[100%]' src='https://rukminim2.flixcart.com/fk-p-flap/1800/1800/image/10256a9f3d5d1c9a.png?q=80' />
              <img alt='' className='h-[20vh] w-[100%]' src='https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/5073f0a0570f79a3.png?q=50' />
          </div>
          {/* Mobile cover */}
          <div className='bg-stone-300 py-10'>
              <p className='text-xs text-slate-500'>Thanks to online portals, you don’t have to depend on travel
                  agents or anyone else to make flight bookings. You can use your
                  laptop or mobile phone to go through all the available flights,
                  hotels, resorts, and more to make all your flight ticket bookings.
                  Most of these portals offer many festive flight offers that will help you
                  book international and domestic flights at great prices. This way,
                  you can stay within your budget. Once you take care of your travel
                  arrangements, you can also look through all the accommodation options
                  available. Make sure that you go through all the reviews of the various
                  properties listed online so that you can have a pleasant stay. Without
                  doing enough research, you may end up paying a lot of money for a
                  place that doesn’t suit your needs. So, while looking at the best
                  flight offers online, you can also go through numerous blogs and
                  articles about the best places to stay at your destination. This
                  will help you find romantic, adventurous, or chilled-out properties.
                  Once all your arrangements are done, you can plan your itinerary, pack
                  your bags, and countdown the days until your much-awaited getaway.
                  The information you are reading has been last updated on 01-Aug-23.</p>
          </div>
    </div>
  )
}

export default Travel