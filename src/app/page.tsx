const skills = [
  "TypeScript / JavaScript",
  "React / Next.js",
  "Java / 数据工程",
  "Flink / 实时计算",
  "SQL / 数据仓库",
];

const projects = [
  {
    title: "项目一",
    desc: "用一两句话说明这个项目解决了什么问题、你负责什么。",
    tags: ["Next.js", "API"],
    href: "#",
  },
  {
    title: "项目二",
    desc: "可以写数据平台、工具链、开源贡献或 side project。",
    tags: ["Flink", "Kafka"],
    href: "#",
  },
  {
    title: "项目三",
    desc: "附上 GitHub 或线上 Demo 链接，方便访客进一步了解。",
    tags: ["React", "Tailwind"],
    href: "#",
  },
];

const navItems = [
  { label: "关于", href: "#about" },
  { label: "技能", href: "#skills" },
  { label: "项目", href: "#projects" },
  { label: "联系", href: "#contact" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[rgba(10,10,15,0.8)] backdrop-blur-md">
        <nav className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
          <a href="#" className="text-sm font-medium tracking-tight">
            你的名字
          </a>
          <ul className="flex gap-6 text-sm text-[var(--muted)]">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-[var(--foreground)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-6 pt-28 pb-20">
        <section className="mb-24">
          <p className="mb-3 text-sm font-medium text-[var(--accent)]">
            你好，我是
          </p>
          <h1 className="mb-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            你的名字
          </h1>
          <p className="mb-2 text-xl text-[var(--muted)] sm:text-2xl">
            数据工程 · 全栈开发
          </p>
          <p className="mt-6 max-w-xl leading-relaxed text-[var(--muted)]">
            热爱用代码解决实际问题。专注于数据平台、实时计算与 Web
            应用，喜欢把复杂系统做得清晰、可靠、好用。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              查看项目
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              联系我
            </a>
          </div>
        </section>

        <section id="about" className="mb-24 scroll-mt-20">
          <h2 className="mb-6 text-lg font-semibold">关于我</h2>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 leading-relaxed text-[var(--muted)]">
            <p className="mb-4">
              在这里写一段自我介绍：教育/工作背景、当前方向、你在团队里通常负责什么。
            </p>
            <p>
              也可以写兴趣：开源、技术写作、跑步、摄影等，让页面更有个人气质。
            </p>
          </div>
        </section>

        <section id="skills" className="mb-24 scroll-mt-20">
          <h2 className="mb-6 text-lg font-semibold">技能栈</h2>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-4 py-2 text-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section id="projects" className="mb-24 scroll-mt-20">
          <h2 className="mb-6 text-lg font-semibold">精选项目</h2>
          <ul className="grid gap-4">
            {projects.map((project) => (
              <li key={project.title}>
                <a
                  href={project.href}
                  className="group block rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-colors hover:border-[var(--accent)]"
                >
                  <h3 className="mb-2 font-medium group-hover:text-[var(--accent)]">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-[var(--muted)]">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-[var(--accent-soft)] px-2 py-0.5 text-xs text-[var(--accent)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="scroll-mt-20">
          <h2 className="mb-6 text-lg font-semibold">联系我</h2>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
            <p className="mb-4 text-[var(--muted)]">
              欢迎通过邮件或社交账号交流、合作。
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-[var(--muted)]">邮箱：</span>
                <a
                  href="mailto:you@example.com"
                  className="text-[var(--accent)] hover:underline"
                >
                  you@example.com
                </a>
              </li>
              <li>
                <span className="text-[var(--muted)]">GitHub：</span>
                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] hover:underline"
                >
                  github.com/your-username
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--border)] py-8 text-center text-sm text-[var(--muted)]">
        © {new Date().getFullYear()} 你的名字 · 用 Next.js 部署在 Vercel
      </footer>
    </div>
  );
}
