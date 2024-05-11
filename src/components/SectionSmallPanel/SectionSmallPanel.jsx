import {
  H2,
  Wrapper,
  BoxPanel,
  BoxPanelItem,
} from "./SectionSmallPanelStyled.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function SectionSmallPanel() {
  return (
    <section>
      <Wrapper>
        <H2>
          We pride ourselves on being one of the best gyms around, and here you
          can see how many clients we have.
        </H2>
        <BoxPanel>
          <BoxPanelItem data-aos="zoom-in" data-aos-duration="2000">
            <span>4502+</span>
            <span>members</span>
          </BoxPanelItem>
          <BoxPanelItem data-aos="zoom-in" data-aos-duration="2000">
            <span>10</span>
            <span>branches</span>
          </BoxPanelItem>
          <BoxPanelItem data-aos="zoom-in" data-aos-duration="2000">
            <span>9.3/10</span>
            <span>total rating</span>
          </BoxPanelItem>
        </BoxPanel>
      </Wrapper>
    </section>
  );
}
