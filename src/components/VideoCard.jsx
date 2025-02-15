"use client";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { FaRegCirclePlay, FaShare, FaVolumeXmark } from "react-icons/fa6";
import { IoHeart, IoVolumeHighSharp } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
const VideoCard = ({
  videoLink,
  videoId,
  videoContainerRef,
  isMuted,
  setIsMuted,
  activeVideoId,
  setActiveVideoId,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    if (!videoContainerRef.current || !cardRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // console.log(entry);
          if (entry.isIntersecting === true) {
            if (entry.intersectionRatio > 0) {
              videoRef.current.play().catch((error) => {
                // console.log("Video play failed:", error);
              });
              setIsPlaying(true);
              setActiveVideoId(videoId);
            }
          } else {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        });
      },
      {
        root: videoContainerRef.current,
        threshold: [0.25, 0.75],
        rootMargin: "-100px",
      }
    );

    observer.observe(cardRef.current);

    return () => {
      observer.disconnect();
    };
  }, [userPaused, videoContainerRef]);

  const handleVideoPress = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setUserPaused(true);
    } else {
      videoRef.current
        .play()
        .then(() => {
          setUserPaused(false);
        })
        .catch((error) => {
          console.log("Video play failed:", error);
        });
    }
    setIsPlaying(!isPlaying);
  };

  const handleShare = async () => {
    try {
      // Convert relative path to absolute URL if needed
      const absoluteUrl = new URL(`/${activeVideoId}`, window.location.origin)
        .href;

      if (navigator.share) {
        // Web Share API for mobile devices
        await navigator.share({
          title: "Check out this video!",
          url: absoluteUrl,
        });
      } else {
        await navigator.clipboard.writeText(absoluteUrl);
        alert("Link copied to clipboard!");
      }
    } catch (error) {
      console.error("Sharing failed:", error);
      alert("Sharing failed. Please try again.");
    }
  };

  useEffect(() => {
    const savedLikes = localStorage.getItem(videoLink?.videoUrl);
    if (savedLikes) {
      const { count, liked } = JSON.parse(savedLikes);
      setIsLiked(liked);
      setLikeCount(count);
    }
  }, [videoLink?.videoUrl]);

  // Like handler
  const handleLike = () => {
    const newLikedState = !isLiked;
    const newCount = newLikedState ? likeCount + 1 : likeCount - 1;

    setIsLiked(newLikedState);
    setLikeCount(newCount);

    // Save to localStorage
    localStorage.setItem(
      videoLink?.videoUrl,
      JSON.stringify({
        count: newCount,
        liked: newLikedState,
      })
    );
  };

  return (
    <div
      ref={cardRef}
      className="relative w-full md:max-w-[504px] h-full  snap-start"
      data-video-id={videoLink?.id}
    >
      <FaRegCirclePlay
        onClick={handleVideoPress}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl text-white/50 cursor-pointer z-10 transition-opacity ${
          isPlaying ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Add Share Button */}
      <div className="absolute top-1/2 right-2 sm:right-5 flex flex-col items-center gap-1 z-10">
        <button className="p-2 rounded-full bg-white/50 hover:bg-white/70 transition-all text-black/50 hover:text-black/70">
          <FaShare
            onClick={handleShare}
            className={` cursor-pointer transition-all w-6 h-6 `}
          />
        </button>
      </div>

      <div className="absolute top-[60%] right-2 sm:right-5 flex flex-col items-center gap-1 z-10">
        <button
          onClick={handleLike}
          className="p-2 rounded-full bg-white/50 hover:bg-white/70 transition-all"
        >
          <IoHeart
            className={` cursor-pointer transition-all w-6 h-6 ${
              isLiked ? "text-red-500/80 " : "text-black/30"
            }`}
          />
        </button>
        <span className="text-white text-sm font-medium drop-shadow">
          {likeCount > 0 ? likeCount : ""}
        </span>
      </div>

      {isMuted ? (
        <FaVolumeXmark
          onClick={() => setIsMuted(false)}
          className="absolute top-5 left-5 text-3xl text-white/50 cursor-pointer z-10 transition-opacity hover:text-white/80"
        />
      ) : (
        <IoVolumeHighSharp
          onClick={() => setIsMuted(true)}
          className="absolute top-5 left-5 text-3xl text-white/50 cursor-pointer z-10 transition-opacity hover:text-white/80"
        />
      )}

      <video
        ref={videoRef}
        onClick={handleVideoPress}
        className="w-full h-full object-contain"
        src={videoLink?.videoUrl}
        playsInline
        loop
        preload="auto"
        muted={isMuted}
      />

      <div className=" absolute bottom-0 w-full block  md:hidden bg-black/50 text-white text-sm p-4 backdrop-blur-sm">
        <div className="w-full flex justify-center items-start flex-col gap-3 relative ">
          {" "}
          <Link
            href={videoLink?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/50 hover:bg-white/70  absolute top-1 right-1 cursor-pointer"
          >
            <FaExternalLinkAlt className="w-4 h-4" />
          </Link>
          {/* 4.5rem = right buttons width */}
          <Image
            src={videoLink?.brandLogo}
            alt="Brand Logo"
            width={100}
            height={100}
            className="w-16 h-16 rounded-full bg-white object-contain"
          />
          <h1 className="font-bold line-clamp-1">{videoLink?.title}</h1>
          <p className="mt-1 text-xs text-gray-200 line-clamp-2">
            {videoLink?.subtitle}
          </p>
        </div>
      </div>

      {/* Control buttons */}
      <div className="absolute top-0 left-0 right-0 h-[15%] bg-gradient-to-b from-black/30 to-transparent" />
      {/* <div className="absolute bottom-0 left-0 right-0 h-[25%] bg-gradient-to-t from-black/30 to-transparent" /> */}
    </div>
  );
};

export default VideoCard;
