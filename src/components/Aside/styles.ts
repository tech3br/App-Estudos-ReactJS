import styled from 'styled-components';

export const Aside = styled.aside`
  width: 20vw;
  height: 100vh;
  position: fixed;
  background: aliceblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    scroll-behavior: smooth;
    
    > li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 40px;
    }
  }
`;

export const Logo = styled.img`
  margin: 20px 0;
  width: 80%;
  height: 20%;
`;
