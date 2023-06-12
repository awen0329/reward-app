import { useEffect, useState } from "react";
import { mockGetQuarterTransactions } from "../server/mockAPI";

export default function useFetchTransactions() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await mockGetQuarterTransactions();
      setData(data.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    error,
    isLoading,
  };
}
