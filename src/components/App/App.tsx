
import SearchBar from "../SearchBar/SearchBar";
import MovieGrid from "../MovieGrid/MovieGrid";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import MovieModal from "../MovieModal/MovieModal";
import css from "./App.module.css";
import { fetchMovies } from "../../services/movieService";
import toast, { Toaster } from "react-hot-toast";

import type { Movie } from "../../types/movie";
import { useEffect, useState } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";

// pagination
import ReactPaginateModule from "react-paginate";
import type { ReactPaginateProps } from "react-paginate";
import type { ComponentType } from "react";
type ModuleWithDefault<T> = { default: T };
const ReactPaginate = (
  ReactPaginateModule as unknown as ModuleWithDefault<ComponentType<ReactPaginateProps>>
).default;


export default function App() {
  const [page, setPage] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data = { movies: [], totalPages: 0 },
    isLoading,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["movies", searchQuery, page],
    queryFn: () => fetchMovies(searchQuery, page),
    enabled: searchQuery.trim() !== "",
    placeholderData: keepPreviousData,
  });

  const { movies, totalPages } = data;

  useEffect(() => {
    if (isSuccess && movies.length === 0) {
      toast.error("No movies found for your request.");
    }
  }, [movies, isSuccess]);

  function handleSearch(query: string) {
    if (!query.trim()) return;

    setPage(1);
    setSearchQuery(query.trim());
  }

  function handleSelect(movie: Movie) {
    setSelectedMovie(movie);
  }

  return (
    <>
      <Toaster />

      <SearchBar onSubmit={handleSearch} />

      {isLoading && <Loader />}

      {isError && <ErrorMessage />}

      {totalPages > 1 && (
        <ReactPaginate
          pageCount={totalPages}
          pageRangeDisplayed={5}
          marginPagesDisplayed={1}
          onPageChange={({ selected }) => setPage(selected + 1)}
          forcePage={page - 1}
          containerClassName={css.pagination}
          activeClassName={css.active}
          nextLabel="→"
          previousLabel="←"
        />)}


      {movies.length > 0 && (
        <MovieGrid
          movies={movies}
          onSelect={handleSelect}
        />
      )}

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </>
  );
}

