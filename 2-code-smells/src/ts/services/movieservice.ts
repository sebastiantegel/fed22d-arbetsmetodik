import { IMovie } from "./../models/IMovie";
import { IOmdbResponse } from "./../models/IOmdbResponse";
import axios from "axios";

const BASE_URL = "http://omdbapi.com/?apikey=...&";

async function apiCall<T>(urlEnding: string) {
  return await axios.get<T>(`${BASE_URL}${urlEnding}`);
}

export async function getMovies() {
  const result = await apiCall<IOmdbResponse>("s=star");
  return result.data.Search;
}

export async function getMoviesByTitle(title: string) {
  const result = await apiCall<IOmdbResponse>(`s=${title}`);
  return result.data.Search;
}

export async function getMovieById(id: string) {
  const result = await apiCall<IMovie>(`i=${id}`);
  return result.data;
}
