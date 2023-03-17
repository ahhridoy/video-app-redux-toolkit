import React from "react";
import RelatedVideoCard from "./RelatedVideoCard";

const RelatedVideos = () => {
  return (
    <div class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {/* <!-- single related video --> */}
      <RelatedVideoCard />
    </div>
  );
};

export default RelatedVideos;
