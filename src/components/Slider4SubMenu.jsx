import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Slider4SubMenu = ({ images, settings }) => {
    return (
        <div className="w-full mb-8">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="flex justify-center items-center">
                        <img
                            src={image.src}
                            alt={image.title}
                            className="w-full h-auto sm:h-auto md:h-auto lg:h-auto object-contain max-w-full max-h-[500px] rounded-lg mb-4"
                        />
                        <h3 className="text-3xl font-semibold text-center text-[#ffa500]">{image.title}</h3>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Slider4SubMenu;
