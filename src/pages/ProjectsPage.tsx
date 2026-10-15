import { useSearchParams } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import { featuredProject, projects, type Project } from "../data/projects";

function matches(project: Project, query: string) {
  const haystack = [project.title, project.category, project.description, ...project.tags]
    .join(" ")
    .toLowerCase();
  return haystack.includes(query);
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="project-tags">
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}

export default function ProjectsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = (searchParams.get("q") ?? "").trim().toLowerCase();

  const showFeatured = !query || matches(featuredProject, query);
  const visibleProjects = query ? projects.filter((p) => matches(p, query)) : projects;

  return (
    <PageLayout>
      <header className="sub-page-header">
        <h1 className="sub-page-title">Projects</h1>
        <p className="sub-page-lead">
          Websites, dashboards, and full-stack systems I've designed and built.
        </p>
        {query && (
          <p className="search-status">
            Showing results for "{searchParams.get("q")}"{" "}
            <button type="button" className="link-btn" onClick={() => setSearchParams({})}>
              Clear
            </button>
          </p>
        )}
      </header>

      {showFeatured && (
        <section className="featured-project">
          {featuredProject.screenshot && (
            <img
              src={featuredProject.screenshot}
              alt={`${featuredProject.title} screenshot`}
              className="featured-shot"
              loading="lazy"
            />
          )}
          <div className="featured-body">
            <p className="project-category">Featured · {featuredProject.category}</p>
            <h2 className="project-title">{featuredProject.title}</h2>
            <p className="project-text">{featuredProject.description}</p>
            <p className="project-text">
              <span className="glow-icon">{">"}</span> {featuredProject.role}
            </p>
            <ul className="featured-highlights">
              {featuredProject.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Tags tags={featuredProject.integrations} />
            <a
              href={featuredProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Visit site
            </a>
          </div>
        </section>
      )}

      <section className="project-grid">
        {visibleProjects.map((project) => (
          <article key={project.title} className="project-card">
            {project.screenshot && (
              <img
                src={project.screenshot}
                alt={`${project.title} screenshot`}
                className="project-shot"
                loading="lazy"
              />
            )}
            <div className="project-card-body">
              <p className="project-category">{project.category}</p>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-text">{project.description}</p>
              <Tags tags={project.tags} />
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Visit site
              </a>
            </div>
          </article>
        ))}
      </section>

      {!showFeatured && visibleProjects.length === 0 && (
        <p className="search-status">No projects match that search.</p>
      )}
    </PageLayout>
  );
}
