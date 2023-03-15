import { TitleText } from "../../../Home/components/typography";
import { SectionTitle } from "../SectionTitle";
import { CompleteOrderFormContainer, FormSectionContainer } from "./styles";
import { MapPinLine } from 'phosphor-react';
import { useTheme } from 'styled-components';

export function CompleteOrderForm() {
  const { colors } = useTheme();
  return (
    <CompleteOrderFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete o seu pedido
      </TitleText>
      <FormSectionContainer>
        <SectionTitle
          title="Endereço de entrega"
          subtitle={"Informe o endereço que deseja receber o seu pedido"}
          icon={<MapPinLine color={colors["brand-yellow-dark"]}
          size={22}
          />}
        />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  )
}