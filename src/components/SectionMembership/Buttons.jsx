import { Button } from "../StyledComponents.jsx";

export default function Buttons({ children, ...props }) {
  return (
    <li>
      <Button {...props}>{children}</Button>
    </li>
  );
}
