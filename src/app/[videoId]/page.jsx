import VideoWrapper from "@/components/VideoWrapper";
import { videoUrl } from "@/utils";
import React from "react";

const page = ({ params }) => {
  const Id = params.videoId;
  const filterVideoWithID =
    videoUrl.filter((items) => items.id === Number(Id)) || videoUrl;

  return (
    <div className="w-full min-h-screen grid place-items-center">
      <VideoWrapper videoUrl={filterVideoWithID} varient="single" />
    </div>
  );
};

export default page;
