import React, {useState} from 'react';
import './CircleImage.css';
import App from '../App';

export const CircleImage = ({ imageUrl} : { imageUrl : string }) => {
    const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`circle ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imageUrl} alt="Your Image" />
    </div>
  );
}

export default CircleImage;