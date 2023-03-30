import { PaymentMethodInput } from "../PaymentMethodInput";
import { PaymentMethodOptionsContainer } from "./styles";

export function PaymentMethodOptions() {
  return (
    <div>
      <PaymentMethodOptionsContainer>
        <PaymentMethodInput />
        <PaymentMethodInput />
        <PaymentMethodInput />

      </PaymentMethodOptionsContainer>
      
    </div>
  )
}