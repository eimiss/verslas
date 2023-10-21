import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ROUTES } from "../routes";
import { buildRoute } from "../utils/buildRoute";

const PageHome = () => {
  return (
    <PageHomeStyle id="Home">
      <h1>Sveiki atvykę į verslo pulsą!</h1>
      <div className='home-menu'>
        <ul>
          <li><Link to={buildRoute(ROUTES.question, {
            seed: Math.random(),
            page: 0 
          })}><button>Pradėti</button></Link></li>
        </ul>
      </div>
    </PageHomeStyle>
  );
};

export default PageHome;

const PageHomeStyle = styled.div`
	flex-shrink: 0;
	flex-grow: 1;

	.home-menu {
		padding: 20px;
		background-color: lightgray;
		border-radius: 10px;
	}
`;
