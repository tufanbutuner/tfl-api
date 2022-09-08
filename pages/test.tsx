import { useEffect, useState } from "react";

export default function Test() {
  const [results, setResults] = useState<any>([]);

  useEffect(() => {
    fetch("http://localhost:5000/test")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setResults(data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <p>{results.documentTitle}</p>
      {results.issues?.map((d: any, i: any) => (
        <div key={i}>
          <p>{d.code}</p>
          <p>{d.message}</p>
        </div>
      ))}
    </>
  );
}
