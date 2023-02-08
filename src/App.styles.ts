import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html{
  height:100%
}
body{
background-color: #8EC5FC;
background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
margin:0;
padding:0 20px;
display:flex;
justify-content:center;

}
*
{
  box-sizing:border-box;
  font-family: 'Montserrat', sans-serif;
}


`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    text-transform: uppercase;
    color: white;
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }
  .start,
  .next {
    cursor: pointer;
    background: white;
    border: 1px solid lightGray;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 5px;
    height: 50px;
    margin: 20px 0;
    padding: 0 40px;
    font-weight: bold;
    font-size: 1rem;
    transition: 0.5s;
  }
  .start:hover,
  .next:hover {
    scale: 1.05;
  }
  .start {
    max-width: 200px;
  }
`;
