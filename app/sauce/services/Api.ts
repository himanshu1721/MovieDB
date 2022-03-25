import apisauce from "apisauce";
import { AppConstants } from "../../constants";

const create = (
  baseURL = AppConstants.BASE_URL,
  endPoint = AppConstants.POPULAR_MOVIES_ENDPOINT
) => {
  const api = apisauce.create({
    baseURL,
  });

  const getPopular = () => api.get(endPoint);
  const getTrending = () => api.get(AppConstants.TRENDING_MOVIES_ENDPOINT);

  return {
    getPopular,
    getTrending,
  };
};

export default {
  create,
};
