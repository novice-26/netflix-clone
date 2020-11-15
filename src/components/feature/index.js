import React from "react";
import { Container, Title, Subtitle } from "./styles/feature";

export default function Feature({ ...props }) {
  return <Container {...props}>{props.children}</Container>;
}

Feature.Title = function FeatureTitle({ ...props }) {
  return <Title {...props}>{props.children}</Title>;
};

Feature.Subtitle = function FeatureSubTitle({ ...props }) {
    return <Subtitle {...props}>{props.children}</Subtitle>;
  };
