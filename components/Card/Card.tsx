import { CardContainer, Title } from "./styles";
import React, { useEffect, useState } from "react";

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
