/* eslint-disable react/jsx-key */
import React from "react";
import { QUESTIONS } from "../../const";
import styled from "styled-components";
import { QuestionOption } from "../../components/question/Option";

const QuestionsScreen = () => {


    return (
        <div className="bg-slate-300">
            {QUESTIONS.map((q, index) => {
                return (
                    <div className="w-3/6 mx-auto " style={{ minWidth: 320 }}> {q.type && <div className="float-right ml-1 mb-1 p-4 border-2 border-slate-400 rounded-bl-md rounded-tr-md">{`${q.type}`}</div>}
                    <div className="my-4 p-4 rounded-md border-2 border-slate-400 shadow-inner shadow-slate-400" >
                        <div className="font-medium text-xl mb-2">{`${index + 1}. ${q.question}`}</div>
                        <div className="pl-4">
                            {q.options.map((o,optionIndex) => {
                                return (
                                    <QuestionOption option={o} maxScore={Math.max(...q.options.map(option => option.score))} index={optionIndex}/>
                                )
                            })}
                        </div>
                    </div>
                    </div>
                )
            })}
        </div>
    );
};


export default QuestionsScreen;
