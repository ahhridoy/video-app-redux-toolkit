import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../features/videos/videosSlice";
import VideoCard from "./VideoCard";

const VideosList = () => {
  const dispatch = useDispatch();
  const { videos, error, isLoading, isError } = useSelector(
    (state) => state.videos
  );

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  let content;
  if (isLoading) content = <h1>Loading...</h1>;
  if (!isLoading && isError)
    content = <div class="col-span-12">some error happened</div>;
  if (!isLoading && !isError && videos?.length === 0)
    content = <h1>Video is not found</h1>;
  if (!isLoading && !isError && !error && videos?.length > 0)
    content = videos.map((video) => <VideoCard key={video.id} video={video} />);

  return (
    <section class="pt-12">
      <section class="pt-12">
        <div class="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {/* <!-- single video --> */}
          {content}
          {/* <!-- error section */}
        </div>
      </section>
    </section>
  );
};

export default VideosList;
