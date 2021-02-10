export async function fetchGenres() {
  const data = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
  ).then((response) => response.json());
  return data.genres;
}

export async function fetchMovies(query, page = 1) {
  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}&api_key=${API_KEY}`
  ).then((response) => response.json());
  return [data.results, data.page, data.total_pages];
}

export async function fetchDiscoverMovies(query, page = 1) {
  const data = await fetch(
    `https://api.themoviedb.org/3/discover/movie?page=${page}&api_key=${API_KEY}`
  ).then((response) => response.json());
  return [data.results, data.page, data.total_pages];
}

export async function fetchMovieVideos(movie_id) {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${API_KEY}`
  ).then((response) => response.json());
  return data.results;
} /*








































































































EOF

























































There's nothing to see here










































Just scroll up again...
















































I said go away!



















































DO NOT KEEP SCROLLING DOWN!











































there is absolutely nothing to see here ok













































































If you don't stop I will backtrack your IP and send you the cyber police






















































Oh boy, you're in trouble now...




















































They'll probably delete your internet for life...





































































Why are you still here?














































got nothing better to do?




































































Cause I can do this forever














































*/
// Fine, you got me >.<
const API_KEY = "eb2225b8b7ff9355c0c62193e58827ea";
// don't do anything naughty with it
