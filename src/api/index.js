import api from "./instance";

export const getPosts = async () => {
  try {
    const response = await api.get("/posts");
    return response.data.slice(0, 10);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};
