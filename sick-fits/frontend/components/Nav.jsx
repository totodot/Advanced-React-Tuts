import Link from "next/link";
import NavStyles from "./styles/NavStyles";

const links = [
  {
    name: "items",
    path: "/items"
  },
  {
    name: "sell",
    path: "/sell"
  },
  {
    name: "signup",
    path: "/signup"
  },
  {
    name: "orders",
    path: "/orders"
  },
  {
    name: "me",
    path: "/me"
  }
];

const Nav = () => (
  <NavStyles>
    {links.map(({ name, path }) => (
      <Link href={path}>
        <a>{name}</a>
      </Link>
    ))}
  </NavStyles>
);

export default Nav;
