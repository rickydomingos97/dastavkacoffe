import { NavLink } from "react-router-dom";
import { Button } from "../../../../components/Button";
import { RegularText } from "../../../Home/components/typography";
import { ConfirmationSectionContainer } from "./styles";

export function ConfirmationSection() {
  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText >$ 9.90</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText >$ 4.90</RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="l">Total</RegularText>
        <RegularText weight="700" color="subtitle" size="l">$ 35,90</RegularText>
      </div>

      <NavLink to="/orderConfirmed">
        <Button text="Confirmar Pedido" />
      </NavLink>


    </ConfirmationSectionContainer>
  )
}