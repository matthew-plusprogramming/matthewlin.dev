import React from 'react';

const ImageSection = (props) => {
  return (
    <div className="image-section">
      <div className="flex-row center image-section-title">
        <h5 className="medium-text">{props.title}</h5>
      </div>
      <div className="flex-row center">
        <div className="image-section-wrapper">
          {props.images.map((image, index) => (
            <img src={image} key={index} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
