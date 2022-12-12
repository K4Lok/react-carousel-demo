import React from 'react'
import ProgressBar from './ProgressBar'

export default function ProgressBars({carousel, currentIndex, progressBar, clickHandler}) {
  return (<>
    {/* Progress Bar */}
    <div className="absolute w-full z-20 px-20 bottom-12 left-1/2 -translate-x-1/2">
      <ul className="flex w-full space-x-12">
        {carousel.map(item => {
          return (
            <ProgressBar key={item.id} item={item} currentIndex={currentIndex} progressBar={progressBar} clickHandler={clickHandler} />
          )
        })}
      </ul>
    </div>
  </>)
}
