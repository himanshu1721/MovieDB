const API_KEY = "75f81ae108c32ef6e09c4adf44096089";
const AppConstants = {
  API_IMAGE: "https://image.tmdb.org/t/p/w500",
  BASE_URL: "https://api.themoviedb.org/3/",
  POPULAR_MOVIES_ENDPOINT: `movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  TRENDING_MOVIES_ENDPOINT: `trending/movie/day?api_key=${API_KEY}`,
};

export default AppConstants;
