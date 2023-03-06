import { coffees } from "../../../../data/coffees";
import { CoffeeCard } from "../CoffeeCard";
import { TitleText } from "../typography";
import { CoffeeList, OurCoffeesContainer } from "./styles";

export function OurCoffees() {
  return (
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle">
        Our coffees
      </TitleText>
      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee}/>
        ))}
          
      </CoffeeList>
    </OurCoffeesContainer>
  )
}