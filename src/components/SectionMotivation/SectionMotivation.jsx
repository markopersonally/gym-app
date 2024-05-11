import { useState } from "react";
import Buttons from "./Buttons";
import {
  ContainerUl,
  Wrapper,
  Icon,
  Paragrafh,
} from "./SectionMotivationStyled.jsx";
import { OPTIONS } from "../../data.js";

export default function SectionMotivation() {
  const [selectedOption, setSelectedButton] = useState();

  const handleSelect = (selectedButton) => {
    setSelectedButton(selectedButton);
  };

  let btnContent = <Paragrafh>See more info, please!</Paragrafh>;

  if (selectedOption) {
    btnContent = (
      <Wrapper>
        <Icon
          src={OPTIONS[selectedOption].icon}
          alt={OPTIONS[selectedOption].ialt}
        />
        <h3>{OPTIONS[selectedOption].quote}</h3>
        <h4>{OPTIONS[selectedOption].title}</h4>
      </Wrapper>
    );
  }

  return (
    <section>
      <ContainerUl>
        <Buttons
          isSelected={selectedOption === "first"}
          onClick={() => handleSelect("first")}
        >
          Gym
        </Buttons>
        <Buttons
          isSelected={selectedOption === "second"}
          onClick={() => handleSelect("second")}
        >
          Workout
        </Buttons>
        <Buttons
          isSelected={selectedOption === "third"}
          onClick={() => handleSelect("third")}
        >
          Strength
        </Buttons>
        <Buttons
          isSelected={selectedOption === "fourth"}
          onClick={() => handleSelect("fourth")}
        >
          Fitness
        </Buttons>
      </ContainerUl>
      {btnContent}
    </section>
  );
}
