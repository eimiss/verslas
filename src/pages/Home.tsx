import React from "react";
import styled from "styled-components";
import { Question } from "../components/question/Question";
import { QUESTIONS } from "../const";

const PageHome = () => {
  return (
    <PageHomeStyle id="Home">
      <Question question={QUESTIONS[0].question} options={QUESTIONS[0].options} onClick={(score:number)=>{console.log("received",score)}}/>
    </PageHomeStyle>
  );
};

export default PageHome;

const PageHomeStyle = styled.div`
	flex-shrink: 0;
	flex-grow: 1;
`;
