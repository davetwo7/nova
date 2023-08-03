import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import titleCase from "../../utils/TitleCase";

const GenreDropdown = () => {
  const genres = useLoaderData();
  const [currentPage, setCurrentPage] = useState(1);
  const [viewAllGenres, setViewAllGenres] = useState(false);
  const itemsPerPage = 65;
  const displayedGenres = genres.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  console.log(genres);

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
      <div className="border-b border-t border-rose-50/20 text-rose-50 py-4 flex items-center gap-2">
        <span className="text-2xl font-satoshi-regular">Genres</span>
        <div
          onClick={() => setViewAllGenres(!viewAllGenres)}
          className="group text-sm font-satoshi-regular text-neutral-600"
        >
          <span className="hover:text-rose-50 transition-colors duration-75 cursor-pointer">
            {"  \u2192 view all genres"}
          </span>
          {/* <span className="block h-0.5 bg-stone-900/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-150"/> */}
        </div>
      </div>
      <AnimatePresence>
        {viewAllGenres ? (
          <motion.div
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{ opacity: 1, maxHeight: 500 }}
            exit={{ opacity: 0, maxHeight: 0 }}
            transition={{ duration: 0.2 }}
            key="dropdownKey"
          >
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.075 }}
                key={currentPage}
              >
                <div className="flex items-center">
                  {currentPage > 1 ? (
                    <button
                      onClick={handlePrevPage}
                      className="grow mr-5 rounded-md hover:bg-rose-500/50 transition-colors duration-150 p-2"
                    >
                      {"\u2190"}
                    </button>
                  ) : null}
                  <div className="flex flex-wrap gap-5 py-5 overflow-hidden">
                    {displayedGenres.map((genre, index) => (
                      <button
                        className="relative group text-rose-50 font-satoshi-regular"
                        key={index}
                      >
                        <Link
                          className="mb-2 font-satoshi-light hover:text-rose-500 transition-colors duration-75"
                          to={genre.name}
                        >
                          {titleCase(genre.name)}
                        </Link>
                        <span className="block h-0.5 bg-stone-900/75 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-150 absolute bottom-0 w-full" />
                      </button>
                    ))}
                  </div>
                  {genres.length > currentPage * itemsPerPage ? (
                    <button
                      onClick={handleNextPage}
                      className="p-2 text-rose-50 h-full ml-5 hover:bg-stone-950/40 transition-colors duration-150"
                    >
                      {"\u2192"}
                    </button>
                  ) : null}
                </div>
                <div className="flex gap-5"></div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default GenreDropdown;
