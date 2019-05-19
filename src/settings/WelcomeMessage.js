import React, { useContext } from "react";
import { AppContext } from "../AppProvider";

export default () => {
  const { firstVisit } = useContext(AppContext);

  return (
    <>
      {firstVisit && (
        <div>
          Welcome to CryptoView, please select your favourite coins to begin.{" "}
        </div>
      )}
    </>
  );
};
