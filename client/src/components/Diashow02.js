import "./Diashow02.css";
import { useEffect, useState } from "react";

export default function Diashow02() {
  const diashow02Src = [
    "images/Psychologische_Beratung_009.jpg",
    "images/Psychologische_Beratung_010.jpg",
    "images/Psychologische_Beratung_011.jpg",
    "images/Psychologische_Beratung_012.jpg",
  ];

  const [currentImage, setCurretImage] = useState(0);

  useEffect(() => {
    setTimeout(slide, 5000);
  });

  const slide = () => {
    currentImage === diashow02Src.length - 1
      ? setCurretImage(0)
      : setCurretImage(currentImage + 1);
  };

  return (
    <div className="diashow-wrapper">
      {diashow02Src.map((image, index) => {
        return (
          <img
            key={index}
            src={image}
            alt="Psychologische Beratung"
            className={index === currentImage ? "image image-active" : "image"}
          ></img>
        );
      })}
    </div>
  );
}
