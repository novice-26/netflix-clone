import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Background, ButtonLink, Container, Frame, Logo } from "./styles/header";

export default function Header({ bg = true, ...props }) {
  return bg ? (
    <Background {...props}>{props.children}</Background>
  ) : (
    props.children
  );
}

Header.Frame = function HeaderFrame({ ...props }) {
  return <Container {...props}>{props.children}</Container>;
};

Header.ButtonLink = function HeaderButtonLink({ ...props }) {
  return <ButtonLink {...props}>{props.children}</ButtonLink>;
};

Header.Logo = function HeaderLogo({ to, ...props }) {
  return (
    <ReactRouterLink to={to} {...props}>
      <Logo {...props}>{props.children}</Logo>
    </ReactRouterLink>
  );
};
