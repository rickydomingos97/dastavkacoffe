import styled from "styled-components";

export const InputStyledContainer = styled.input`
height: 2.625rem;
border-radius: 4px;
border: 1px solid ${({ theme }) => theme.colors["base-button"]};
background: ${({ theme }) => theme.colors["base-input"]};
transition: .4s;

&:focus {
  border-color: ${({ theme }) => theme.colors["brand-yellow-dark"]}
}

//color: ${({ theme }) => theme.colors["base-text"]};
font-size: .75rem;
padding: .75rem;
`