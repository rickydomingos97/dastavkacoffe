import styled from "styled-components";

export const PaymentMethodInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: .75rem;
  font-size: .75rem;
  text-transform: uppercase;

  height: 3rem;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors["base-button"]};
  transition: .4s;
  padding: 0 1rem;

  background: ${({ theme }) => theme.colors["base-button"]};
  color: ${({ theme }) => theme.colors["base-text"]};

  svg {
    color: ${({ theme }) => theme.colors["brand-purple"]}
  }

  &:hover { 
    background: ${({ theme }) => theme.colors["base-hover"]};}

    user-select: none;


`