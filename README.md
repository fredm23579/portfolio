# Fred Motta — Portfolio

**Physicist · Full-Stack Software Engineer · AI Agent Architect**

[![Live Site](https://img.shields.io/badge/Live%20Site-fredm23579.github.io%2Fportfolio-3dd8e0?style=flat-square)](https://fredm23579.github.io/portfolio/)
[![GitHub](https://img.shields.io/badge/GitHub-fredm23579-181717?style=flat-square&logo=github)](https://github.com/fredm23579)
[![Email](https://img.shields.io/badge/Email-motta%40g.ucla.edu-0078D4?style=flat-square&logo=gmail)](mailto:motta@g.ucla.edu)

---

## About This Repo

This is the source code for my personal portfolio site, hosted at [fredm23579.github.io/portfolio](https://fredm23579.github.io/portfolio/). It's a hand-built static site — no frameworks, no build tools, no dependencies — just HTML, CSS, and vanilla JavaScript.

The design reflects my background: dark-first aesthetic, physics equation in the hero, animated wave canvas based on a superposition of sinusoidal functions, and a content structure that foregrounds both my engineering work and my scientific background.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Markup | Semantic HTML5 |
| Styling | Custom CSS (variables, grid, flexbox, dark/light theming) |
| Behavior | Vanilla JavaScript (no libraries) |
| Fonts | JetBrains Mono (display/code) + Satoshi (body) |
| Hosting | GitHub Pages |
| Animation | Canvas API — multi-layer standing wave superposition |

---

## Site Sections

### Hero
Animated wave canvas background (4-layer sinusoidal superposition, responsive, respects `prefers-reduced-motion`). Displays the Schrödinger equation — a nod to the physics background that informs how I think about systems.

### About
Brief professional narrative: M.S. Physics → UCLA Extension full-stack bootcamp → software engineering with a focus on AI agent architecture. Based in Riverside, CA.

### Featured Projects

| Project | Stack | Status |
|---|---|---|
| [Agent-Omega](https://github.com/fredm23579/Agent-Omega) | Python · FastAPI · Pydantic · PostgreSQL | Active |
| [E-Commerce Platform](https://github.com/fredm23579/e-commerce-site) | React · Node/Express · MongoDB · GraphQL · JWT | [Live](https://e-commerce-site-us2y.onrender.com/) |
| [OpenAI Chat CLI](https://github.com/fredm23579/openai-chat-commandline) | Node.js · OpenAI API | Active |
| [MERN Book Search](https://github.com/fredm23579/mern-book-search) | React · Apollo · GraphQL · MongoDB | Complete |
| [Pets-Bytes](https://github.com/fredm23579/pets-bytes) | JavaScript · Google Maps API | [Live](https://fredm23579.github.io/pets-bytes/) |
| [Tech Blog MVC](https://github.com/fredm23579/tech-blog-mvc) | Express · Handlebars · MySQL · Sequelize | [Live](https://tech-blog-mvc-express-8bd9dcae84c7.herokuapp.com/) |

### Skills
Languages · Frontend · Backend & Data · AI/ML · DevOps · Physics & Science

### Research Interests
Theoretical Physics (Kaluza-Klein, quantum spacetime) · Plasma Simulation (PIC methods) · AI Governance & Constitutional Constraints · Materials Science (MOFs, PALS spectroscopy)

### Contact
[motta@g.ucla.edu](mailto:motta@g.ucla.edu)

---

## Background

I hold a Master's degree in Physics with research experience in plasma simulation and materials characterization. After graduate school, I completed the [UCLA Extension / UCRX full-stack web development bootcamp](https://extension.ucr.edu/) (JavaScript, MERN stack, SQL, REST/GraphQL) and pivoted to software engineering.

My current primary project is **Agent-Omega** — a governed recursive self-improvement platform that explores how AI systems can safely modify themselves under constitutional constraints. The architecture includes a typed Reflective IR, a kernel-governed mutation pipeline, provider-agnostic model adapters (OpenAI, Anthropic), staged deployment discipline (shadow → canary → rollout), and formal ADR documentation.

Physics + software + AI governance is the triangle I work inside.

---

## GitHub at a Glance

| Metric | Value |
|---|---|
| Public repos | 77 |
| Original (non-fork) repos | 26 |
| Primary languages | JavaScript, Python, HTML/CSS, SQL |
| Notable forks | JupyterPIC, OSHUN, QuickPIC-OpenSource, UPIC-2.0, PIC-skeleton-codes |
| Account created | August 2023 |

The forked physics repos (plasma PIC codes, Vlasov-Fokker-Planck solvers, OpenPMD writers) reflect my research background; the original repos reflect the bootcamp arc plus Agent-Omega as the current frontier project.

---

## Local Development

There's no build step. Clone and open `index.html` directly in a browser, or serve it with any static file server:

```bash
git clone https://github.com/fredm23579/portfolio.git
cd portfolio

# Option 1 — Python
python -m http.server 8080

# Option 2 — Node
npx serve .
```

Then visit `http://localhost:8080`.

---

## Deployment

Deployed automatically via GitHub Pages from the `main` branch. Any push to `main` updates the live site within ~30 seconds.

---

## License

MIT — feel free to fork the structure, but please swap in your own content.
