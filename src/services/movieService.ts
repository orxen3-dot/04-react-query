import axios from "axios";
import type { Movie } from "../types/movie";
const API_KEY = import.meta.env.VITE_TMDB_TOKEN;

interface HttpResponse {
    results: Movie[];
    page: number;
    total_pages: number;
}
interface MovieSearchResult {
    movies: Movie[];
    totalPages: number;
}

export async function fetchMovies(query: string, page: number): Promise<MovieSearchResult> {

    const response = await axios.get<HttpResponse>("https://api.themoviedb.org/3/search/movie", {
        params: {
            query,
            page: page
        },
        headers: {
            Authorization: `Bearer ${API_KEY}`,
        }
    });
    return {
        movies: response.data.results,
        totalPages: response.data.total_pages,
    };
}
