import React from "react";
import ReactPaginate from "react-paginate";
import { IPagination } from "../../types";
import style from "./Pagination.less";

interface IProps {
  pagination: IPagination;
  onGoToPage: (pagination: IPagination) => void;
}

const Pagination: React.FC<IProps> = ({ pagination, onGoToPage }) => {
  return (
    <ReactPaginate
      pageCount={pagination.pages}
      pageRangeDisplayed={4}
      marginPagesDisplayed={3}
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      onPageChange={e => {
        onGoToPage({ ...pagination, page: e.selected });
      }}
      containerClassName={style.pagination}
      activeClassName={style.active}
    />
  );
};

export default Pagination;
