import { useEffect, useState, useRef } from "react";

function App() {
  const carousel = [
    {id: 0, title: "提升競爭力", alt: "image 1", imgURL: "https://www.cpsumsu.org/static/image/slideshow/slideshow_p1.jpg"},
    {id: 1, title: "培養人才", alt: "image 2", imgURL: "https://www.cpsumsu.org/static/image/slideshow/slideshow_p2.jpg"},
    {id: 2, title: "軟硬實力", alt: "image 3", imgURL: "https://www.cpsumsu.org/static/image/slideshow/slideshow_p3.jpg"},
    {id: 3, title: "勞逸結合", alt: "image 3", imgURL: "https://www.cpsumsu.org/static/image/slideshow/slideshow_p1.jpg"},
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progressBar, setProgressBar] = useState(0);

  const progressBarInterval = useRef(false);

  useEffect(() => {
    activateProgressBar(4);
    console.log(currentIndex);

    return () => clearInterval(progressBarInterval.current);
  }, [currentIndex]);

  const activateProgressBar = (duration) => {
    clearInterval(progressBarInterval.current);

    setProgressBar(0);
    const PER_MS = 10;
    let count = 0;
    progressBarInterval.current = setInterval(() => {
      count += (1 / (duration * 1000 / PER_MS)) * 100;
      setProgressBar(count);
      // console.log(count);
      if (count >= 100) {
        setTimeout(() => {
          setProgressBar(0);
          nextIndex();
        }, 1000);
        clearInterval(progressBarInterval.current);
      }
    }, PER_MS);
  };

  const nextIndex = () => {
    setCurrentIndex(prev => {
      return prev === carousel.length - 1 ? 0 : prev + 1;
    });
  }

  const clickHandler = (index) => {
    setCurrentIndex(index)
    setProgressBar(0);
  }

  return (
    <div className="App">
      <div className="w-screen h-screen bg-slate-200 flex flex-col justify-center space-y-2 items-center px-12">
        {/* Carousel Wrapper */}
        <div className="relative h-3/4 w-full mx-auto overflow-hidden">
          {/* Image Linear Mask */}
          <div className="absolute inset-0 z-10 bg-black opacity-60"></div>
          {/* Images Section*/}
          <div className="w-full h-full transition duration-1000" style={{transform: `translateX(${-100 * currentIndex}%)`}}>
            <ul className="flex w-full h-full">
              {carousel.map(item => {
                return (
                  <li className="w-full h-full shrink-0">
                    <img key={item.id} className="object-cover h-full w-full" src={item.imgURL} alt={item.alt} />
                  </li>
                )
              })}
            </ul>
          </div>
          
          {/* Progress Bar */}
          <div className="absolute w-full z-20 px-20 bottom-12 left-1/2 -translate-x-1/2">
          <ul className="flex w-full space-x-12">
            {carousel.map(item => {
                return (
                  <li onClick={() => clickHandler(item.id)}  key={item.id} className={`w-full cursor-pointer group`}>
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
        </div>
        
      </div>
    </div>
  )
}

export default App
