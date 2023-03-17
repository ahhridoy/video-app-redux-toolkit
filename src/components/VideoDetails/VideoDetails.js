import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchVideo } from "../../features/video/videoSlice";
import RelatedVideos from "./RelatedVideos";
import VideoPlayer from "./VideoPlayer";

const VideoDetails = () => {
  const { video, isLoading, isError, error } = useSelector(
    (state) => state.video
  );
  const dispatch = useDispatch();
  const { videoId } = useParams();

  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [dispatch, videoId]);

  let content;
  if (isLoading) content = <h1>Loading...</h1>;
  if (!isLoading && isError)
    content = <div class="col-span-12">some error happened</div>;
  if (!isLoading && !isError && !video?.id)
    content = <h1>Video is not found</h1>;
  if (!isLoading && !isError && !error && video?.id) content = <VideoPlayer video={video} />;

  return (
    <section class="pt-6 pb-20">
      <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div class="grid grid-cols-3 gap-2 lg:gap-8">
          {content}
          {/* <!-- related videos --> */}
          <RelatedVideos />
        </div>
      </div>
    </section>
  );
};

export default VideoDetails;
