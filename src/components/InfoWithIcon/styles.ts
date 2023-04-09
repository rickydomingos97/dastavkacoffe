import styled from "styled-components";

export const InfoWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

`

interface IconContainerProps {
  iconBg: string
}

export const IconContainer = styled.div<IconContainerProps>`
  width: 4rem;
  height: 4rem;
  border-radius: 25%;
  
  
  background: ${({ iconBg }) => iconBg};
  color: ${({ theme }) => theme.colors["base-white"]};

  display: flex;
  justify-content: center;
  align-items: center;
`