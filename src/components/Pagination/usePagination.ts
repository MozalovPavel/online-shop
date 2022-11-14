import { useMemo } from "react";
import { range } from "../../helpers/range";

interface IUsePaginationProps {
    totalPages: number;
    currentPage: number;
    siblingCount?: number;
}

export const DOTS = "...";

export const usePagination = (props: IUsePaginationProps) => {
    const {
        totalPages,
        currentPage,
        siblingCount = 1
    } = props;
    
    return useMemo(() => {
        const totalPageNumbers = siblingCount + 5;

        if (totalPageNumbers >= totalPages) {
            return range(1, totalPages);
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(
            currentPage + siblingCount,
            totalPages
        );

        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPages;

        if (!shouldShowLeftDots && shouldShowRightDots) {
            const leftItemCount = 3 + 2 * siblingCount;
            const leftRange = range(1, leftItemCount);

            return [...leftRange, DOTS, totalPages];
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
            const rightItemCount = 3 + 2 * siblingCount;
            const rightRange = range(
                totalPages - rightItemCount + 1,
                totalPages
            );
            return [firstPageIndex, DOTS, ...rightRange];
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            const middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }
    }, [totalPages, siblingCount, currentPage]);
};