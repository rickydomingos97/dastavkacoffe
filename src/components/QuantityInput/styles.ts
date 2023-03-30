import { css } from "styled-components";
import styled from "styled-components";

interface QuantityInputContainerProps {
  size?: "small" | "medium";
}

export const QuantityInputContainer = styled.div<QuantityInputContainerProps>`
  
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  gap: .25rem;
  border-radius: .375rem;
  padding: .5rem;
  background: ${({ theme }) => theme.colors["base-button"]};

  input {
    text-align: center;
    width: 100%;

    background: none !important;
    border: none;
    color: ${({ theme }) => theme.colors["base-title"]};

    &:focus {
      outline: none;
    }
  }

  ${({ size }) => size === 'medium' && css`
  padding: .5rem;
  `}

  ${({ size }) => size === 'small' && css`
  padding: .3rem .5rem;
  `}

   > button {
    display: flex;
    align-items: center;
    justify-content: center;
  
}

`

export const IconWrapper = styled.button.attrs({
  type: "button",
})`
  width: 0.875rem;
  height: 0.875rem;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors["brand-purple"]};
  transition: .4s;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.colors["brand-purple-dark"]}
  }
`