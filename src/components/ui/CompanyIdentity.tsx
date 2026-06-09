interface CompanyIdentityProps {
  logo: string;
  name: string;
  location: string;
  url?: string;
}

export default function CompanyIdentity({
  logo,
  name,
  location,
  url,
}: CompanyIdentityProps) {
  return (
    <a
      className="flex flex-row items-center my-2 cursor-pointer"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={logo}
        alt={`${name} logo`}
        className="h-10 w-auto mr-2 object-contain"
      />
      <p className="text-text-secondary font-medium mt-0.5">
        {name}
        <span className="text-text-muted font-normal">
          {" · "}
          {location}
        </span>
      </p>
    </a>
  );
}
