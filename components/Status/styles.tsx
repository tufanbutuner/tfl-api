import styled from "styled-components";

export const StatusContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 36px auto;
  width: 60%;
  padding: 24px;
  border: 1px solid #cacaca;
  border-radius: 12px;
`;
StatusContainer.displayName = "StatusContainer";

export const LineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 6px 0px;
`;
LineContainer.displayName = "LineContainer";

export const LineName = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
`;
LineName.displayName = "LineName";

export const StatusSeverity = styled.span`
  margin-left: auto;
`;
StatusSeverity.displayName = "StatusSeverity";
