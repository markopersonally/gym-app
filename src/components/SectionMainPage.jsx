import { useState } from "react";
import { Section, Button, Form, Label } from "./StyledComponents";

export default function SectionMainPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [btnNone, setBtnNone] = useState(true);

  function handleOpenClick() {
    setIsVisible(true) && setBtnNone(false);
  }
  return (
    <Section>
      <Button
        style={{ display: btnNone ? "block" : "none" }}
        className="open"
        onClick={handleOpenClick}
      >
        join us
      </Button>
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
    </Section>
  );
}
