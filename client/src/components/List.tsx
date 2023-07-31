import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GenreDropdown from "./GenreDropdown";
import GenreList from "./GenreList";
const List = () => {
  const genres = useLoaderData();
  const [currentPage, setCurrentPage] = useState(1);
  const [viewAllGenres, setViewAllGenres] = useState(false);
  const itemsPerPage = 65;
  const displayedGenres = genres.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    console.log(currentPage);
    setCurrentPage((currentPage) => currentPage + 1);
  };

  const handlePrevPage = () => {
    console.log(currentPage);
    setCurrentPage((currentPage) => currentPage - 1);
  };
  useEffect(() => {
    console.log(currentPage);
    console.log(displayedGenres);
  }, [displayedGenres]);

  return (
    <div>
      <GenreDropdown/>
      <GenreList/>
    </div>
  );
};

export default List;
