import { hr } from "framer-motion/client";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Explore",
    href: "/event",
  },
];

const BUTTON_ITEMS = [
  {
    label: "LOGIN",
    href: "/auth/login",
    variant: "solid",
  },
  {
    label: "REGISTER",
    href: "/auth/register",
    variant: "bordered",
  },
];

export { NAV_ITEMS, BUTTON_ITEMS };
