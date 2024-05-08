import { Button } from "./SectionMembershipStyled.jsx";

export default function Buttons({ children, isSelected, ...props }) {
  return (
    <li>
      <Button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </Button>
    </li>
  );
}
