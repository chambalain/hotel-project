import React , { useState, useEffect } from 'react';
// import {  withGoogleMap,
//     withScriptjs,
//     GoogleMap,
//     Marker,
//     InfoWindow} from 'react-google-maps'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import './Swipes.css';
import './heroes.css';
import 'swiper/swiper-bundle.min.css';

import {useJsApiLoader, GoogleMap} from "@react-google-maps/api"
import './maps.css';


const center = {lat: 48.8584, lng: 2.2945}
  export default function Map() {
// const  { isLoaded } = useJsApiLoader({

// googleMapsApiKey: "AIzaSyCjvSv9a0gfCyA-lZ-mubmVj9VzSS97Cyo"

// // process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY


// })


// if (!isLoaded) return <div> loading...</div>

return(
  <>
  <div className='all'> 
  <div class="container col-xxl-8 px-4 py-5" >
<div class="row flex-lg-row-reverse align-items-center g-5 py-5">
  <div class="col-10 col-sm-8 col-lg-6">
    {/* <img src="bootstrap-themes.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/> */}
  </div>
  <div class="col-lg-6">
    <h1 class="display-5 fw-bold lh-1 mb-3" >LOCATION</h1>
    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
  
   
    </div>
  </div>
</div>
</div>
</div>

<div class="b-example-divider"></div>

  <div className="mapa">
  
  {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63040.01980749948!2d7.451764147006312!3d9.06365023512823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b386b06fd3f%3A0x905d02745b119856!2sPalmac%20Hotel!5e0!3m2!1sen!2sng!4v1650935174630!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15760.510446900516!2d7.5000439!3d9.0521228!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b386b06fd3f%3A0x905d02745b119856!2sPalmac%20Hotel!5e0!3m2!1sen!2sng!4v1650977635567!5m2!1sen!2sng" width="600" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
 

   </div>
   <div class="b-example-divider"></div>


 
</>

);


}






// function lemap(){
//   // const [selectedPark, setSelectedPark] = useState(null);

//    // useEffect(() => {
//    //   const listener = e => {
//    //     if (e.key === "Escape") {
//    //       setSelectedPark(null);
//    //     }
//    //   };
//    //   window.addEventListener("keydown", listener);
 
//    //   return () => {
//    //     window.removeEventListener("keydown", listener);
//    //   };
//    // }, []);
 
//    return (
//      <GoogleMap
//        defaultZoom={10}
//        defaultCenter={{ lat: 45.4211, lng: -75.6903 }}
//        // defaultOptions={{ styles: mapStyles }}
//      >
//        {/* {parkData.features.map(park => (
//          <Marker
//            key={park.properties.PARK_ID}
//            position={{
//              lat: park.geometry.coordinates[1],
//              lng: park.geometry.coordinates[0]
//            }}
//            onClick={() => {
//              setSelectedPark(park);
//            }}
//            icon={{
//              url: `/skateboarding.svg`,
//              scaledSize: new window.google.maps.Size(25, 25)
//            }}
//          />
//        ))}
 
//        {selectedPark && (
//          <InfoWindow
//            onCloseClick={() => {
//              setSelectedPark(null);
//            }}
//            position={{
//              lat: selectedPark.geometry.coordinates[1],
//              lng: selectedPark.geometry.coordinates[0]
//            }}
//          >
//            <div>
//              <h2>{selectedPark.properties.NAME}</h2>
//              <p>{selectedPark.properties.DESCRIPTIO}</p>
//            </div>
//          </InfoWindow>
//        )} */}
//      </GoogleMap>
//    );
//  }

