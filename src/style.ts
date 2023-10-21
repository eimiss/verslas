import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	body {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
			'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
			sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		height: 100vh;
	}

	#root {
		max-width: 100vw;
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
			monospace;
	}

	:root {
		//
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		li {
			//
		}
	}

	button {
		background-color: white;
		border: none;
		cursor: pointer;
		padding: 10px 15px;
		transition: all .1s;
		font-size: 14px;
		box-shadow: 0 0 5px gray;
		:hover {
			color: var(--c-pink1) !important;
			box-shadow: 0 0 2px gray;
			:active {
				box-shadow: 0 0 0 gray;
			}
		}
		&.active {
			color: var(--c-pink3);
		}
	}
`;