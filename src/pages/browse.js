import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";
import { useContent } from "../hooks";

export default function Browse() {
  const { series } = useContent('series');
  console.log("series",series);
  return <div>Browse</div>;
}
