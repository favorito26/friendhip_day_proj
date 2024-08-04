"use client"
import { useState } from "react";

export default function Home() {
  const [fly, setFly] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const handleFlyAway = () => {
    setFly(true);
    setTimeout(() =>{
      setShowImage(true);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center mt-10 gap-y-10">
      <div className={`flex flex-row gap-20 lg:gap-96 ${fly ? "fly-away" : ""}`}>
        <img src="balloons-fly.gif" alt="" className="w-auto" />
        <img src="green-balloon.gif" alt="" className="w-auto" />
      </div>
      {!showImage ? (
        <button
          onClick={handleFlyAway}
          className={`text-white shadow-md bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 ${fly ? "fade-out" : ""}`}
        >
          Click me please
        </button>
      ) : (
        <img src="friendship-day.gif" alt="Friendship Day" className="w-60" />
      )}
      <div className={`flex flex-row gap-20 lg:gap-96 ${fly ? "fly-away" : ""}`}>
        <img src="balloons-fly.gif" alt="" className="w-auto" />
        <img src="green-balloon.gif" alt="" className="w-auto" />
      </div>
    </div>
  );
}
