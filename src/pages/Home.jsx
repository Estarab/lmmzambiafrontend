import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
//import ImageSlider1 from '../components/ImageSlider1';
//import ImageSlider2 from '../components/ImageSlider2';
//import AboutComp from '../components/AboutComp';
import WhatWeDo from '../components/WhatWeDo';
import 'slick-carousel/slick/slick.css'; // Import Slick CSS
import 'slick-carousel/slick/slick-theme.css'; // Import Slick Theme CSS
import Achievements from '../components/Achievements';
// import OurPartners from '../components/OurPartners';
// import OurReach from '../components/OurReach';
// import VisionMissionTarget from '../components/VisionMissionTarget';
// import OurTarget from '../components/OurTarget';
// import WeStriveTo from '../components/WeStriveTo';
// import WhoWeAre from '../components/WhoWeAre';
//import ImageSlider from '../components/ImageSlider';
//import Slider from '../components/Slider';
import GroupedAboutComp from '../components/GroupedAboutComp';
import SliderContainer from '../components/SliderContainer';
import VisionMissionScroll from '../components/VisionMissionScroll';
import PartnersLogosComponent from '../components/PartnersLogosComponent';
import ZambiaMap from '../components/ZambiaMap';
import RegistrationPage from '../components/RegistrationPage';
// import HomeImageSlider from '../components/HomeImageSlider';
import WhyMauritius from '../components/WhyMauritius';
import ParticipatingUniversities from '../components/ParticipatingUniversities';
import Sponsors from '../components/Sponsors';

// import DataDisplay from '../components/DataDisplay';


export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div className='bg-slate-100' >
{/* <div className=''style={{ transform: 'translateY(-30px) translateX(0px)' }}> */}
       {/* <ImageSlider1/> */}
      {/* <ImageSlider2/> */}
      {/* <ImageSlider/> */}
      {/* <Slider/>  */}
      {/* <Slider/>  */}
      {/*<SliderContainer/>*/}
      {/* <HomeImageSlider onRegister={() => setActiveProgram("Lusaka")} /> */}
        

      <RegistrationPage/>

      {/* <WhyMauritius/>  */}
      {/* <ParticipatingUniversities/> */}
      {/* <Sponsors/> */}
      {/* <VisionMissionScroll/> */}
      
      {/* <DataDisplay/> */}
{/* </div> */}
        
        {/* <WhoWeAre/>
       <VisionMissionTarget/>   
       <OurTarget/>  
       <WeStriveTo/>  */}
      {/* <AboutComp/> */}

      {/* <GroupedAboutComp/> */}
    

      {/* <WhatWeDo/> */}
      
      {/* <Achievements/> */}
      {/* <OurPartners/> */}
      {/* <PartnersLogosComponent/> */}
      {/* <ZambiaMap/> */}
      {/* <OurReach/> */}
      
      
      

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 lg:translate-y-[-100px]'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-3xl font-bold text-center text-[#46923c]'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-2xl text-[#46923c] hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
