import React, { useCallback } from "react";
import "./pagination.css";
import {
  TEST_PAGINATION_ID,
  TEST_PAGINATION_NEXT_BUTTON_ID,
  TEST_PAGINATION_PAGE_NUM_BUTTON_ID,
  TEST_PAGINATION_PREV_BUTTON_ID,
} from "../../constants";

/**
 * Pagination component
 * @param { number } page current page numer
 * @param { number } count total page numer
 * @param { function } onPageChange function will be executed when current page changes
 * @returns React Element
 */
export default function Pagination({ page, count, onPageChange }) {
  const handleClick = useCallback(
    (pageNumber) => {
      onPageChange(pageNumber);
    },
    [onPageChange]
  );

  const handlePrev = useCallback(() => {
    onPageChange(page - 1);
  }, [onPageChange, page]);

  const handleNext = useCallback(() => {
    onPageChange(page + 1);
  }, [onPageChange, page]);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= count; i++) {
      pageNumbers.push(
        <li
          key={i}
          data-testid={TEST_PAGINATION_PAGE_NUM_BUTTON_ID}
          className={`page-number ${page === i ? "active" : ""}`}
          onClick={() => handleClick(i)}
        >
          {i}
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <ul className="pagination" data-testid={TEST_PAGINATION_ID}>
      <li
        role="button"
        data-testid={TEST_PAGINATION_PREV_BUTTON_ID}
        className={`page-item ${page === 1 ? "disabled" : ""}`}
        onClick={handlePrev}
      >
        Prev
      </li>
      {renderPageNumbers()}
      <li
        role="button"
        data-testid={TEST_PAGINATION_NEXT_BUTTON_ID}
        className={`page-item ${page === count ? "disabled" : ""}`}
        onClick={handleNext}
      >
        Next
      </li>
    </ul>
  );
}
