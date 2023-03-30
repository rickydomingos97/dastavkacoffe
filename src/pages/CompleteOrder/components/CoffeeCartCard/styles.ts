import styled from "styled-components";


export const CoffeeCartCardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${({ theme }) => theme.colors["base-button"]};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    img {
      width: 4rem;
      height: 4rem;
    }
  }

  > p {
    font-weight: 700;
    align-self: flex-start;
  }
`

export const ActionsContainer = styled.div`
  margin-top: .5rem;
  heigth: 2rem;
  display: flex;
  align-items: center;
  gap: .5rem;

  > div {
    max-width: 4.5rem;
    height: 100%;
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: .25rem;

  font-size: .75rem;
  
  height: 100%;
  border: none;

  color: ${({ theme}) => theme.colors["base-text"]};
  background-color: ${({ theme }) => theme.colors["base-button"]};

  padding: .6rem;
  border-radius: 6px;
  transition: .4s;

  svg {
    color: ${({ theme }) => theme.colors["brand-purple"]}
  }

  &:hover { 
    background: ${({ theme}) => theme.colors["base-hover"]}
  }
  `