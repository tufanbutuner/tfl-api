import { Code, Result, TestContainer } from "../styles/styles";
import { useEffect, useState } from "react";

export default function Test() {
  const [results, setResults] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://tfl-test-api.onrender.com/test")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setResults(data);
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TestContainer>
      {isLoading === true ? (
        <span>Loading...</span>
      ) : (
        <Result>
          <p>{results.documentTitle}</p>
          {results.issues?.map((d: any, i: any) => (
            <div key={i}>
              <Code>{d.code}</Code>
              <p>{d.message}</p>
            </div>
          ))}
        </Result>
      )}
    </TestContainer>
  );
}
