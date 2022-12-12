import React from 'react'

export default function ProgressBar({item, currentIndex, progressBar, clickHandler}) {
  return (
    <li key={item.id} onClick={() => clickHandler(item.id)} className={`w-full cursor-pointer group`}>
      <h3 className={`text-xl font-bold group-hover:text-white ${currentIndex === item.id ? 'text-white' : 'text-gray-400'}`}>{item.title}</h3>
      <div className={`w-full h-1 md:h-2 bg-neutral-500 transition duration-200 overflow-hidden`}>
        {
          currentIndex === item.id &&
          <div className="h-full bg-sky-900" style={{ width: `${progressBar}%` }}></div>
        }
      </div>
    </li>
  )
}
