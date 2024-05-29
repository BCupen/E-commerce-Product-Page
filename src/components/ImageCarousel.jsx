import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Close } from "./Icons";

const ImageCarousel = ({
  mainProductImages,
  thumbnailImages,
  isLightBox = false,
  onClose,
  onImageClick,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const goToImage = (index) => {
    setSelectedIndex(index);
  };

  const nextImage = () => {
    let nextIndex = selectedIndex + 1;
    setSelectedIndex(nextIndex % 4);
  };

  const prevImage = () => {
    let prevIndex =
      selectedIndex === 0 ? mainProductImages.length - 1 : selectedIndex - 1;
    setSelectedIndex(prevIndex);
  };

  const handleImageClick = () => {
    const query = window.matchMedia("(min-width: 768px)");
    if( !query.matches ) return;

    onImageClick();
  }

  return (
    <div className="flex flex-col item-center gap-6">
      {isLightBox && (
        <button onClick={() => onClose()} className="self-end fill-neutral-blue-100 hover:fill-primary-orange-200">
          <Close />
        </button>
      )}

      <div className="w-full flex justify-center">
        
        <div
          role="button"
          className={`relative md:rounded-2xl max-w-2xl`}
          onClick={() => handleImageClick()}
        >
          <button
            onClick={() => prevImage()}
            className={`${
              isLightBox ? "left-[-3%] z-50" : "md:hidden left-0 mx-4"
            } w-10 h-10 bg-white flex justify-center items-center hover:text-primary-orange-200 top-[50%] rounded-full absolute`}
          >
            <FontAwesomeIcon icon={faChevronLeft} color="current" />
          </button>
          <button
            onClick={() => nextImage()}
            className={`${isLightBox ? "right-[-3%] z-50" : "md:hidden right-0 mx-4"} w-10 h-10 bg-white flex justify-center items-center hover:text-primary-orange-200 top-[50%] rounded-full absolute`}
          >
            <FontAwesomeIcon icon={faChevronRight} color="current" />
          </button>
          <img src={mainProductImages[selectedIndex]} className="md:rounded-2xl" />
        </div>
      </div>

      <ul
        className={`${
          isLightBox && "px-10 py-6"
        } hidden md:flex justify-between px-8 lg:px-0`}
      >
        {thumbnailImages.map((image, index) => (
          <li key={index}>
            <button
              onClick={() => goToImage(index)}
              className={`flex ${
                selectedIndex === index && "border-primary-orange-200"
              } border-2 rounded-xl overflow-clip ${ isLightBox ? 'w-[8rem]' : 'w-[7rem]'} transition-all duration-150 ease-linear`}
            >
              <span className="w-full h-full bg-white">
                <img
                  src={image}
                  alt="shoes"
                  className={`${
                    selectedIndex === index && "opacity-25 hover:opacity-25"
                  } hover:opacity-40`}
                />
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageCarousel;
