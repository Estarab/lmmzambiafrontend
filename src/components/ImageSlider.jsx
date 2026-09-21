import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/sliderimg/agrien images/slid1.jpg'; 
 import image2 from '../assets/sliderimg/agrien images/slid2.jpg';
 import image3 from '../assets/sliderimg/agrien images/slid3.jpg';
 import image4 from '../assets/sliderimg/agrien images/slid1.jpg';
 import image5 from '../assets/sliderimg/agrien images/slid2.jpg';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      img: image1,
      title: "Empowering Farmers",
      paragraph: "We provide innovative solutions to enhance productivity.",
    },
    {
      img: image2,
      title: "Sustainable Practices",
      paragraph: "Promoting sustainable agriculture for a better future.",
    },
    {
      img: image3,
      title: "Community Engagement",
      paragraph: "Building strong partnerships within local communities.",
    },
    {
      img: image4,
      title: "Innovative Solutions",
      paragraph: "Leveraging technology to transform agriculture.",
    },
    {
      img: image5,
      title: "Education and Training",
      paragraph: "Equipping farmers with essential skills and knowledge.",
    },
  ];

  return (
    <div className="slider-container w-full h-screen overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-full">
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-green-700 text-white p-4 opacity-90">
              <h3 className="text-3xl font-bold">{slide.title}</h3>
              <p className="mt-2 text-lg">{slide.paragraph}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;



// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import image1 from '../assets/sliderimg/agrien images/slid1.jpg'; // Import your images
// import image2 from '../assets/sliderimg/agrien images/slid2.jpg';
// import image3 from '../assets/sliderimg/agrien images/slid3.jpg';
// import image4 from '../assets/sliderimg/agrien images/slid1.jpg';
// import image5 from '../assets/sliderimg/agrien images/slid2.jpg';

// const ImageSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   const slides = [
//     {
//       img: image1,
//       title: "Empowering Farmers",
//       paragraph: "We provide innovative solutions to enhance productivity.",
//     },
//     {
//       img: image2,
//       title: "Sustainable Practices",
//       paragraph: "Promoting sustainable agriculture for a better future.",
//     },
//     {
//       img: image3,
//       title: "Community Engagement",
//       paragraph: "Building strong partnerships within local communities.",
//     },
//     {
//       img: image4,
//       title: "Innovative Solutions",
//       paragraph: "Leveraging technology to transform agriculture.",
//     },
//     {
//       img: image5,
//       title: "Education and Training",
//       paragraph: "Equipping farmers with essential skills and knowledge.",
//     },
//   ];

//   return (
//     <div className="slider-container max-w-2xl mx-auto">
//       <Slider {...settings}>
//         {slides.map((slide, index) => (
//           <div key={index} className="relative">
//             <img src={slide.img} alt={slide.title} className="w-full h-auto object-cover" />
//             <div className="absolute bottom-0 left-0 right-0 bg-green-700 text-white p-4 opacity-90">
//               <h3 className="text-2xl font-bold">{slide.title}</h3>
//               <p className="mt-2">{slide.paragraph}</p>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default ImageSlider;
