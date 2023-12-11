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
  const [ currentSelectedIndex, setCurrentSelectedIndex ] = React.useState<number>();

  const seed = params.seed || "0";
  const page = Number(params.page) || 0;

  let shuffledQuestions = shuffleSeed.shuffle(QUESTIONS, seed);
  shuffledQuestions = shuffledQuestions.slice(0, 10);

  const handleSubmit = (score: number, explain: string) => {
    setSubmitted(true);
    setCurrentScore(score);
    setTotalScore((state) => state + score);
    setExplain(explain);
  };

  const handleNext = () => {
    setSubmitted(false);
    setCurrentScore(0);
    setCurrentSelectedIndex(undefined);
    navigate(buildRoute(ROUTES.question, {
      seed,
      page: page + 1 
    }));
  };

  const handleSelectOption = (index: number) => {
    setCurrentSelectedIndex(index);
  };

  const q = shuffledQuestions[page];
  const qMax = q ? Math.max(...q.options.map(o => o.score)) : 0;

  React.useEffect(() => {
    if(!q) {
      navigate({
        pathname: ROUTES.ending,
        search: `?score=${totalScore}&seed=${seed}`
      });
    }
  }, [q]);

  return (
    <PageQuestionStyle id="PageQuestion">
      {q ? <div>
        <Question onSelect={handleSelectOption} selectedIndex={currentSelectedIndex} submitted={submitted} question={q.question} options={q.options} onClick={handleSubmit}/>
        {submitted ? <NextStyle $score={currentScore} $maxScore={qMax}>
          <h3> Surinkai:
            <ScoreStyle $score={currentScore} $maxScore={qMax}><span> {currentScore}/{qMax} </span></ScoreStyle>
          </h3>
          <div>
            <span>{explain}</span>
          </div>
          <button onClick={handleNext}>Toliau</button>
        </NextStyle> : null}
      </div> : null}
    </PageQuestionStyle>
  );
};

export default PageQuestion;

const PageQuestionStyle = styled.div`
	flex-shrink: 0;
	flex-grow: 1;
	padding: 20px 40px;
`;

const NextStyle = styled.div<{ $score: number; $maxScore: number; }>`
	margin-top: 20px;
	> h3 {
		margin-bottom: 0;
	}
	> button {
		margin-top: 10px;
		background-color: ${props => !props.$score ? "#ff0000" : props.$score >= props.$maxScore ? "#00ff00" : "#ffa500"};
		:hover {
			color: black !important;
			filter: brightness(0.95);
			background-color: ${props => !props.$score ? "#ff0000" : props.$score >= props.$maxScore ? "#00ff00" : "#ffa500"};
		}
	}
`;

const ScoreStyle = styled.span<{ $score: number; $maxScore: number; }>`
	> span {
		color: ${props => !props.$score ? "red" : props.$score >= props.$maxScore ? "green" : "orange"};
	}
`;