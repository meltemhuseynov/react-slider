import "./App.css";
import { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";


function App({ images }: { images: string[] }) {
  const imagesLength = images.length - 1;
  let [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  let timeout: any;

  const clearSetTimeout = () => {
    clearTimeout(timeout);
  };

  const handleNext = () => {
    clearSetTimeout();
    setCurrentImageIndex(
      imagesLength === currentImageIndex ? 0 : ++currentImageIndex
    );
  };

  const handlePrev = () => {
    clearSetTimeout();
    setCurrentImageIndex(
      currentImageIndex === 0 ? imagesLength : --currentImageIndex
    );
  };

  useEffect(() => {
    timeout = setTimeout(() => {
      handleNext();
    }, 4000);
  });

  return (
    <div className="App">
      <div className="sliderMain">
        <div
          style={{
            display: "flex",
            transform: `translateX(-${currentImageIndex * 700}px)`,
          }}
        >
          {images.map((image, index) => (
            <img src={image} key={index} />
          ))}
        </div>
        <button className="icon next" onClick={handleNext}>
          <AiOutlineArrowRight />
        </button>
        <button className="icon prev" onClick={handlePrev}>
          <AiOutlineArrowLeft />
        </button>
      </div>
    </div>
  );
}

export default App;
