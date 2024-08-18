import { SongProperty } from "../classes/Song";
import axiosInstance from "../utils/axios";

export const paginateSongs = async (
  page = 1,
  limit = 10
): Promise<SongProperty[]> => {
  try {
    const { data } = await axiosInstance.get(
      `/song/paginate?page=${page}&limit=${limit}`
    );
    return data as SongProperty[];
  } catch (error) {
    console.log(error);
    return [];
  }
};
