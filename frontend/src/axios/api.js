import axios from "axios";

const client = axios.create({
  baseURL: `${process.env.BASE_URL}/api`,
});

export const newPost = async (data) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const response = await client.post("/create-post", data, config);
    return response?.data;
  } catch (err) {
    return err?.response?.data;
  }
};

export const getNews = async (category) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const response = await client.get(`/get-by-category/${category}`, config);
    return response?.data;
  } catch (err) {
    return err?.response?.data;
  }
};

export const updateBook = async (data) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const response = await client.patch(`/update/${data?.bookId}`,data, config);
    return response?.data;
  } catch (err) {
    return err?.response?.data;
  }
};

export const deleteBook = async (bookId) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const response = await client.delete(`/delete/${bookId}`, config);
    return response?.data;
  } catch (err) {
    return err?.response?.data;
  }
};