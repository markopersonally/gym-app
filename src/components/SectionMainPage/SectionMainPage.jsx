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
} from "./SectionMainPageStyled.jsx";

export default function SectionMainPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [btnNone, setBtnNone] = useState(true);

  function handleOpenClick() {
    setIsVisible(true) && setBtnNone(false);
  }
  return (
    <Section id="home">
      <Shadow>
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
        <H2Style>
          "As long as you fight, you are a winner." St. Augustine
        </H2Style>
        <div style={{ display: isVisible ? "block" : "none" }}>
          <Form>
            <Button
              className="close"
              onClick={() => setIsVisible() && setBtnNone(true)}
            >
              X
            </Button>
            <Label>username:</Label>
            <input type="text" />
            <Label>password:</Label>
            <input type="password" />
            <Button className="send">Send</Button>
          </Form>
        </div>
      </Shadow>
    </Section>
  );
}
