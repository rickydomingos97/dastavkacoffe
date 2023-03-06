import { BenefitsContainer, IntroContainer, IntroContent, IntroTitle } from "./styles";

import introImg from '../../../../assets/cafeHero.svg'
import { RegularText } from "../typography";
import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import { useTheme } from "styled-components";

export function Intro() {
  //Hook
  const { colors } = useTheme();
  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Find the perfect coffee for any time of day
            </IntroTitle>
            <RegularText size="l" color="subtitle" as="h3">
              With Coffee Delivery you get your coffee wherever you are, anytime
            </RegularText>
          </section>

          <BenefitsContainer>
            <InfoWithIcon
              iconBg={colors["brand-yellow-dark"]}
              icon={<ShoppingCart weight="fill" size="32"/>}
              text="Simple and safe purchase"
            />
            <InfoWithIcon
              iconBg={colors["base-text"]}
              icon={<Package weight="fill" size="32" />}
              text="Packaging keeps coffee intact"
            />
            <InfoWithIcon
              iconBg={colors["brand-yellow"]}
              icon={<Timer weight="fill" size="32" />}
              text="Fast and tracked delivery"
            />
            <InfoWithIcon
              iconBg={colors["brand-purple"]}
              icon={<Coffee weight="fill" size="32" />}
              text="Coffee comes to you fresh"
            />
          </BenefitsContainer>
        </div>

        <img src={introImg} alt="" />

      </IntroContent>
    </IntroContainer>
  )
}