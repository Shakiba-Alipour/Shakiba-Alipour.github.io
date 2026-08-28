import { socialLinks } from "../../data/socials";

export default function SocialAccounts({ styles = "" }) {
  return (
    <div
      className={`animate-fade-up delay-500 flex items-center gap-3
                                justify-center md:justify-start ${styles}`}
    >
      {socialLinks.map((account) => {
        const Icon = account.icon;
        return (
          <a
            href={account.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-700
                               transition-colors duration-200 text-xl font-medium"
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}
