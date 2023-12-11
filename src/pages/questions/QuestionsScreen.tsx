import React from "react";
import styled from "styled-components";
import { QUESTIONS } from "../../const";

import {QuestionOption} from "../../components/question/Option";

const QuestionsScreen = () => {
  return (
    <Container>
      {QUESTIONS.map((q, index) => (
        <QuestionContainer key={index}>
          {q.type && <TypeContainer>{q.type}</TypeContainer>}
          <QuestionWrapper>
            <QuestionText>{`${index + 1}. ${q.question}`}</QuestionText>
            <OptionsContainer>
              {q.options.map((o, optionIndex) => (
                <QuestionOption
                  key={optionIndex}
                  option={o}
                  maxScore={Math.max(...q.options.map(option => option.score))}
                  index={optionIndex}
                />
              ))}
            </OptionsContainer>
          </QuestionWrapper>
        </QuestionContainer>
      ))}
    </Container>
  );
};

export default QuestionsScreen;

const Container = styled.div`
  background-color: #6b7280; /* Replace with your slate-300 color */
`;

const QuestionContainer = styled.div`
  width: 50%; /* Adjust as needed */
  margin: 0 auto;
  min-width: 320px;
`;

const TypeContainer = styled.div`
  float: right;
  margin-left: 1px;
  margin-bottom: 1px;
  padding: 16px;
  border: 2px solid #6b7280; /* Replace with your slate-400 color */
  border-radius: 8px 0 0 8px;
`;

const QuestionWrapper = styled.div`
  margin: 16px 0;
  padding: 16px;
  border: 2px solid #6b7280; /* Replace with your slate-400 color */
  border-radius: 8px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const QuestionText = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 8px;
`;

const OptionsContainer = styled.div`
  padding-left: 16px;
`;