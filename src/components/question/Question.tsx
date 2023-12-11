import styled from "styled-components";
import React, { useState } from "react";

export type Option = {
    title: string;
    score: number;
    explain?: string;
}

export type QuestionProps = {
    onClick: (score: number, explain: string) => void;
    question: string;
    options: Option[];
}

const Question = ({ question, options, onClick }: QuestionProps) => {
  const [ selectedIndex, setSelectedIndex ] = useState<number>();

  const handleChange = (index: number) => {
    setSelectedIndex(index);
  };

  const handleSubmit = () => {
    if(selectedIndex !== undefined) {
      setSelectedIndex(undefined);
      onClick?.(options[selectedIndex].score, options[selectedIndex]?.explain || "");
    }
  };

  return (
    <fieldset >
      <legend>{question}</legend>
      {options.map((option, key) => {
        return (
          <div key={key}>
            <input type="radio" name="bitch" value={option.score} checked={selectedIndex === key} onChange={() => handleChange(key)} />
            <label>{option.title}</label>
            <p></p>
          </div>
        );
      })}
      <div>
        <StyledButton type="button" onClick={handleSubmit}>Pateikti</StyledButton>
      </div>
    </fieldset>
  );
};

export { Question };

const StyledButton = styled.button`
	margin-top: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	line-height: 1;
	text-decoration: none;
	color: #ffffff;
	font-size: 18px;
	border-radius: 5px;
	width: 200px;
	height: 40px;
	font-weight: bold;
	transition: 0.3s;
	background-color: #F30606;
	:hover{
		opacity:0.9;
	}
`;