import React, {useState} from 'react';
import './CircleImage2.css';

export const CircleImage2 = ({ imageUrl} : { imageUrl : string }) => {
    const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`circle ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imageUrl} alt="Profile Pic"/>
    </div>
  );
}

export default CircleImage2;