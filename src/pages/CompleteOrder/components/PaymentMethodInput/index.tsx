import { PaymentMethodInputContainer } from "./styles";
import { CreditCard } from "phosphor-react";

export function PaymentMethodInput() {
  return (
      <PaymentMethodInputContainer>
        <CreditCard size={22} />
        cartao de debito
      </PaymentMethodInputContainer>
  )
}