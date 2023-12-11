import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	@font-face {
		font-family: 'Onest';
		src: url('${process.env.PUBLIC_URL}/fonts/Onest/Onest-VariableFont_wght.ttf') format('truetype');
	}

	body {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, Onest, 'Segoe UI', 'Roboto', 'Oxygen',
			'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
			sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		height: 100vh;
	}

	#root {
		max-width: 100vw;
		height: 100%;
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
			monospace;
	}

	:root {
		--c-primary: #EE3C42;
		--c-secondary: #17C3B2;
		--c-tertiary: #FFCB77;
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
		border-radius: 100px;
		:hover {
			color: white !important;
			background-color: var(--c-primary);
		}
		&.active {
			color: var(--c-primary);
		}
	}

	.color-primary {
		color: var(--c-primary);
	}
	.color-secondary {
		color: var(--c-secondary);
	}
	.color-tertiary {
		color: var(--c-tertiary);
	}
`;