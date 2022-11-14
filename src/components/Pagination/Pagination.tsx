import classnames from "classnames";
import { DOTS, usePagination } from "./usePagination";
import styles from '../../styles/components/Pagination.module.css';

interface IPaginationProps {
    currentPage: number;
    totalPages: number;
    isLoading?: boolean;

    onPageChange: (page: number) => void;
}

// FIXME поправить
// FIXME переместить стили к компонентам

const Pagination = (props: IPaginationProps) => {
    const {
        onPageChange,
        totalPages,
        currentPage
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalPages,
    })!;

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const lastPage = paginationRange[paginationRange.length - 1];

    const goToNext = () => {
        onPageChange(currentPage + 1);
    };

    const goToPrevious = () => {
        onPageChange(currentPage - 1);
    };

    const gotToStart = () => {
        onPageChange(1);
    };

    const gotToEnd = () => {
        onPageChange(totalPages);
    };

    return (
        <div className={styles.paginationContainer}>
            <div
                className={classnames(styles.paginationItem, styles.doubleArrow, {
                    [styles.disabled]: currentPage === 1
                })}
                onClick={gotToStart}
            />
            <div
                className={classnames(styles.paginationItem, styles.arrow, {
                    [styles.disabled]: currentPage === 1
                })}
                onClick={goToPrevious}
            />
            {paginationRange.map(pageNumber => {

                if (pageNumber === DOTS) {
                    return <div key={pageNumber} className={classnames(styles.paginationItem, styles.dots)}>&#8230;</div>;
                }

                return (
                    <div
                        key={pageNumber}
                        className={classnames(styles.paginationItem, {
                            [styles.selected]: pageNumber === currentPage
                        })}
                        onClick={() => onPageChange(pageNumber as number)}
                    >
                        {pageNumber}
                    </div>
                );
            })}
            <div
                className={classnames(styles.paginationItem, styles.arrow, styles.right, {
                    [styles.disabled]: currentPage === lastPage
                })}
                onClick={goToNext}
            />
            <div
                className={classnames(styles.paginationItem, styles.doubleArrow, styles.right, {
                    [styles.disabled]: currentPage === lastPage
                })}
                onClick={gotToEnd}
            />
        </div>
    );
};

export default Pagination;
