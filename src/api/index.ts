import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_ADDRESS,
  withCredentials: false,
  headers: { "Access-Control-Allow-Origin": "*" },
});

API.interceptors.request.use((req) => {
  const user = localStorage.getItem("user") || "null";

  req.headers!["Authorization"] = `Bearer ${JSON.parse(user)?.token || ""}`;
  return req;
});

// Example Change ->
export const useGetPost = () => {
  return useQuery(["getPost"], async () => {
    const response = await API.get<any>("/posts");
    return response.data;
  });
};
export const useGetComment = () => {
  return useQuery(["getPost"], async () => {
    const response = await API.get<any>("/comments");
    return response.data;
  });
};

// ++++ add this code in your index.ts file
// export const useCreatePost = () => {
//   return useMutation((data: any) => API.post("/posts", data));
// };
