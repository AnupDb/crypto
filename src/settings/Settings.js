import React from "react";
import ConfirmButton from "./ConfirmButton";
import { AppProvider } from "../AppProvider";
import WelcomeMessage from "./WelcomeMessage";

export default () => {
  return (
    <AppProvider>
      <WelcomeMessage />
      <ConfirmButton />
    </AppProvider>
  );
};
