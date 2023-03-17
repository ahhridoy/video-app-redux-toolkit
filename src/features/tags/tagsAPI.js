import instance from "../../utils/axios";

const getTags = async () => {
  const response = await instance.get("/tags");
  return response.data;
};

export default getTags;
