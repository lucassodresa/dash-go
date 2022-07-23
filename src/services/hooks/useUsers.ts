import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type getUsersResponse = {
  totalCount: number;
  users: User[];
};

export const getUsers = async (page: number): Promise<getUsersResponse> => {
  const { data, headers } = await api.get("users", { params: { page } });

  const totalCount = Number(headers["x-total-count"]);

  const users = data.users.map(({ id, name, email, createdAt }) => {
    return {
      id,
      name,
      email,
      createdAt: new Date(createdAt).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });

  return { users, totalCount };
};

export const useUsers = (page: number) => {
  return useQuery(["users", page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10, // minutes
  });
};
