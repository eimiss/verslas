import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { ROUTES } from "../../routes";
import { QUESTIONS } from "../../const";

const EndingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const score = params.get("score") || 0;

  const maxScore = QUESTIONS.reduce((max, current) => max + Math.max(...current.options.map(option => option.score)), 0);

  const redirectToHome = () => {
    navigate(ROUTES.home); // Replace with the actual URL of your home page
  };

  return (
    <EndingPageContainer>
      <EndingPageStyle>
        <h1>Sveikiname!</h1>
        <p>Jūs pabaigėte klausimyną.</p>
        <ScoreText>
          Surinktas taškų kiekis: <span className="score">{score}/{maxScore}</span>
        </ScoreText>
        <HomeButton onClick={redirectToHome}>Grįžti namo</HomeButton>
      </EndingPageStyle>
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

const EndingPageStyle = styled.div`
  text-align: center;
  background-color: #f5f5f5;
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





