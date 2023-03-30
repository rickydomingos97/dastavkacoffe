import { InputStyledContainer } from "./styles";
import { InputHTMLAttributes } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement>
//passando todos os atributos de input para o componente vindo do react

export function Input({ ...props }: InputProps) {
  return (
    <InputStyledContainer {...props} />
  )
}