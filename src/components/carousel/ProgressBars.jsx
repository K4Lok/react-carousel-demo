import React from 'react'

export default function ProgressBars({carousel, currentIndex, progressBar, clickHandler}) {
  return (<>
    {/* Progress Bar */}
    <div className="absolute w-full z-20 px-20 bottom-12 left-1/2 -translate-x-1/2">
      <ul className="flex w-full space-x-12">
        {carousel.map(item => {
          return (
            <li key={item.id} onClick={() => clickHandler(item.id)} className={`w-full cursor-pointer group`}>
              <h3 className={`text-xl font-bold group-hover:text-white ${currentIndex === item.id ? 'text-white' : 'text-gray-400'}`}>{item.title}</h3>
              <div className={`w-full h-2 bg-neutral-500 transition duration-200 overflow-hidden`}>
                {
                  currentIndex === item.id &&
                  <div className="h-full bg-sky-900" style={{width: `${progressBar}%`}}></div>
                }
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  </>)
}
