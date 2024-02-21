"use client";

import { useState } from "react";

export default function Main() {
  const [base, setBase] = useState([
    { src: "/photo1.jpg" },
    { src: "/photo2.jpg" },
    { src: "/photo3.jpg" },
    { src: "/photo4.jpg" },
    { src: "/photo5.jpg" },
    { src: "/photo6.jpg" },
  ]);

  return (
    <div className="image flex flex-col items-center">
      {base.map((e, index) => {
        return <img key={index} src={e.src} loading="lazy"></img>;
      })}
    </div>
  );
}
