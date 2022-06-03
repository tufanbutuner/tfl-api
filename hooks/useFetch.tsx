import { useEffect, useState } from "react";

export default function useFetch(url: string) {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [url]);

  return { data };
}
