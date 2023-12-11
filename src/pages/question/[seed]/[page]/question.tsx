import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Question } from "../../../../components/question/Question";
import { QUESTIONS } from "../../../../const";
import { buildRoute } from "../../../../utils/buildRoute";
import { ROUTES } from "../../../../routes";
import shuffleSeed from "shuffle-seed";

const PageQuestion = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [ totalScore, setTotalScore ] = React.useState(0);
  const [ submitted, setSubmitted ] = React.useState(false);
  const [ currentScore, setCurrentScore ] = React.useState(0);
  const [ explain, setExplain ] = React.useState("");

  const seed = params.seed || "0";
  const page = Number(params.page) || 0;

  const shuffledQuestions = shuffleSeed.shuffle(QUESTIONS, seed);

  const handleSubmit = (score: number, explain: string) => {
    setSubmitted(true);
    setCurrentScore(score);
    setTotalScore((state) => state + score);
    setExplain(explain);
  };

  const handleNext = () => {
    setSubmitted(false);
    setCurrentScore(0);
    navigate(buildRoute(ROUTES.question, {
      seed,
      page: page + 1 
    }));
  };

  const q = shuffledQuestions[page];
  const qMax = q ? Math.max(...q.options.map(o => o.score)) : 0;

  React.useEffect(() => {
    if(!q) {
      navigate({
        pathname: ROUTES.ending,
        search: `?score=${totalScore}`
      });
    }
  }, [q]);

  return (
    <PageQuestionStyle id="PageQuestion">
      {q ? submitted ? <NextStyle $score={currentScore} $maxScore={qMax}>
        <div> Surinkai:
           <ScoreStyle $score={currentScore} $maxScore={qMax}><span> {currentScore}/{qMax} </span></ScoreStyle>
        </div>
        <div>
          <span>{explain}</span>
        </div>
        <button onClick={handleNext}>Toliau</button>
      </NextStyle> : <Question question={q.question} options={q.options} onClick={handleSubmit}/> : null}
    </PageQuestionStyle>
  );
};

export default PageQuestion;

const PageQuestionStyle = styled.div`
	flex-shrink: 0;
	flex-grow: 1;
`;

const NextStyle = styled.div<{ $score: number; $maxScore: number; }>`
	> button {
		color: ${props => !props.$score ? "red" : props.$score >= props.$maxScore ? "green" : "orange"};
	}
`;

const ScoreStyle = styled.span<{ $score: number; $maxScore: number; }>`
	> span {
		color: ${props => !props.$score ? "red" : props.$score >= props.$maxScore ? "green" : "orange"};
	}
`;