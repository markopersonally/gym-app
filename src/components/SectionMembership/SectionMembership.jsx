import { useState } from "react";
import Buttons from "./Buttons";
import {
  H2,
  ContainerUl,
  Wrapper,
  WrapperImg,
  Paragrafh,
} from "./SectionMembershipStyled.jsx";
import { MEMBERSHIP_OPTIONS } from "../../data.js";

export default function SectionMembership() {
  const [selectedOption, setSelectedButton] = useState();

  const handleSelect = (selectedButton) => {
    setSelectedButton(selectedButton);
  };

  let btnContent = <Paragrafh>See our membership offer, please!</Paragrafh>;

  if (selectedOption) {
    btnContent = (
      <Wrapper>
        <WrapperImg
          src={MEMBERSHIP_OPTIONS[selectedOption].image}
          alt={MEMBERSHIP_OPTIONS[selectedOption].title}
        />
        <h3>{MEMBERSHIP_OPTIONS[selectedOption].title}</h3>
        <h4>{MEMBERSHIP_OPTIONS[selectedOption].price}</h4>
      </Wrapper>
    );
  }

  return (
    <section id="membership">
      <H2>Membership</H2>
      <ContainerUl>
        <Buttons
          isSelected={selectedOption === "oneDay"}
          onClick={() => handleSelect("oneDay")}
        >
          one day
        </Buttons>
        <Buttons
          isSelected={selectedOption === "month"}
          onClick={() => handleSelect("month")}
        >
          one month
        </Buttons>
        <Buttons
          isSelected={selectedOption === "threeMonths"}
          onClick={() => handleSelect("threeMonths")}
        >
          three months{" "}
        </Buttons>
        <Buttons
          isSelected={selectedOption === "oneYear"}
          onClick={() => handleSelect("oneYear")}
        >
          one year
        </Buttons>
      </ContainerUl>
      {btnContent}
    </section>
  );
}
