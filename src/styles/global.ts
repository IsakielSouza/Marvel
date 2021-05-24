import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  --header: #266BF5;
  
  --text-title: #363F5F;
  --text-body: #969CB3;

  --background: #363F5F;

}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--background);
  -webkit-font-smoothing: antialiased;
;
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