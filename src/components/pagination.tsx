"use client";

import { useRouter } from "next/navigation";
import ReactPaginate from "react-paginate";

function Paginatoin({ pageCount }: { pageCount: number }) {
  const router = useRouter();
  const handlePageClick = (e: { selected: number }) => {
    const page = e.selected + 1;
    router.push(`/store?page=${page}&per-page=1`);
  };
  return (
    <div className="w-full mt-5">
      <ReactPaginate
        className="grid grid-cols-12 "
        pageClassName="col-span-3 max-md:col-span-2"
        pageLinkClassName="border px-[5px] py-[3px] rounded-full  "
        previousClassName="col-span-3 pr[40px] max-md:col-span-4 "
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        nextClassName="col-span-3"
      />
    </div>
  );
}

export default Paginatoin;
