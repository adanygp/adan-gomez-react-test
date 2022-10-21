import React from "react";
import Slider from "react-slick";

const Image = ({ image }) => {
  return (
    <div className="file-item col-span-10 sm:col-span-5 lg:col-span-2 my-3">
      <img alt={`img - ${image.id}`} src={image.src} className="file-img h-60 w-full" />
    </div>
  );
};

const ImageGride = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const renderImage = (image, index) => {
    return <Image image={image} key={`${image.id}-image`} />;
  };
  return (
    <section className="file-list flex justify-center">
        <div className="grid grid-cols-10 gap-4">
        {images.map(renderImage)}
        </div>
    </section>
  );
};

export default ImageGride;
