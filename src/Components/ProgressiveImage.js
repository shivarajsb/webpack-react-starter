import React, { useState } from "react";
import Progressive from './ProgressiveImage.css';

const ProgressiveImage = ({ src, overlayImage, ...rest }) => {
  const {progressiveImage}=Progressive;
  const [hasLoaded, setLoaded] = useState(false);
  return (
    <img
      src={overlayImage && !hasLoaded ? overlayImage : src}
      onLoad={() => setLoaded(true)}
      className={progressiveImage}
      {...rest}
    />
  );
};

export default ProgressiveImage;
