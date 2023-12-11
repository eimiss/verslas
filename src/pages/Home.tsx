import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ROUTES } from "../routes";
import { buildRoute } from "../utils/buildRoute";

const PageHome = () => {
  console.log("process.env", process.env.PUBLIC_URL);
  return (
    <PageHomeStyle id="Home">
      <div className='container_1'>
        <div className='image-container'>
          {/*<img src={`${process.env.PUBLIC_URL}/images/home.png`} />*/}
        </div>
        <div className='img-overlay'></div>
        <div className='title-container'>
          <div className='title-text'>
            <h1>Sveiki atvykę į <span className='color-secondary'>verslo pulsą</span>!</h1>
            <span className='subtext'>AI žinių Apklausa verslo srityje</span>
          </div>
          <div className='start-button'>
            <Link to={buildRoute(ROUTES.question, {
              seed: Math.random(),
              page: 0 
            })}><button>Pradėti</button></Link>
          </div>
        </div>
      </div>
      <div className='container_2'>
        <h2>Apie Mus</h2>
        <p>Sveiki atvykę į &quot;Verslo Pulsas&quot; - vietą, kurioje galite išbandyti savo žinias apie dirbtinį intelektą (DI) verslo aplinkoje.</p>

        <p>Mūsų tikslas yra skatinti supratimą apie DI technologijų naudojimą versle ir padėti jums įvertinti savo žinias šioje sparčiai besivystančioje srityje.</p>

        <h2>Kodėl verta žaisti?</h2>
        <ul>
          <li>Patikrinsite savo žinias apie DI verslo srityje.</li>
          <li>Sužinosite, kaip dirbtinis intelektas gali optimizuoti jūsų verslo veiklą.</li>
        </ul>
      </div>
      <div className='container_3'>
        <section>
          <div className='footer-content-left'></div>
          <div className='footer-content'>
            <p>Dalyvaukite mūsų apklausoje ir patikrinkite savo žinias apie dirbtinį intelektą verslo aplinkoje.</p>
          </div>
          <div className='footer-content-right'>
            <Link to={buildRoute(ROUTES.rules, {})}>
              <button>Apie žaidimą</button>
            </Link>
            <Link to={buildRoute(ROUTES.questions, {})}>
              <button>Visi klausimai</button>
            </Link>
          </div>
        </section>
      </div>
    </PageHomeStyle>
  );
};

export default PageHome;

const PageHomeStyle = styled.div`
	flex-shrink: 0;
	flex-grow: 1;
	display: flex;
	flex-direction: column;

	p {
		margin: 5px;
	}

	@keyframes rotator {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	@property --x2 {
		syntax: '<percentage>';
		inherits: false;
		initial-value: 0%;
	}

	@property --x1 {
		syntax: '<percentage>';
		inherits: false;
		initial-value: 0%;
	}

	@keyframes colorChange1 {
		0% {
			--x1:0%;
		}
		50% {
			--x1:50%;
		}
		100% {
			--x1:100%;
		}
	}

	@keyframes colorChange2 {
		0% {
			--x2:100%;
		}
		50% {
			--x2:50%;
		}
		100% {
			--x2:0%;
		}
	}

	.container_1 {
		overflow: hidden;
		height: 500px;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		.image-container {
			> img {
				object-fit: cover;
				object-position: center;
				width: 110%;
			}
			width: 110%;
			aspect-ratio: 1/1;
			position: absolute;
			border-radius: 50%;
			background-image: radial-gradient(circle at var(--x1) 0%, transparent, red), radial-gradient(circle at var(--x2) 100%, transparent, green);
			background-color: blue;
			animation:
				rotator 1000s linear infinite,
				colorChange1 10s infinite alternate,
				colorChange2 10s infinite alternate;
		}
		.img-overlay {
			position: absolute;
			width: 100%;
			height: 100%;
			background-image: linear-gradient(to top, #ffffff, transparent 95%);
			z-index: 1;
		}
		.title-container {
			position: absolute;
			width: 100%;
			height: 100%;
			z-index: 2;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;
			.title-text {
				/*background-image: radial-gradient(closest-side, #ffffff88, transparent);*/
				> h1 {
					text-shadow: 0 0 10px #2c2c2c77;
					margin: 0;
					color: black;
					/*> .color-primary {
						filter: invert();
					}*/
				}
			}
			> .start-button {
				margin-top: 40px;
			}
		}

		.subtext {
			color: black;
			font-size: 14px;
			font-weight: 600;
		}
	}

	.container_2 {
		display: flex;
		align-items: center;
		flex-direction: column;
		padding: 20px;
		border-radius: 10px;
		text-align: center;
		> ul {
			text-align: left;
			list-style: circle;
		}
	}

	.container_3 {
		flex-grow: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 20px;
		background-color: #e9e9e9;
		border-radius: 10px;
		text-align: center;
		> section {
			width: 100%;
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			> * {
				flex-grow: 1;
				flex-basis: 0;
			}
			.footer-content-right {
				display: flex;
				align-items: flex-end;
				flex-direction: column;
				> a {
					> button {
						min-width: 150px;
					}
					:not(:last-child) {
						margin-bottom: 10px;
					}
				}
			}
		}
	}
`;
