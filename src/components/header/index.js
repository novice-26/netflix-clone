import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Background, ButtonLink, Container, Frame, Logo,Feature,Text,FeatureCallOut,Link, Group,Profile,Picture,Dropdown } from "./styles/header";

export default function Header({ bg = true, ...props }) {
  return bg ? (
    <Background {...props}>{props.children}</Background>
  ) : (
    props.children
  );
}

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Feature = function HeaderFeature({children, ...restprops}){
  return <Feature {...restprops}>{children}</Feature>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.Frame = function HeaderFrame({ children,...props }) {
  return <Container {...props}>{children}</Container>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Header.ButtonLink = function HeaderButtonLink({ ...props }) {
  return <ButtonLink {...props}>{props.children}</ButtonLink>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.Logo = function HeaderLogo({ to, ...props }) {
  return (
    <ReactRouterLink to={to} {...props}>
      <Logo {...props}>{props.children}</Logo>
    </ReactRouterLink>
  );
};
