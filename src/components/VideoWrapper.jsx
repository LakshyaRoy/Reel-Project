"use client";
import React, { useRef, useState } from "react";
import VideoCard from "./VideoCard";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa6";
import InstagramImg from "../assets/Company.png";

const VideoWrapper = () => {
  const videoUrl = [
    {
      videoUrl: "./video1.mp4",
      title: "Laugh Out Loud",
      subtitle: "A hilarious journey of unexpected moments!",
    },
    {
      videoUrl: "./video2.mp4",
      title: "Comedy Riot",
      subtitle: "Non-stop fun and laughter guaranteed!",
    },
    {
      videoUrl: "./video3.mp4",
      title: "The Funny Side",
      subtitle: "A collection of the most hilarious scenes!",
    },
    {
      videoUrl: "./video1.mp4",
      title: "Laugh Out Loud",
      subtitle: "A hilarious journey of unexpected moments!",
    },
    {
      videoUrl: "./video2.mp4",
      title: "Comedy Riot",
      subtitle: "Non-stop fun and laughter guaranteed!",
    },
    {
      videoUrl: "./video3.mp4",
      title: "The Funny Side",
      subtitle: "A collection of the most hilarious scenes!",
    },
  ];
  const videoContainerRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div
      // className="rounded-lg w-[95%] bg-white/5 h-[80vh] relative overflow-y-scroll snap-y snap-mandatory hide-scrollbar mx-auto  "
      className="  h-full w-[95%] md:w-[80%] shrink-0 overflow-hidden bg-gray-100/10 md:relative md:aspect-[9/16] md:h-auto  max-h-[80vh] md:rounded-md overflow-y-scroll snap-y snap-mandatory hide-scrollbar my-2"
      ref={videoContainerRef}
    >
      {videoUrl.map((url, index) => (
        <div className="w-full snap-start h-full flex justify-center items-center gap-5">
          <VideoCard
            key={index}
            videoLink={url}
            videoId={index}
            videoContainerRef={videoContainerRef}
            isMuted={isMuted}
            setIsMuted={setIsMuted}
          />

          <div className=" hidden md:flex  w-full  h-full justify-center items-center flex-col  ">
            <div className="w-[80%] flex flex-col justify-center items-start">
              {" "}
              <header className="flex flex-col items-start justify-start my-4 px-5">
                <Image
                  src={InstagramImg}
                  width={150}
                  height={150}
                  alt="Instagram"
                  className="w-20 md:w-[14vw] h-auto"
                />
                <p className="text-sm flex justify-center items-center gap-3 mt-4">
                  <span>
                    {" "}
                    <span className="underline underline-offset-4 hover:cursor-pointer">
                      Scroll down
                    </span>{" "}
                    to next reel{" "}
                  </span>
                  <span>
                    <FaChevronDown className="animate-bounce" />
                  </span>{" "}
                </p>
              </header>
              <div className="flex justify-center items-center flex-col gap-y-3">
                <h1 className="w-full px-5 text-3xl">{url?.title}</h1>
                <p className="w-full px-5 text-lg text-white/80">
                  {url?.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoWrapper;
