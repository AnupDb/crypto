import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../AppProvider";

const ConfirmButtonStyled = styled.div`
  margin: 20px;
  color: green;
  cursor: pointer;
`;
export const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;
export default () => {
  const { confirmFavorites } = useContext(AppContext);
  return (
    <CenterDiv>
      <ConfirmButtonStyled onClick={confirmFavorites}>
        Confirm Favorites
      </ConfirmButtonStyled>
    </CenterDiv>
  );
};
