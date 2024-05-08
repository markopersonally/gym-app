import {
  Section,
  H2,
  Wrapper,
  BoxPanel,
  BoxPanelItem,
} from "./SectionSmallPanelStyled.jsx";

export default function SectionSmallPanel() {
  return (
    <Section>
      <Wrapper>
        <H2>
          We pride ourselves on being one of the best gyms around, and here you
          can see how many clients we have.
        </H2>
        <BoxPanel>
          <BoxPanelItem>
            <span>4502+</span>
            <span>members</span>
          </BoxPanelItem>
          <BoxPanelItem>
            <span>10</span>
            <span>branches</span>
          </BoxPanelItem>
          <BoxPanelItem>
            <span>9.3/10</span>
            <span>total rating</span>
          </BoxPanelItem>
        </BoxPanel>
      </Wrapper>
    </Section>
  );
}
