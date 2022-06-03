import { useEffect, useState } from "react";

export default function useFetch(url: string) {
  const [data, setData] = useState<any[]>([]);

  const fetchAPI = async () => {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
  };

  useEffect(() => {
    fetchAPI();
    const timer = setInterval(() => {
      fetchAPI();
    }, 60 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return { data };
}
