const externalBase = "https://kehulum.com";

const subjects = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "English",
  "Amharic",
  "Geography",
  "History",
  "Economics",
  "Agriculture",
  "Information Technology",
];

const examYears = ["2015", "2016", "2017", "2018"];

const upperGrades = [10, 11, 12];

function Icon({ name }: { name: "book" | "exam" | "guide" | "search" | "arrow" }) {
  if (name === "search") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" />
        <path d="m16 16 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "arrow") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (name === "exam") {
    return (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7 3h7l4 4v14H7V3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M14 3v5h5M10 12h5M10 16h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "guide") {
    return (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4H6.5A2.5 2.5 0 0 0 4 6.5v13Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M8 8h8M8 12h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14Zm0 0A2.5 2.5 0 0 0 6.5 22H20v-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CategoryCard({
  title,
  description,
  href,
  icon,
  accent,
}: {
  title: string;
  description: string;
  href: string;
  icon: "book" | "exam" | "guide";
  accent: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: "block", background: "#fff", border: "1px solid #e8edf5", borderRadius: 20, padding: 22, textDecoration: "none", color: "inherit", boxShadow: "0 10px 32px rgba(24,43,77,.06)" }}
    >
      <div style={{ width: 54, height: 54, borderRadius: 16, display: "grid", placeItems: "center", color: accent, background: `${accent}14`, marginBottom: 18 }}>
        <Icon name={icon} />
      </div>
      <h3 style={{ margin: "0 0 8px", color: "#17253d", fontSize: 20 }}>{title}</h3>
      <p style={{ margin: "0 0 18px", minHeight: 44, color: "#718096", lineHeight: 1.55 }}>{description}</p>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 7, color: accent, fontWeight: 800 }}>
        Explore <Icon name="arrow" />
      </span>
    </a>
  );
}

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#f7f9fc", color: "#17253d", fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif' }}>
      <nav style={{ height: 72, background: "rgba(255,255,255,.97)", borderBottom: "1px solid #e8edf4", display: "flex", alignItems: "center", position: "sticky", top: 0, zIndex: 20 }}>
        <div style={{ width: "min(1180px, calc(100% - 40px))", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
          <a href="#top" style={{ display: "flex", alignItems: "center", gap: 9, color: "#172449", textDecoration: "none", fontWeight: 950, fontSize: 21, letterSpacing: "-.02em" }}>
            <span style={{ width: 38, height: 38, borderRadius: 12, display: "grid", placeItems: "center", color: "#fff", background: "#172449" }}><Icon name="book" /></span>
            Ethio<span style={{ color: "#1fa68a", marginLeft: -7 }}>Entrance</span>
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: 24, fontSize: 14 }}>
            <a href="#resources" style={{ color: "#5d6b82", textDecoration: "none", fontWeight: 700 }}>Resources</a>
            <a href="#subjects" style={{ color: "#5d6b82", textDecoration: "none", fontWeight: 700 }}>Subjects</a>
            <a href="#exams" style={{ color: "#5d6b82", textDecoration: "none", fontWeight: 700 }}>Previous Exams</a>
            <a href={`${externalBase}/textbook`} target="_blank" rel="noopener noreferrer" style={{ height: 42, display: "flex", alignItems: "center", gap: 8, borderRadius: 12, padding: "0 17px", background: "#172449", color: "#fff", textDecoration: "none", fontWeight: 850 }}>Get Started <Icon name="arrow" /></a>
          </div>
        </div>
      </nav>

      <section id="top" style={{ background: "#f8fafc", borderBottom: "1px solid #e6ebf2", padding: "58px 20px 54px" }}>
        <div style={{ maxWidth: 1180, minHeight: 410, margin: "0 auto", display: "grid", gridTemplateColumns: "1.12fr .88fr", gap: 46, alignItems: "center" }}>
          <div>
            <div style={{ color: "#1ca587", fontSize: 12, fontWeight: 900, letterSpacing: ".16em", textTransform: "uppercase", marginBottom: 18 }}>ETHIOPIAN EDUCATION RESOURCE PLATFORM</div>
            <h1 style={{ maxWidth: 680, margin: 0, fontSize: "clamp(48px,6.8vw,78px)", lineHeight: .98, letterSpacing: "-.065em", color: "#172449" }}>
              Your upper-school <span style={{ color: "#1b58c6" }}>learning companion.</span>
            </h1>
            <p style={{ maxWidth: 650, margin: "22px 0 28px", color: "#66748a", fontSize: 17, lineHeight: 1.72 }}>
              Textbooks, teacher guides, subjects, and entrance exam papers for Grades 10–12—organized for focused preparation and easy access.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#resources" style={{ height: 50, display: "flex", alignItems: "center", gap: 9, borderRadius: 12, padding: "0 20px", background: "#172449", color: "#fff", textDecoration: "none", fontWeight: 850 }}>Explore resources <Icon name="arrow" /></a>
              <a href={`${externalBase}/entrance-exam`} target="_blank" rel="noopener noreferrer" style={{ height: 50, display: "flex", alignItems: "center", gap: 9, borderRadius: 12, padding: "0 20px", border: "1px solid #dce3ed", background: "#fff", color: "#172449", textDecoration: "none", fontWeight: 850 }}>View previous exams</a>
            </div>
          </div>

          <div style={{ minHeight: 410, borderRadius: 24, border: "1px solid #dfe6ef", background: "linear-gradient(145deg,#eaf1fc,#f7fafc)", position: "relative", overflow: "hidden", display: "grid", placeItems: "center" }}>
            <div style={{ width: "78%", minHeight: 270, borderRadius: 20, background: "#172449", boxShadow: "0 28px 55px rgba(23,36,73,.22)", padding: 30, color: "#fff", transform: "rotate(-2deg)", zIndex: 2 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#67d3bd", fontWeight: 900, letterSpacing: ".12em", fontSize: 11 }}>ETHIOENTRANCE</span>
                <span style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(255,255,255,.1)", display: "grid", placeItems: "center" }}><Icon name="book" /></span>
              </div>
              <strong style={{ display: "block", marginTop: 54, fontSize: 31, lineHeight: 1.12 }}>Learn today.<br />Lead tomorrow.</strong>
              <div style={{ display: "flex", gap: 8, marginTop: 26 }}>{[10,11,12].map((grade) => <span key={grade} style={{ border: "1px solid rgba(255,255,255,.14)", borderRadius: 999, padding: "7px 10px", color: "#dce6f7", fontSize: 12, fontWeight: 800 }}>Grade {grade}</span>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="resources" style={{ maxWidth: 1120, margin: "0 auto", padding: "58px 20px" }}>
        <div style={{ marginBottom: 22 }}>
          <span style={{ color: "#3478f6", fontWeight: 800, fontSize: 13, letterSpacing: ".1em", textTransform: "uppercase" }}>Study resources</span>
          <h2 style={{ margin: "7px 0 0", fontSize: 34 }}>Choose a resource</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,230px),1fr))", gap: 16 }}>
          <CategoryCard title="Student Textbooks" description="Download subject textbooks for Grade 10, 11, and 12." href={`${externalBase}/textbook`} icon="book" accent="#3478f6" />
          <CategoryCard title="Teacher Guides" description="Open the Grade 10, 11, and 12 teacher guide collections." href={`${externalBase}/teachers-guide/new`} icon="guide" accent="#e18a20" />
          <CategoryCard title="Previous Exams" description="Access Ethiopian university entrance exam papers by year." href={`${externalBase}/entrance-exam`} icon="exam" accent="#15966f" />
          <CategoryCard title="Entrance Practice" description="Prepare with model exams and EUEE practice resources." href={`${externalBase}/ethio-exam/entrance-model-exams`} icon="exam" accent="#8066c8" />
        </div>
      </section>

      <section id="subjects" style={{ background: "#fff", borderTop: "1px solid #edf0f5", borderBottom: "1px solid #edf0f5" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "58px 20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 20, marginBottom: 22 }}>
            <div>
              <span style={{ color: "#3478f6", fontWeight: 800, fontSize: 13, letterSpacing: ".1em", textTransform: "uppercase" }}>Browse by subject</span>
              <h2 style={{ margin: "7px 0 0", fontSize: 34 }}>Popular subjects</h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,155px),1fr))", gap: 12 }}>
            {subjects.map((subject, index) => (
              <a
                key={subject}
                href={`${externalBase}/student-textbook/new/grade-${upperGrades[index % upperGrades.length]}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ minHeight: 72, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, background: "#f8fafc", border: "1px solid #edf0f5", borderRadius: 14, padding: "14px 15px", color: "#526178", textDecoration: "none", fontWeight: 800 }}
              >
                <span>{subject}</span>
                <Icon name="arrow" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="exams" style={{ maxWidth: 1120, margin: "0 auto", padding: "58px 20px 64px" }}>
        <div style={{ marginBottom: 22 }}>
          <span style={{ color: "#15966f", fontWeight: 800, fontSize: 13, letterSpacing: ".1em", textTransform: "uppercase" }}>Exam archive</span>
          <h2 style={{ margin: "7px 0 0", fontSize: 34 }}>Previous entrance exams</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,190px),1fr))", gap: 14 }}>
          {examYears.map((year) => (
            <article key={year} style={{ background: "#fff", border: "1px solid #e8edf5", borderRadius: 18, padding: 18, boxShadow: "0 8px 24px rgba(24,43,77,.04)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                <strong style={{ fontSize: 22 }}>{year} E.C.</strong>
                <div style={{ color: "#15966f" }}>
                  <Icon name="exam" />
                </div>
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {year === "2018" ? (
                  <span style={{ flex: 1, textAlign: "center", background: "#eef1f5", color: "#8b96a7", borderRadius: 9, padding: "9px 7px", fontSize: 12, fontWeight: 850 }}>Unavailable</span>
                ) : (
                  <a
                    href={`${externalBase}/entrance-exam/natural-science/${year}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ flex: 1, textAlign: "center", background: "#edf8f4", color: "#187859", borderRadius: 9, padding: "9px 7px", textDecoration: "none", fontSize: 12, fontWeight: 850 }}
                  >Natural</a>
                )}
                <a
                  href={`${externalBase}/entrance-exam/social-science/${year}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ flex: 1, textAlign: "center", background: "#fff4df", color: "#b86e13", borderRadius: 9, padding: "9px 8px", textDecoration: "none", fontSize: 12, fontWeight: 800 }}
                >
                  Social
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer style={{ background: "#17253d", color: "#fff", padding: "30px 20px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <strong>EthioEntrance</strong>
          <a href={`${externalBase}/textbook`} target="_blank" rel="noopener noreferrer" style={{ color: "#bfcbe0", textDecoration: "none" }}>
            Educational resources provided by Kehulum
          </a>
        </div>
      </footer>
    </main>
  );
}
