import styled from "styled-components";
import React, { useState } from "react";


export type Option = {
    title: string;
    score: number;
}

export type QuestionProps = {
    onClick: (score: number) => void;
    question: string;
    options: Option[];
}



const Question = ({ question, options, onClick }: QuestionProps) => {
    const [selectedScore, setSelectedScore] = useState<number>(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSelectedScore(parseInt(value));
    };

    return (
        <fieldset >
            <legend>{question}</legend>
            {options.map((option, key) => {
                return (
                    <div key={key}>
                        <input type="radio" value={option.score} onChange={handleChange} />
                        <label>{option.title}</label>
                    </div>
                )
            })}
            <div>
                <StyledButton type="button" onClick={() => onClick(selectedScore)}>Pateikti</StyledButton>
            </div>
        </fieldset>
    )
};

export { Question };

const RedirectPageStyle = styled.div`
	flex-shrink: 0;
	flex-grow: 1;
	display: flex;
	align-items: center;
	justify-content: center;
`;
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
  `