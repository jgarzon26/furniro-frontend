'use client';

import { useShopOptionsStore } from "@/hooks/useShopOptionsStore";
import PaginationButton from "./PaginationButton";
import { useCallback, useState } from "react";
import useShopQuery from "@/hooks/useShopQuery";

const PaginationSection = () => {
  const { page, setPage } = useShopOptionsStore(state => state);
  const [pageArrayIndex, setPageArrayIndex] = useState(0);
  const { totalPages } = useShopQuery();

  const setupPages = useCallback(() => {
    const pages: number[][] = [];
    let currentNumber = 1;
    const totalNumbers = totalPages;

    while (currentNumber <= totalNumbers) {
      const remainingNumbers = totalNumbers - currentNumber + 1;
      const innerLength = Math.min(3, remainingNumbers);

      const innerArray: number[] = [];
      for (let i = 0; i < innerLength; i++) {
        innerArray.push(currentNumber);
        currentNumber++;
      }

      pages.push(innerArray);
    }
    return pages;
  }, [totalPages]);

  const pages = setupPages();

  return (
    <section className="self-center flex flex-row items-center gap-5 mt-5 mb-20">
      {
        pageArrayIndex > 0 && (
          <PaginationButton onClick={() => setPageArrayIndex(prev => prev - 1)}>Prev</PaginationButton>
        )
      }
      {
        pages[pageArrayIndex].map((pageNum) => (
          <PaginationButton
            key={pageNum}
            active={page === pageNum}
            onClick={() => setPage(pageNum)}
          >
            {pageNum}
          </PaginationButton>
        ))
      }
      {
        pageArrayIndex < pages.length - 1 && (
          <PaginationButton onClick={() => setPageArrayIndex(prev => prev + 1)}>Next</PaginationButton>
        )
      }
    </section>
  );
}

export default PaginationSection;