import React from "react";
import styled from "styled-components";

const PageHome = () => {
  return (
    <PageHomeStyle id="Home">
      Home
    </PageHomeStyle>
  );
};

export default PageHome;

const PageHomeStyle = styled.div`
	flex-shrink: 0;
	flex-grow: 1;
`;
