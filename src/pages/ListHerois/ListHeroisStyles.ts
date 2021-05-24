import styled from 'styled-components';

export const ListHeroes = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  list-style-type: none;
  @media (max-width: 945px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 490px) {
    grid-template-columns: repeat(1, 1fr);
  }
  li {
    display: flex;
    flex-direction: column;
    background: #ECEAF5;
    border-radius: 1rem;
    padding: 1rem;
    margin-top: 1rem;
    
    }
    figure {
      display: flex;
      justify-content: center;
      position: relative;
      width: 100%;
      max-height: 10rem;
      padding-top: 91%;
      text-align: center;
      @media (max-width: 490px) {
        padding-top: 60%;
      }
      img {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        max-height: 90%;
        margin: auto;
        transition: opacity 100ms ease-in-out;
      }
    }
  }
`;