// ------------------------------------------------------------
// Social Accounts
// ------------------------------------------------------------

import type { SocialLink } from "../types";
import { siteConfig } from "./siteConfig";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const socialLinks: SocialLink[] = [
  { label: "GitHub", icon: FaGithub, href: siteConfig.github },
  { label: "LinkedIn", icon: FaLinkedinIn, href: siteConfig.linkedin },
];
