import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { ROUTES } from "../../routes";
import { QUESTIONS, RANKS } from "../../const";

const EndingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const score = params.get("score") || '0';

  const maxScore = QUESTIONS.reduce((max, current) => max + Math.max(...current.options.map(option => option.score)), 0);
  const scorePercentage = parseInt(score) / maxScore * 100;
  const redirectToHome = () => {
    navigate(ROUTES.home); // Replace with the actual URL of your home page
  };
  const rank = RANKS.find((r)=> r.value <= scorePercentage);
  console.log(scorePercentage)
  return (
    <EndingPageContainer>
      <EndingPageStyleContainer>
      <EndingPageStyle>
        <h1>Sveikiname!</h1>
        <img src="https://cdn-icons-png.flaticon.com/512/5957/5957125.png" style={{height:96}}></img>
        <p>Jūs pabaigėte klausimyną.</p>
        <ScoreText>
          Jūs sėkmingai įveikėte žaidimą Verslo Pulsas.
        </ScoreText>
        <ScoreText>
          Jūsų lygis - <b><span className="score">{rank?.title}</span></b>
        </ScoreText>
        <ScoreText>
          Surinktas taškų kiekis: <span className="score">{score}/{maxScore}</span>
        </ScoreText>
        <HomeButton onClick={redirectToHome}>Grįžti namo</HomeButton>
      </EndingPageStyle>
      </EndingPageStyleContainer>
    </EndingPageContainer>
  );
};

export default EndingPage;

const EndingPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('https://wallpapercave.com/wp/wp12520106.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const EndingPageStyleContainer = styled.div`
  background: radial-gradient(rgba(255,255,255,1), rgba(175,175,175,1));
  padding: 20px;
  border-radius: 5px;
  border: 1px solid rgba(155,155,155,0.5)
`;

const EndingPageStyle = styled.div`
  min-width: 400px;
  text-align: center;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const ScoreText = styled.p`
  color: #333;
  margin: 20px 0;
  font-size: 18px;
`;

const HomeButton = styled.button`
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;





