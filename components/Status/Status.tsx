import {
  LineContainer,
  LineName,
  StatusContainer,
  StatusSeverity,
} from "./styles";

import useFetch from "../../hooks/useFetch";

export default function Status() {
  const { data } = useFetch(
    "https://api.tfl.gov.uk/Line/circle,metropolitan,hammersmith-city,bakerloo/Status"
  );

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
