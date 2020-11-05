import React from "react";
import { Container, Input, Text, Button, Break } from "./styles/opt-form";

export default function OptForm({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ ...props }) {
  return <Input {...props}>{props.children}</Input>;
};

OptForm.Button = function OptFormButton({ ...props }) {
  return (
    <Button {...props}>
      {props.children}
      <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Text = function OptFromText({ ...props }) {
  return <Text {...props}>{props.children}</Text>;
};

OptForm.Break = function OptFromBreak({ ...props }) {
  return <Break {...props}>{props.children}</Break>;
};
