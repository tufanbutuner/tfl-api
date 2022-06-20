import {
  LineContainer,
  LineName,
  StatusContainer,
  StatusSeverity,
} from "./styles";

import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";

// import { } from "./styles";
interface StatusProps {}

export default function Status({}: StatusProps) {
  const { data, loading } = useFetch(
    "https://api.tfl.gov.uk/Line/circle,metropolitan,hammersmith-city/Status"
  );

  // useEffect(() => {
  //   data && console.log(data);
  // }, [data]);

  return (
    <StatusContainer>
      {data.map((line: any) => {
        return (
          <LineContainer key={line.id}>
            <LineName>{line.name}</LineName>
            <StatusSeverity>
              {line.lineStatuses[0].statusSeverityDescription}
            </StatusSeverity>
          </LineContainer>
        );
      })}
    </StatusContainer>
  );
}
