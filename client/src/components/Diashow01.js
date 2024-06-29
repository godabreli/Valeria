import "./Diashow01.css";
import { useEffect, useState } from "react";

export default function Diashow01() {
  const diashow01Src = [
    "images/Psychologische_Beratung_005.jpg",
    "images/Psychologische_Beratung_006.jpg",
    "images/Psychologische_Beratung_007.jpg",
  ];

  const [currentImage, setCurretImage] = useState(0);

  useEffect(() => {
    setTimeout(slide, 5000);
  });

  const slide = () => {
    currentImage === diashow01Src.length - 1
      ? setCurretImage(0)
      : setCurretImage(currentImage + 1);
  };

  return (
    <div className="diashow">
      <div className="diashow-wrapper">
        {diashow01Src.map((image, index) => {
          return (
            <div
              className={
                index === currentImage
                  ? "imageWrapper imageWrapper-active"
                  : "imageWrapper"
              }
              key={index}
            >
              <img
                src={image}
                alt="Psychologische Beratung"
                className="diashow-image"
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}
