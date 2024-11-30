import React, { useState } from 'react';

type ImageSwitcherProps = {
  frontImage: string; // 前面の画像URL
  backImage: string; // 背面の画像URL
};

const ImageSwitcher: React.FC<ImageSwitcherProps> = ({
  frontImage,
  backImage,
}) => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleFlip = () => {
    setRotationAngle((prevAngle) => prevAngle + 180);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const totalRotationY = rotationAngle;
  const totalRotationZ = isHovered ? -15 : 0;

  return (
    <div
      className="relative w-80 h-80 cursor-pointer"
      style={{ perspective: '1000px' }}
      onClick={handleFlip}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative w-full h-full transition-transform duration-700"
        style={{
          transformStyle: 'preserve-3d',
          transform: `
            rotateY(${totalRotationY}deg)
            rotateZ(${totalRotationZ}deg)
          `,
        }}
      >
        {/* 前面の画像 */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(0deg)',
          }}
        >
          <img
            src={frontImage}
            alt="Front"
            className="object-cover w-full h-full rounded shadow-2xl shadow-gray-800"
          />
        </div>

        {/* 背面の画像 */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <img
            src={backImage}
            alt="Back"
            className="object-cover w-full h-full rounded shadow-2xl shadow-gray-800"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSwitcher;
