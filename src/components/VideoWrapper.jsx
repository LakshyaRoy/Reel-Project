"use client";
import React, { useEffect, useRef, useState } from "react";
import VideoCard from "./VideoCard";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa6";
import InstagramImg from "../assets/Company.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

const VideoWrapper = ({ videoUrl, varient }) => {
  const videoContainerRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [activeVideoId, setActiveVideoId] = useState(null);

  return (
    <div
      // className="rounded-lg w-[95%] bg-white/5 h-[80vh] relative overflow-y-scroll snap-y snap-mandatory hide-scrollbar mx-auto  "
      className="  h-full w-[95%] md:w-[80%] shrink-0 overflow-hidden bg-gray-100/10 md:relative md:aspect-[9/16] md:h-auto  max-h-[80vh] md:rounded-md overflow-y-scroll snap-y snap-mandatory hide-scrollbar my-2"
      ref={videoContainerRef}
    >
      {videoUrl.map((url) => (
        <div
          className="w-full snap-start h-full flex justify-center items-center gap-5"
          key={url.id}
        >
          <VideoCard
            videoLink={url}
            videoId={url.id}
            videoContainerRef={videoContainerRef}
            isMuted={isMuted}
            setIsMuted={setIsMuted}
            setActiveVideoId={setActiveVideoId}
            activeVideoId={activeVideoId}
          />

          <div className=" hidden md:flex  w-full  h-full justify-center items-center flex-col  ">
            <div className="w-[80%] flex flex-col justify-center items-start">
              {varient === "single" && (
                <Link href="/" className=" mx-4 hover:text-white/70">
                  Back
                </Link>
              )}
              <header className="flex flex-col items-start justify-start my-4 px-5">
                <Image
                  src={url?.brandLogo}
                  width={150}
                  height={150}
                  alt="Instagram"
                  className="w-20 md:w-[14vw] h-auto bg-white"
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
              <div className="flex justify-center items-start flex-col gap-y-3">
                <div className="flex justify-center items-center mx-5 gap-x-5">
                  <h2 className="text-base underline underline-offset-4">
                    Product Url -{" "}
                  </h2>
                  <Link
                    href={url?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/50 hover:bg-white/70  cursor-pointer z-50 "
                    title={url?.title}
                  >
                    <FaExternalLinkAlt className="w-4 h-4 text-black/50" />
                  </Link>
                </div>
                <h1 className="w-full px-5 text-3xl">{url?.title}</h1>
                <p className="w-full px-5 text-base text-white/80 line-clamp-2 lg:line-clamp-none">
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
