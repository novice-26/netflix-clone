import React from "react";
import Proptypes from "prop-types";
import {
  Container,
  Image,
  Inner,
  Pane,
  SubTitle,
  Title,
  Item,
} from "./styles/jumbotron";

export default function Jumbotron({ children, direction = "row", ...props }) {
  return (
    <Item direction={direction}>
      <Inner>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
};
Jumbotron.Pane = function JumbotronPane({ children, ...props }) {
  return <Pane {...props}>{children}</Pane>;
};
Jumbotron.Title = function JumbotronTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...props }) {
  return <SubTitle {...props}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...props }) {
  return <Image {...props} />;
};

// eslint-disable-next-line react/no-typos
Jumbotron.proptypes = {
  children: Proptypes.object,
  direction: Proptypes.string,
};
