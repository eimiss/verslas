import styled from "styled-components";
import React, { useState } from "react";

export type Option = {
    title: string;
    score: number;
    explain?: string;
}

export type QuestionProps = {
    maxScore: number;
    option: Option;
    index: number;
}

const QuestionOption = ({ option,maxScore, index }: QuestionProps) => {
  const [ open, setOpen ] = useState<boolean>();
const {title,score,explain} = option;
  return (
    <div>
    <div className={`text-md ${explain ? 'cursor-pointer select-none' : ''}`} onClick={()=>setOpen((prev)=>!prev)}>{`${index + 1}. ${title} `}<span className={score == 0 ? "text-red-500" : score === maxScore ? "text-green-500" : "text-orange-500"}>{`(${score})`}</span></div>
    { explain && <div className={!open ? "hidden" : "text-sm pl-4 px-2 py-2 mb-2 rounded-md"} style={{boxShadow:"inset 0 -2px 2px 0px rgba(0,0,0, 0.2)"}}>{explain}</div>}
</div>
  );
};

export { QuestionOption };
