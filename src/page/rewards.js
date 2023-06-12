import React, { useCallback, useEffect, useMemo, useState } from "react";
import Table from "../components/table";
import Loader from "../components/loader";
import Pagination from "../components/pagination";
import useFetchTransactions from "../hooks/useFetchTransactions";
import { getTableFields, transformData } from "../modules/tableUtils";
import { MSG_ERROR, NUM_PER_PAGE, TEST_REWARD_ERROR } from "../constants";

export default function Rewards() {
  const [tableData, setTableData] = useState([]);
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useFetchTransactions();

  const transformedData = useMemo(() => {
    if (data) {
      return transformData(data.data);
    }
    return [];
  }, [data]);

  const tableFields = useMemo(() => {
    if (data) {
      return getTableFields(data.year, data.months);
    }

    return [];
  }, [data]);

  const handlePageChange = useCallback((page) => setPage(page), []);

  useEffect(() => {
    setTableData(
      transformedData.slice(NUM_PER_PAGE * (page - 1), NUM_PER_PAGE * page)
    );
  }, [page, transformedData]);

  return (
    <div>
      {error ? (
        <div data-testid={TEST_REWARD_ERROR}>{MSG_ERROR}</div>
      ) : isLoading ? (
        <Loader />
      ) : (
        <div>
          <Table fields={tableFields} data={tableData} />
          <Pagination
            page={page}
            count={Math.ceil(transformedData.length / NUM_PER_PAGE)}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}
