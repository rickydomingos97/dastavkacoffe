import { ReactNode } from "react";
import { SectionTitleContainer } from "./styles";
import { RegularText } from "../../../Home/components/typography";

interface SectionTitleProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
}

export function SectionTitle({ title, subtitle, icon }: SectionTitleProps) {
  return (
    <SectionTitleContainer>
      {icon}
      <div>
<RegularText color="subtitle">
  {title}
</RegularText>
<RegularText size="s" color="label">
  {subtitle}
</RegularText>
        
      </div>
    </SectionTitleContainer>
  )
}