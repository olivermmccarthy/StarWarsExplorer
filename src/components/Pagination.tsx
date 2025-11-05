import React from 'react';
import { Link } from 'react-router-dom';
import './Pagination.css';

/**
 * Props for the Pagination component.
 */
interface PaginationProps {
  // The current resource type (e.g., 'people', 'planets')
  resourceType: string;
  // The current page number (1-indexed)
  currentPage: number;
  // The total number of items available for the resource (e.g., 82 people)
  totalItems: number;
  // The number of items displayed per page (SWAPI default is 10)
  itemsPerPage?: number;
}

/**
 * Pagination component for navigating between pages of a resource list.
 * It uses React Router's Link to change the URL without a full page reload.
 */
const Pagination: React.FC<PaginationProps> = ({
  resourceType,
  currentPage,
  totalItems,
  itemsPerPage = 10,
}) => {
  // Calculate total number of pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Prevent rendering if there's only one page or no items
  if (totalPages <= 1) {
    return null;
  }

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  // Function to generate the Link URL for a given page number
  const getPageLink = (page: number): string => {
    // The route structure should be /:resourceType/page/:pageNum
    return `/${resourceType}/page/${page}`;
  };

  // Render logic for page numbers (showing current, previous, and next)
  const renderPageNumbers = () => {
    const pageButtons = [];
    const maxPagesToShow = 5; // e.g., show 1, 2, ..., 10, 11

    // Determine the range of pages to display
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    // Adjust the start if the end was capped by totalPages
    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    // Add page 1 if not in the range and show ellipses
    if (startPage > 1) {
      pageButtons.push(
        <Link key={1} to={getPageLink(1)} className="">
          1
        </Link>
      );
      if (startPage > 2) {
        pageButtons.push(
          <span key="dots-start" className="">
            ...
          </span>
        );
      }
    }

    // Add pages in the calculated range
    for (let i = startPage; i <= endPage; i++) {
      const isCurrent = i === currentPage;
      pageButtons.push(
        <Link
          key={i}
          to={getPageLink(i)}
          className={`${isCurrent ? 'current' : ''}`}
        >
          {i}
        </Link>
      );
    }

    // Add last page if not in the range and show ellipses
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageButtons.push(
          <span key="dots-end" className="">
            ...
          </span>
        );
      }
      pageButtons.push(
        <Link key={totalPages} to={getPageLink(totalPages)} className="">
          {totalPages}
        </Link>
      );
    }

    return pageButtons;
  };

  return (
    <nav className="pagination">
      {/* Previous Button */}
      <Link
        to={getPageLink(currentPage - 1)}
        className={` ${isFirstPage ? 'disabled' : ''}`}
        aria-disabled={isFirstPage}
        onClick={(e) => isFirstPage && e.preventDefault()}
      >
        PREVIOUS
      </Link>

      {/* Page Numbers */}
      <div className="numbers-container">{renderPageNumbers()}</div>

      {/* Next Button */}
      <Link
        to={getPageLink(currentPage + 1)}
        className={`${isLastPage ? 'disabled' : ''}`}
        aria-disabled={isLastPage}
        onClick={(e) => isLastPage && e.preventDefault()}
      >
        NEXT
      </Link>
    </nav>
  );
};

export default Pagination;
