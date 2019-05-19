import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { AppContext } from "./AppProvider";
const Bar = styled.nav`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
`;

const Logo = styled.div`
  font-size: 1.5em;
`;

const ControlElem = styled.span`
  cursor: pointer;
  ${props =>
    props.active &&
    css`
      border-bottom: 1px solid #666;
    `}
`;

const ControlButton = ({ name, active }) => {
  const { page, setPage } = useContext(AppContext);
  return (
    <ControlElem onClick={() => setPage(name)} active={page === name}>
      {name}
    </ControlElem>
  );
};

export default () => (
  <Bar>
    <Logo>CryptoView</Logo>
    <span />
    <ControlButton active name="Dashboard" />
    <ControlButton active name="Settings" />
  </Bar>
);
