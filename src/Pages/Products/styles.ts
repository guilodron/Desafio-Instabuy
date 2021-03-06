import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1350px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;

  @media(max-width: 1400px) {
    h1 {
      margin-left: 20px;
      margin-right: 20px;
    }
  }
`;

export const Collection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const Itens = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media(max-width: 440px){
    div {
      margin: 5px 2px;
      width: 160px;
    }
  }
  @media(max-width: 330px){
    div {
      margin: 0px 2px;
      width: 160px;
    }
  }
`;

export const Select = styled.select`
  height: 30px;
  border: none;
  border-bottom: 1px solid green;
  font-size: 16px;
  @media(min-width: 540px) {
    & + & {
      margin: 0 10px;
    }
  }
  @media(max-width: 540px) {
    & + & {
      margin: 10px 0;
    }
  }


`;

export const Filters = styled.div`
  display: flex;
  align-items:center;
  justify-content: flex-end;
  margin: 25px 0 15px 0;
  max-width: 95%;

  @media(max-width: 540px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-left: 30px;
  }

  span {
    font-weight: 700;
    color: green;
    margin-right: 10px;
  }


`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid green;
  height: 30px;
  font-size: 16px;
`;
