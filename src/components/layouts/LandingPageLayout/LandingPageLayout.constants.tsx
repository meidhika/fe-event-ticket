import { hr } from "framer-motion/client";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

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

const SOCIAL_ITEMS = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: <FaFacebook />,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: <FaInstagram />,
  },
  {
    label: "Tiktok",
    href: "https://tiktok.com",
    icon: <FaTiktok />,
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: <FaTwitter />,
  },
  {
    label: "Youtube",
    href: "https://youtube.com",
    icon: <FaYoutube />,
  },
];

export { NAV_ITEMS, BUTTON_ITEMS, SOCIAL_ITEMS };
