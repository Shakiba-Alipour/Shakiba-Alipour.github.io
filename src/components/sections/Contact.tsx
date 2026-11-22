import SectionTitle from "../ui/SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 mx-auto max-w-6xl px-6">
      <SectionTitle tag={"contact"} title={"Let's build something together."} />
      <div className="max-w-3xl">
        <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
          Have a project, opportunity, or idea you'd like to discuss? I'd love
          to hear from you.
        </p>

        <a
          href="mailto:hello@shakiba.dev"
          className="mt-10 inline-block text-xl font-medium text-primary transition-colors duration-200 hover:text-primary-700 sm:text-2xl"
        >
          hello@shakiba.dev
        </a>
      </div>
    </section>
  );
}
