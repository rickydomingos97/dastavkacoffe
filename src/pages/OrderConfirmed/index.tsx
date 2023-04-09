import { RegularText, TitleText } from "../Home/components/typography";
import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";
import confirmedOrder from "../../assets/confirmedOrder.svg"
import { MapPin, Clock, CurrencyDollar } from "phosphor-react";
import { InfoWithIcon } from '../../components/InfoWithIcon/index';
import { useTheme } from 'styled-components';

export function OrderConfirmedPage() {
  const { colors } = useTheme();

  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Obaaa! Pedido realizado com sucesso!</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é so aguardar que logo o seu café vai chegar até você! </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" size={24} />}
            text={
              <RegularText>
                Entrega em <strong>Rua do Limoeiro, 1212</strong>
                <br />
                Bairro do Limao - Sao Paulo - SP
              </RegularText>
            }
            iconBg={colors["brand-purple"]} />

          <InfoWithIcon
            icon={<Clock weight="fill" size={24} />}
            text={
              <RegularText>
                Previsao de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
            iconBg={colors["brand-yellow"]} />

          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" size={24} />}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>Cartao de Credito</strong>
              </RegularText>
            }
            iconBg={colors["brand-yellow-dark"]} />
        </OrderDetailsContainer>

        <img src={confirmedOrder} alt="confirmedOrder" />
      </section>
    </OrderConfirmedContainer>
  )
}