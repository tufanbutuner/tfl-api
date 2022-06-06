import { useEffect, useState } from "react";

import { IArrivals } from "../types/arrivals";

export default function useFetch(url: string) {
  const [data, setData] = useState<IArrivals[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchAPI = async () => {
    setLoading(true);
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setLoading(false);
  };

  useEffect(() => {
    fetchAPI();
    const timer = setInterval(() => {
      fetchAPI();
    }, 60 * 1000);
    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading };
}
