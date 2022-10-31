import React, {useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import './Swipes.css';
import './heroes.css';
import 'swiper/swiper-bundle.min.css';
// import "swiper/modules/pagination/pagination.min.css";

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

function Swipes() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const slides = [];
  for (let i = 0; i < 3; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img
          src={`Dine/${i + 1}.jpeg`}
          style={{ listStyle: 'none' }}
          alt={`Slide ${i}`}
        />
      </SwiperSlide>
    );
  }

  const slides2 = [];
  for (let i = 0; i < 3; i += 1) {
    slides2.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img
          src={`Room/${i + 1}.jpeg`}
          style={{ listStyle: 'none' }}
          alt={`Slide ${i}`}
        />
      </SwiperSlide>
    );
  }

  const slides3 = [];
  for (let i = 0; i < 3; i += 1) {
    slides3.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img
          src={`Bar/${i + 1}.jpeg`}
          style={{ listStyle: 'none' }}
          alt={`Slide ${i}`}
        />
      </SwiperSlide>
    );
  }

  // const thumbs = [];
  // for (let i = 0; i < 3; i += 1) {
  //   thumbs.push(
  //     <SwiperSlide key={`thumb-${i}`} tag="li" style={{ listStyle: 'none' }}>
  //       <img
  //         src={`Dine/${i + 1}.jpeg`}
  //         alt={`Thumbnail ${i}`}
  //       ></img>
  //     </SwiperSlide>
  //   );
  // }

  // const slides2 = [];
  // for (let i = 9; i < 14; i += 1) {
  //   slides2.push(
  //     <SwiperSlide key={`slide-${i}`} tag="li">
  //       <img
  //         src={`Dine/${i + 1}.jpeg`}
  //         style={{ listStyle: 'none' }}
  //         alt={`Slide ${i}`}
  //       />
  //     </SwiperSlide>
  //   );
  // }

  return (
    <>
    <div class="px-4 py-5 my-5 text-center">
    <h1 class="display-5 fw-bold">Centered hero</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      {/* <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
     
      
    
      </div> */}
      <Swiper     pagination={{
      type: "progressbar",
    }}
    navigation={true}
    modules={[Pagination, Navigation]}
  
      id="main"
      //  thumbs={{ swiper: thumbsSwiper }}
      //  controller={{ control: controlledSwiper }}
        tag="section"
       wrapperTag="ul"
       spaceBetween={0}
       slidesPerView={1}
     >
      {slides}
    </Swiper>
  
  
    </div>
  </div>

  <div class="b-example-divider"></div>

<div class="container col-xxl-8 px-4 py-5">
<div class="row flex-lg-row-reverse align-items-center g-5 py-5">
  <div class="col-10 col-sm-8 col-lg-6">
    {/* <img src="bootstrap-themes.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/> */}
  </div>
  <div class="col-lg-6">
    <h1 class="display-5 fw-bold lh-1 mb-3">Responsive left-aligned hero with image</h1>
    <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
    <Swiper
    pagination={{
      type: "progressbar",
    }}
    navigation={true}
    modules={[Pagination, Navigation]}
  
      id="main"
      //  thumbs={{ swiper: thumbsSwiper }}
      //  controller={{ control: controlledSwiper }}
        tag="section"
       wrapperTag="ul"
       spaceBetween={5}
       slidesPerView={1}
     >
      {slides2}
    </Swiper>
   
    </div>
  </div>
</div>
</div>
   
   
    </>
 

  //     {/* { <Swiper
  //       id="thumbs"
  //       spaceBetween={5}
  //       slidesPerView={3}
  //       onSwiper={setThumbsSwiper}
  //     >
  //       {thumbs}
  //     </Swiper>

  //      <Swiper id="controller" onSwiper={setControlledSwiper}>
  //       {slides2}
  //     </Swiper> 
  //  } */}
      
     
      
      );
}

export default Swipes;