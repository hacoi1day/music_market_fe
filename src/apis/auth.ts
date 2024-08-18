import axiosInstance from "../utils/axios";

export type RegisterData = {
  name: string;
  email: string;
  dob: string;
  phone: string;
  password: string;
};

export const register = async (data: RegisterData) => {
  try {
    const res = await axiosInstance.post("/auth/register", data);
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export type LoginData = {
  email: string;
  password: string;
};

export const login = async (data: LoginData) => {
  try {
    const res = await axiosInstance.post("/auth/login", data);
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};
