import React, { Component } from "react";
import { GalleryDesignobuilStyle } from "./Designobuil.style";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import { imgs, imgstwo } from "./imgs";

export function GalleryDesignobuild() {
  // const { imageUrlArray, imageUrlArraytwo } = this.state;

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
            <ImageGallery
              items={imgs}
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
            />
          </div>
          <h3 className="image-sub-title">2D Views</h3>
          <div className="container-gallery">
            
              <ImageGallery
                items={imgstwo}
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
              />
          
          </div>
        </div>
      </GalleryDesignobuilStyle>
    </>
  );
}

export default GalleryDesignobuild;
