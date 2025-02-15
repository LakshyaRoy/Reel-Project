import React from "react";
import VideoWrapper from "@/components/VideoWrapper";
import { videoUrl } from "@/utils";
const Page = () => {
  return (
    <div className="w-full min-h-screen grid place-items-center">
      <VideoWrapper videoUrl={videoUrl} />
    </div>
  );
};

export default Page;
