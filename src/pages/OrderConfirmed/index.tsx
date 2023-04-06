import { RegularText, TitleText } from "../Home/components/typography";
import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";
import confirmedOrder from "../../assets/confirmedOrder.svg"

export function OrderConfirmedPage() {
  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Obaaa! Pedido realizado com sucesso!</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é so aguardar que logo o seu café vai chegar até você! </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <p>oioioi</p>
        </OrderDetailsContainer>

        <img src={confirmedOrder} alt="confirmedOrder" />
      </section>
    </OrderConfirmedContainer>
  )
}