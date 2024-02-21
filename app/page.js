"use client";

import { useEffect, useState } from "react";

export default function Main() {
  const [base, setBase] = useState([
    { src: "/photo1.jpg" },
    { src: "/photo2.jpg" },
    { src: "/photo3.jpg" },
    { src: "/photo4.jpg" },
    { src: "/photo5.jpg" },
    { src: "/photo6.jpg" },
  ]);
  useEffect(() => {
    if (window) {
      var img = document.querySelector("img");

      function loaded() {
        console.log("loaded");
      }
      img.onload((e) => {
        console.log(e);
      });
      if (img.complete) {
        loaded();
      } else {
        img.addEventListener("load", loaded);
        console.log("loading");
      }
    }
  }, []);

  return (
    <div className="image flex flex-col items-center">
      {base.map((e, index) => {
        return <img id="img" key={index} src={e.src} loading="lazy"></img>;
      })}
    </div>
  );
}
