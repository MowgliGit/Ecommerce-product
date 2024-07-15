import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
export default function Gallery() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  const images = [
    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg",
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [mainImage, setMainImage] = useState(images[0]);

  const handleImageClick = (newImage) => {
    setMainImage(newImage);
  };

  const handleMainImageClick = () => {
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  const handleNextImage = () => {
    const currentIndex = images.indexOf(mainImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setMainImage(images[nextIndex]);
  };

  const handlePreviousImage = () => {
    const currentIndex = images.indexOf(mainImage);
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    setMainImage(images[previousIndex]);
  };

  return (
    <>
      {!isDesktop && (
        <Carousel className="mobile-slider">
          {images.map((item, i) => (
            <div key={i}>
              <img src={item} alt="img" />
            </div>
          ))}
        </Carousel>
      )}
      {isDesktop && (
        <>
          <div className="galleryCard">
            <div onClick={handleMainImageClick}>
              <img src={mainImage} alt="main" className="mainImage" />
            </div>
            <div className="otherImages">
              {images.map((image) => (
                <div
                  key={image}
                  className={`image ${mainImage === image ? "active" : ""}`}
                >
                  <img
                    src={image}
                    alt="thumbnail"
                    className="image"
                    onClick={() => handleImageClick(image)}
                  />
                </div>
              ))}
            </div>
          </div>
          {lightboxOpen && (
            <div className="lightBoxOverlay">
              <div className="lightBox">
                <div className="galleryCard">
                  <button
                    className="lightboxClose"
                    onClick={handleCloseLightbox}
                  >
                    <svg
                      width="14"
                      height="15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div
                    className="mainImageContentLightBox"
                    onClick={handleMainImageClick}
                  >
                    <img
                      src={mainImage}
                      alt="main"
                      className="mainImageLightBox"
                    />
                    <div className="icons">
                      <button
                        className="icon-previous"
                        onClick={handlePreviousImage}
                      >
                        <svg
                          width="12"
                          height="18"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 1 3 9l8 8"
                            strokeWidth="3"
                            fill="none"
                            fillRule="evenodd"
                          />
                        </svg>
                      </button>
                      <button className="icon-next" onClick={handleNextImage}>
                        <svg
                          width="12"
                          height="18"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1 9 9 1 17"
                            strokeWidth="3"
                            fill="none"
                            fillRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="contentLightBox">
                      {images.map((image) => (
                        <div
                          key={image}
                          className={`image ${
                            mainImage === image ? "active" : ""
                          }`}
                        >
                          <img
                            src={image}
                            alt="thumbnail"
                            className="image"
                            onClick={() => handleImageClick(image)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
