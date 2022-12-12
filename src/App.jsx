import { useEffect, useState, useRef } from "react";
import Carousel from "./components/carousel/Carousel";

function App() {
  const carousel = [
    {id: 0, title: "提升競爭力", alt: "image 1", imgURL: "https://www.cpsumsu.org/static/image/slideshow/slideshow_p1.jpg"},
    {id: 1, title: "培養人才", alt: "image 2", imgURL: "https://www.cpsumsu.org/static/image/slideshow/slideshow_p2.jpg"},
    {id: 2, title: "軟硬實力", alt: "image 3", imgURL: "https://www.cpsumsu.org/static/image/slideshow/slideshow_p3.jpg"},
    {id: 3, title: "勞逸結合", alt: "image 3", imgURL: "https://www.cpsumsu.org/static/image/slideshow/slideshow_p1.jpg"},
  ];

  return (
    <div className="App">
      <div className="w-screen h-screen bg-slate-200 flex flex-col justify-center space-y-2 items-center px-12">
        <Carousel carousel={carousel}/>
      </div>
    </div>
  )
}

export default App
