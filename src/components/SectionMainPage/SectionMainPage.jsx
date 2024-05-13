import { useState } from "react";
import {
  Section,
  Shadow,
  DivTitle,
  H1Style,
  Button,
  Form,
  Label,
  H2Style,
  FormTitle,
  Input,
} from "./SectionMainPageStyled.jsx";

export default function SectionMainPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [btnNone, setBtnNone] = useState(true);

  function handleOpenClick() {
    setIsVisible(true) && setBtnNone(false);
  }

  return (
    <Section id="home">
      <Shadow />
      <DivTitle>
        <H1Style>welcome to gym fox!🏋️</H1Style>
        <Button
          style={{ display: btnNone ? "block" : "none" }}
          className="open"
          onClick={handleOpenClick}
        >
          join us &gt;
        </Button>
      </DivTitle>
      <H2Style>"As long as you fight, you are a winner." St. Augustine</H2Style>
      <div style={{ display: isVisible ? "block" : "none" }}>
        <Form>
          <FormTitle>
            <h3>🎗 Join our team! 🎗</h3>
            <Button
              className="close"
              onClick={() => setIsVisible() && setBtnNone(true)}
            >
              X
            </Button>
          </FormTitle>
          <Label>username:</Label>
          <Input type="text" placeholder="Write your nickname..." />
          <Label>password:</Label>
          <Input type="password" placeholder="Write your password..." />
          <Button className="send">Send</Button>
        </Form>
      </div>
    </Section>
  );
}
