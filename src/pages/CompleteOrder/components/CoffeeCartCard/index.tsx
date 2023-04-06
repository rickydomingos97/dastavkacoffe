import { RegularText } from "../../../Home/components/typography";
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";
import { QuantityInput } from '../../../../components/QuantityInput/index';
import { Trash } from "phosphor-react";

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src="../../../public/coffees/arabe.svg" alt="" />

        <div>
          <RegularText color="subtitle">Espresso Tradicional</RegularText>
          <ActionsContainer>
            <QuantityInput size="small"/>
            <RemoveButton>
              <Trash size={16} />REMOVER</RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>$ 11.90</p>
    </CoffeeCartCardContainer>
  )
}