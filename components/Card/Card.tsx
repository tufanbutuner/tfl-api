import { CardContainer, Title } from "./styles";
import React, { useEffect, useState } from "react";

interface CardProps {
  title?: string;
}

export default function Card({ title }: CardProps) {
  return (
    <CardContainer>
      <Title title={title}>{title}</Title>
    </CardContainer>
  );
}
