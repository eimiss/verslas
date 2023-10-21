import React from "react";
import styled from "styled-components";
import { QUESTIONS } from "../const";

const PageHome = () => {
  return (
    <PageHomeStyle id="Home">
      {QUESTIONS[0].question}
    </PageHomeStyle>
  );
};

export default PageHome;

const PageHomeStyle = styled.div`
	flex-shrink: 0;
	flex-grow: 1;
`;
