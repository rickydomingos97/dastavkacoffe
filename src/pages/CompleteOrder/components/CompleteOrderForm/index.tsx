import { TitleText } from "../../../Home/components/typography";
import { SectionTitle } from "../SectionTitle";
import { AddressForm } from "./AddressForm";
import { CompleteOrderFormContainer, FormSectionContainer } from "./styles";
import { CurrencyDollar, MapPinLine,  } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { PaymentMethodOptions } from "./PaymentMethodOptions";
import { SelectedCoffees } from "../SelectedCoffees";

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
        <AddressForm />
      </FormSectionContainer>

      <FormSectionContainer>
        <SectionTitle
          title="Pagamento"
          subtitle={"O pagamento é feito na entrega. Escolha a forma que deseja pagar"}
          icon={<CurrencyDollar color={colors["brand-purple-dark"]}
            size={22}
          />}
        />
        <PaymentMethodOptions />
      </FormSectionContainer>

    </CompleteOrderFormContainer>
  )
}