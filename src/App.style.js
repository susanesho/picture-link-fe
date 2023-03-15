import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
  body {
    font-size: 16px;
    width: 100vw;
    min-height: 100vh;
    background: #F4F7FE;
  }
`

export const Container = styled.div`
  color: #000;
  max-width: 55rem;
  margin: 5rem auto;
`