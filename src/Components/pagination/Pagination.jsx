import { Link } from "react-router-dom";
import "./Pagination.scss";
import Loading from "../Loading/Loading";
import { useState } from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const [loading, setLoading] = useState(false);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const getLoader = () => {
    setLoading(true);
    setTimeout(() => {
      
      setLoading(false);
    }, 1000);
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
          <nav className="pagination-container">
            <ul className="pagination">
              {currentPage > 1 && (
                <li className="page-item">
                  <a
                    onClick={() => {
                      paginate(currentPage - 1)
                      getLoader();
                    }}
                    href="#"
                    className="page-link"
                  >
                    Prev
                  </a>
                </li>
              )}
              {pageNumbers.map((number) => (
                <li key={number} className="page-item">
                  <a
                    onClick={() => {
                      paginate(number)
                      getLoader()
                    }}
                    href="#"
                    className="page-link"
                  >
                    {number}
                  </a>
                </li>
              ))}
              {currentPage < pageNumbers.length && (
                <li className="page-item">
                  <a
                    onClick={() => {
                      paginate(currentPage + 1)
                      getLoader(true);
                    }}
                    href="#"
                    className="page-link"
                  >
                    Next
                  </a>
                </li>
              )}
            </ul>
          </nav>
      )}
    </>
  );
};

export default Pagination;
