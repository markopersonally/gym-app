import { H2, Container, ContainerItem, Icon } from "./SectionContactStyled.jsx";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephoneForwardFill } from "react-icons/bs";

export default function SectionContact() {
  return (
    <section id="contact">
      <H2>contact</H2>
      <Container>
        <ContainerItem>
          <Icon>
            <FaInstagram />
          </Icon>
          <h4>instagram</h4>
          <h4>@gymfox</h4>
        </ContainerItem>
        <ContainerItem>
          <Icon>
            <HiOutlineMail />
          </Icon>
          <h4>Email</h4>
          <h4>contact@gymfox.com</h4>
        </ContainerItem>
        <ContainerItem>
          <Icon>
            <BsTelephoneForwardFill />
          </Icon>
          <h4>telephone</h4>
          <h4>+98476352</h4>
        </ContainerItem>
      </Container>
    </section>
  );
}
