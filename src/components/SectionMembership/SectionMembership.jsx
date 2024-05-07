import Buttons from "./Buttons";
import { H2, ContainerUl } from "./SectionMembershipStyled.jsx";

export default function SectionMembership() {
  return (
    <section>
      <H2>Membership</H2>
      <ContainerUl>
        <Buttons>one day</Buttons>
        <Buttons>one month</Buttons>
        <Buttons>three months </Buttons>
        <Buttons>one year</Buttons>
      </ContainerUl>
      CONTENT
    </section>
  );
}
