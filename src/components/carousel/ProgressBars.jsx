import React from 'react'
import ProgressBar from './ProgressBar'

export default function ProgressBars({carousel, currentIndex, progressBar, clickHandler}) {
  return (<>
    {/* Progress Bar */}
    <div className="absolute w-full z-20 px-8 md:px-20 bottom-12 left-1/2 -translate-x-1/2">
      <ul className="flex flex-col md:flex-row w-full space-y-6 md:space-y-0 md:space-x-12">
        {carousel.map(item => {
          return (
            <ProgressBar key={item.id} item={item} currentIndex={currentIndex} progressBar={progressBar} clickHandler={clickHandler} />
          )
        })}
      </ul>
    </div>
  </>)
}
