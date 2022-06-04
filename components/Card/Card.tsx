import { CardContainer, Title } from "./styles";
interface CardProps {
  title?: string;
  children?: any;
}

export default function Card({ title, children }: CardProps) {
  return (
    <CardContainer>
      <Title title={title}>{title}</Title>
      {children}
    </CardContainer>
  );
}
