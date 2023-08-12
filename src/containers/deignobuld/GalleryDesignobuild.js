import React, { Component, useEffect, useState } from "react";
import { GalleryDesignobuilStyle } from "./Designobuil.style";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import { imgs, imgstwo } from "./imgs";
import { useFetchDesignGalleryQuery, useFetchInteriorGalleryQuery } from "../../store/store";

export function GalleryDesignobuild() {
  // const { imageUrlArray, imageUrlArraytwo } = this.state;
  const {
    data: data,
    isLoading: loading,
   
  } = useFetchDesignGalleryQuery();
  const [for_2d, setFor_2d] = useState();
  const [for_3d, setFor_3d] = useState();
  useEffect(() => {
console.log("2d",for_2d)
  }, [for_2d]);
  useEffect(() => {
    if(data){
      const D2=data.filter((item)=>item.tag==="2D")
      const D3=data.filter((item)=>item.tag==="3D")

      const outputArray = D2.map(item => ({
        original: item.image,
        thumbnail: item.image
    }));
    setFor_2d(outputArray)
    const outputArray1 = D3.map(item => ({
      original: item.image,
      thumbnail: item.image
  }));
setFor_3d(outputArray1)
    }
  }, [data]);
  return (
    <>
      <GalleryDesignobuilStyle>
        <div className="galler-design-contaier">
          <div className="title-card">
            <h3 className="image-title">Portfolio</h3>
            <span className="image-title-border"></span>
          </div>
          <h3 className="image-sub-title">3D Views</h3>
          <div className="container-gallery">
            {for_3d?

            <ImageGallery
              items={for_3d}
              showPlayButton={true}
              showFullscreenButton={true}
              slideInterval={1000}
              slideOnThumbnailOver={true}
              additionalClass={"imag-width-mobile"}
              thumbnailWidth={"60px"}
              thumbnailClass={"imag-width-mobile-thumbnail"}
              showIndex={true}
              onPlay={() => {
                alert("slideshow is now playing!");
              }}
            />:null}
          </div>
          <h3 className="image-sub-title">2D Views</h3>
          <div className="container-gallery">
            {for_2d?

              <ImageGallery
              items={for_2d}
                showPlayButton={true}
                showFullscreenButton={true}
                slideInterval={1000}
                slideOnThumbnailOver={true}
                additionalClass={"imag-width-mobile-second"}
                thumbnailWidth={"60px"}
                thumbnailClass={"imag-width-mobile-thumbnail"}
                showIndex={true}
                onPlay={() => {
                  alert("slideshow is now playing!");
                }}
                />:null
          
              }
          </div>
        </div>
      </GalleryDesignobuilStyle>
    </>
  );
}

export default GalleryDesignobuild;
