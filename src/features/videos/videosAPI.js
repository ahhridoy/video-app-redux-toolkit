import instance from "../../utils/axios";

const getVideos = async () => {
  const response = await instance.get("/videos");
  return response.data;
};

export default getVideos;
