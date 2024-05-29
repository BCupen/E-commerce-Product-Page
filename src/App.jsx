import Header from "./components/Header";
import ImageCarousel from "./components/ImageCarousel";
import image1 from "./assets/image-product-1.jpg";
import image2 from "./assets/image-product-2.jpg";
import image3 from "./assets/image-product-3.jpg";
import image4 from "./assets/image-product-4.jpg";

import thumb1 from "./assets/image-product-1-thumbnail.jpg";
import thumb2 from "./assets/image-product-2-thumbnail.jpg";
import thumb3 from "./assets/image-product-3-thumbnail.jpg";
import thumb4 from "./assets/image-product-4-thumbnail.jpg";
import { useState } from "react";
import LightBox from "./components/LightBox";
import Description from "./components/Description";
import { CartProvider } from "./components/CartContext";
const thumbnailImages = [thumb1, thumb2, thumb3, thumb4];

const mainProductImages = [image1, image2, image3, image4];

function App() {
  const [showLightBox, setShowLightBox] = useState(false);

  const handleOnClose = () => {
    setShowLightBox(false);
  };

  const handleImageClick = () => {
    setShowLightBox(true);
  };

  return (
    <CartProvider>
      <div className="max-w-[1440px] relative min-h-screen flex flex-col items-center mx-auto font-body">
        <Header />
        <div className="w-full flex flex-col lg:flex-row items-center justify-between md:gap-16 md:py-24 md:px-8">
          <ImageCarousel
            onImageClick={handleImageClick}
            mainProductImages={mainProductImages}
            thumbnailImages={thumbnailImages}
          />
          <Description />
        </div>

        {showLightBox && (
          <LightBox
            onClose={handleOnClose}
            mainProductImages={mainProductImages}
            thumbnailImages={thumbnailImages}
          />
        )}
      </div>
    </CartProvider>
  );
}

export default App;
