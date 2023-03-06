import styled from "styled-components";

export const QuantityInputContainer = styled.div`
  
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