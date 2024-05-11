import { H2, Paragraph, Container,Photo } from "./SectionAboutStyled.jsx";


export default function SectionAbout() {
  return (
    <section id="about">
      <H2>about us</H2>
      <Container>
        <Paragraph>
          Our gym traces its roots all the way back to the year 2000, when we
          began our journey from a humble garage. Since then, we have come a
          long way, expanding and enhancing our offerings. Today, with 10
          branches and further development plans, we continue our mission of
          creating an inspiring environment for all our clients. Join our
          success story and achieve your fitness goals!
        </Paragraph>
        <Photo></Photo>
      </Container>
    </section>
  );
}
