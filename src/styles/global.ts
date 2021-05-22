import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  --header: #363F5F;
  --blue: #5429CC;
  
  --blue_light: #6933FF;

  --text-title: #363F5F;
  --text-body: #969CB3;

  --background: #f4f4f4;

}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--background);
  -webkit-font-smoothing: antialiased;
}

html {
  @media (max-width: 1080px) {
    font-size: 93.75%; /**15 px */
  }

  @media (max-width: 720px) {
    font-size: 87.5%; /**14px */
  }
}

`;