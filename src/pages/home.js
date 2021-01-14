import React from "react";
import { JumbotronContainer } from "../containers/jumbotron";
import { Feature, OptForm } from "../components";
import { FooterContainer } from "../containers/footer";
import { FaqsContainer } from "../containers/faq";
import { HeaderContainer } from "../containers/header";


export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films,TV programmes and more.</Feature.Title>
          <Feature.Subtitle>
            Watch anywhere.Cancel at any time.
          </Feature.Subtitle>
          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it Now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>Register to watch</OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
