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
    <div className="flex flex-row items-center my-4">
      <a
        className="flex flex-row items-center cursor-pointer mt-0.5"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      ></a>
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
    </div>
  );
}
