import { FooterContainer, FooterInfo, Paragraph } from "./FooterStyled.jsx";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterInfo>
        <div>
          <h3>Opening Hours</h3>
          <ul>
            <li>Monday - Friday: 6:00 AM - 10:00 PM</li>
            <li>Saturday: 8:00 AM - 8:00 PM</li>
            <li>Sunday: 10:00 AM - 6:00 PM</li>
          </ul>
        </div>
        <div>
          <p>Phone: +98476352</p>
          <p>Email: contact@gymfox.com</p>
          <p>Address: Street: Jark Phra Khanong, 10260 Thailand</p>
        </div>
      </FooterInfo>
      <Paragraph>© 2024 Gymfox Gym. All rights reserved.</Paragraph>
    </FooterContainer>
  );
}
