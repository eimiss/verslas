import React from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes';

const EndingPage = () => {
  const { score } = useParams<{ score: string }>();
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate(ROUTES.home); // Replace with the actual URL of your home page
  };

  return (
    <EndingPageStyle>
      <h1>Sveikiname!</h1>
      <p>Jūs pabaigėte klausimyną.</p>
      <p>Surinktas taškų kiekis: <span className="score">{score}</span></p>
      <button onClick={redirectToHome}>Grįžti namo</button>
    </EndingPageStyle>
  );
};

export default EndingPage;

const EndingPageStyle = styled.div`
  flex-shrink: 0;
  flex-grow: 1;
  text-align: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  h1 {
    color: #333;
  }

  p {
    color: #666;
  }

  .score {
    color: #33cc33;
    font-size: 24px;
  }
`;