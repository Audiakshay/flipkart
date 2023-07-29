import React from 'react'
import clsx from 'clsx';

function FooterLists({title, list}) {
  return (
    <div className={clsx('mx-2', {
        'border-l border-indigo-300 pl-8': title === 'Mail Us:'
    })}>
        <p className='text-gray-500 font-semibold text-sm my-3'>{title}</p>
        <ul>{list.map((x) => <li key={x} className={clsx('text-white font-bold text-sm',{ 'text-xs': title === 'Mail Us:' || title === 'Registered Office Address:'})}>
            {x}{x.startsWith('Telephone') && <span className='text-indigo-600 text-sm'>044-45614700</span>}</li>)}</ul>
    </div>
  )
}

export default FooterLists