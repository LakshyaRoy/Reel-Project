"use client";
import React, { useRef, useState } from "react";
import VideoCard from "./VideoCard";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa6";
import InstagramImg from "../assets/Company.png";
import JblImage from "../assets/JBL.png";
import SonyImage from "../assets/sony-logo.png";
import MarshallImage from "../assets/marshall.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

const VideoWrapper = () => {
  const videoUrl = [
    {
      videoUrl: "./video1.mp4",
      title: "XB100 Portable Wireless Speaker SRS-XB100",
      subtitle:
        "Get ready for powerful and clear sound from a compact body. The XB100 speaker is everything you need for life on the move. It's durable, has plenty of battery and is perfect for listening at home or when out with friends. It's the perfect all-rounder for however you like to listen.",
      link: "https://www.sony.co.in/wireless-speakers/products/srs-xb100",
      brandLogo: SonyImage,
    },
    {
      videoUrl: "./video2.mp4",
      title: "JBL Go 3 Portable Waterproof Speaker",
      subtitle:
        "JBL Go 3 features bold styling and rich JBL Pro Sound. With its new eye-catching edgy design, colorful fabrics and expressive details this a must-have accessory for your next outing.",
      link: "https://mm.jbl.com/bluetooth-portables/GO+3-.html",
      brandLogo: JblImage,
    },
    {
      videoUrl: "./video3.mp4",
      title: "Marshall WOBURN III",
      subtitle:
        "This generation of the home line-up has an even wider soundstage than before, delivering heavy Marshall signature sound that has been re-engineered for a more immersive experience. ",
      link: "https://www.marshall.com/in/en/product/woburn-iii?pid=1006016",
      brandLogo: MarshallImage,
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
