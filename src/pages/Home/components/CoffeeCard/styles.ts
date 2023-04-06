import styled from "styled-components";
import { App } from '../../../../App';
import { InfoWithIcon } from '../../../../components/InfoWithIcon/index';
import { RegularText, TitleText } from '../typography';
import { CompleteOrderPage } from '../../../CompleteOrder/index';

export const CoffeeCardContainer = styled.div`
  
  background: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 2rem;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  margin-bottom: 2rem;

  text-align: center;
  
  padding-top: 0;

  //width: 16rem;
  //height: 19rem;

  bottom: 2.5rem;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  };
`

export const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .25rem;
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;

  span {
    background: ${({ theme }) => theme.colors["brand-yellow-light"]};
    color: ${({ theme }) => theme.colors["brand-yellow-dark"]};

    font-size: ${({ theme }) => theme.textSizes["components-tag"]};
    text-transform: uppercase;
    padding: .25rem .5rem;
    border-radius: 999px;
    font-weight: 700;

  }
`;

export const Name = styled(TitleText).attrs({
  size: "s",
  color: "subtitle",
  weight: "700",
})`
  margin-bottom: .5rem;
  text-align: center;
`

export const Description = styled(RegularText).attrs({
  size: "s",
  text: "subtitle",
  color: "label"
})`
  margin-bottom: 4rem;
`

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1.5rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;

    p {
      line-height: .75rem;
    }

  }
`

export const AddCartWrapper = styled.div`
  width: 7.5rem;
  
  > button {
    width: 2.375rem;
    height: 2.375rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme}) => theme.colors["brand-purple-dark"]};
    color: ${({ theme }) => theme.colors["base-card"]};
    border-radius: 6px;
    margin-left: 0.3rem;
    transition: 0.4s;

    &:hover {
      background: ${({ theme}) => theme.colors["brand-purple"]};
    }
  }
`