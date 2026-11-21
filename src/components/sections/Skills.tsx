import { useState } from "react";
import { skillGroups } from "../../data/skills";
import SectionTitle from "../ui/SectionTitle";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillGroups[0].category);

  const activeGroup = skillGroups.find(
    (group) => group.category === activeCategory,
  );

  return (
    <section id="skills" className="w-full py-24 sm:py-32">
      <div className="w-full max-w-6xl px-6">
        <SectionTitle tag={"skills"} title="Technologies I work with" />

        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-[220px_minmax(0,1fr)]">
          {/* Categories */}
          <nav className="grid w-full h-fit grid-cols-1 gap-1">
            {skillGroups.map((group) => {
              const isActive = group.category === activeCategory;

              return (
                <button
                  key={group.category}
                  type="button"
                  onClick={() => setActiveCategory(group.category)}
                  className={`w-full h-14 rounded-lg px-4 py-3 my-2 text-left text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-primary-700 text-white"
                      : "text-text-muted hover:bg-surface-100 hover:text-text-primary"
                  }`}
                >
                  {group.category}
                </button>
              );
            })}
          </nav>

          {/* Skills Panel */}
          <div className="w-max min-w-0 max-w-full overflow-hidden rounded-2xl border border-border bg-surface-50 p-6 sm:p-8">
            {activeGroup?.subcategories && (
              <div className="w-full min-w-0 space-y-8">
                {activeGroup.subcategories.map((subcategory) => (
                  <div key={subcategory.name} className="w-full min-w-0">
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-text-muted">
                      {subcategory.name}
                    </h3>

                    <div className="flex min-w-0 flex-wrap gap-3">
                      {subcategory.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className="max-w-full rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-text-secondary transition-colors duration-200 hover:border-border-strong hover:bg-surface-100 hover:text-primary"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
