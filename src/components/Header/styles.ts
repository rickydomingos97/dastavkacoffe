import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  width: 90rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;

  height: 6.5rem;
  background: ${({ theme }) => theme.colors["base-background"]};
  display: flex;
  align-items: center;
  justify-content: center;


  //fixar o header
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: .75rem;
`;

interface HeaderButtonProps {
  variant: "purple" | "yellow";
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .25rem;
  min-width: 2.3rem;
  height: 2.3rem;
  border-radius: .325rem;
  border: none;
  padding: 0 .5rem;
  position: relative;
  font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};

  ${({ variant, theme }) => css`
    background: ${theme.colors[`brand-${variant}-light`]};
    color: ${theme.colors[`brand-${variant}-dark`]};
  `};

  ${({ variant, theme }) => 
    variant === "purple" && 
    css`
      svg {
        color: ${theme.colors["brand-purple"]};
      }
  `};
`;

