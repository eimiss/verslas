import React, { useState } from "react";
import styled from "styled-components";

export type Option = {
  title: string;
  score: number;
  explain?: string;
};

export type QuestionProps = {
  maxScore: number;
  option: Option;
  index: number;
};

const OptionWrapper = styled.div`
  margin-bottom: 8px;
`;

const OptionText = styled.div<{ hasExplanation: boolean }>`
  font-size: 1rem;
  ${(props) => props.hasExplanation && "cursor: pointer; user-select: none;"}
`;

const ScoreText = styled.span<{ score: number; maxScore: number }>`
  color: ${(props) =>
    props.score === 0
      ? "#e53e3e" // Replace with your red-500 color
      : props.score === props.maxScore
        ? "#38a169" // Replace with your green-500 color
        : "#ed8936"}; // Replace with your orange-500 color
`;

const ExplanationText = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  font-size: 0.875rem;
  margin-top: 4px;
  padding: 8px;
  border-radius: 4px;
  box-shadow: inset 0 -2px 2px 0px rgba(0, 0, 0, 0.2);
`;

const QuestionOption = ({ option, maxScore, index }: QuestionProps) => {
  const [ open, setOpen ] = useState<boolean>(false);
  const { title, score, explain } = option;

  return (
    <OptionWrapper>
      <OptionText hasExplanation={!!explain} onClick={() => setOpen((prev) => !prev)}>
        {`${index + 1}. ${title} `}
        <ScoreText score={score} maxScore={maxScore}>{`(${score})`}</ScoreText>
      </OptionText>
      {explain && (
        <ExplanationText isOpen={open}>
          {explain}
        </ExplanationText>
      )}
    </OptionWrapper>
  );
};

export { QuestionOption };