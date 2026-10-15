import PageLayout from "../components/PageLayout";

const EMAIL = "Andrewbondad124@gmail.com";

const channels = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { label: "GitHub", value: "github.com/vincenzohashiro", href: "https://github.com/vincenzohashiro" },
  {
    label: "Resume",
    value: "Download PDF",
    href: `${import.meta.env.BASE_URL}files/Vincent_Mangalili_ATS_Resume.pdf`,
  },
];

export default function ContactPage() {
  return (
    <PageLayout>
      <header className="sub-page-header">
        <h1 className="sub-page-title">Contact</h1>
        <p className="sub-page-lead">
          Need a website, a dashboard, or a workflow automated? Send me a message and I'll get back to
          you.
        </p>
      </header>

      <section className="contact-card">
        <ul className="contact-list">
          {channels.map((channel) => (
            <li key={channel.label}>
              <span className="matrix-title">{channel.label}</span>
              <a
                href={channel.href}
                target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="contact-value"
              >
                {channel.value}
              </a>
            </li>
          ))}
        </ul>
        <a href={`mailto:${EMAIL}`} className="project-link contact-cta">
          Send an email
        </a>
      </section>
    </PageLayout>
  );
}
