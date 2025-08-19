import styled, {} from 'styled-components';

export const Container = styled.div`
  inline-size: 100%;
  block-size: 100vh;
  background-color: #CACACA;

  display: flex;
align-items: center;
justify-content: center;
`;


export const Content = styled.div`
     background-color: #FFFFFF;
    inline-size: 50%;
    
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
