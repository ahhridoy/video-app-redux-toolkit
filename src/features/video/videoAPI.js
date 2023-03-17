import instance from "../../utils/axios";

const getVideo = async (id) => {
  const response = await instance.get(`/videos/${id}`);
  return response.data;
};

export default getVideo;
