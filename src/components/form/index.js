import React from "react";
import {
  Container,
  Base,
  Error,
  Title,
  Text,
  TextSmall,
  Link,
  Input,
  Submit,
} from "./styles/form";

export default function Form({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

Form.Error = function FormError({ children, ...props }) {
  return <Error {...props}>{children}</Error>;
};

Form.Base = function FormBase({ children, ...props }) {
  return <Base {...props}>{children}</Base>;
};
Form.Title = function FormTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>;
};
Form.Text = function FormText({ children, ...props }) {
  return <Text {...props}>{children}</Text>;
}
Form.TextSmall = function FormTextSmall({ children, ...props }) {
  return <TextSmall {...props}>{children}</TextSmall>;
};
Form.Link = function FormLink({ children, ...props }) {
  return <Link {...props}>{children}</Link>;
};

Form.Input = function FormInput({ children, ...props }) {
  return <Input {...props}>{children}</Input>;
};

Form.Submit = function FormSubmit({ children, ...props }) {
  return <Submit {...props}>{children}</Submit>;
};
