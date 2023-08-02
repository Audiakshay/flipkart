import clsx from 'clsx'
import React, { useState } from 'react'

function Dropdown({ expand, cities, inputName, name, refVal, refName, style, setExpand, setExpandTravel, expandTravel }) {
    
    console.log(refName)

    const handleChange = (e) => {
        refVal({ ...refName, [inputName]: e });
            setExpand(false)
            setExpandTravel(false)
      };


  return (
      <div>
        <ul className={style}
         >
                  {
                      name.map((x) => (
                          <li key={x} onClick={() => handleChange(x)}>{x.toUpperCase()}</li>
                      ))
                }
          </ul>
            
    </div>
  )
}

export default Dropdown